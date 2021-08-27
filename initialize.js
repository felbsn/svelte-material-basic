import fs from 'fs'
import path from 'path';

const distDir = 'node_modules/@material';
const destDir = 'src/lib';
 
let index_data = "";

let components = fs.readdirSync(distDir);
for (const component_name of components) {
    
    let has_css = false;

    const module_dir = `node_modules/@material/${component_name}`;
    const dist_css_name= getDistMinCssName(component_name);
    const dist_css_path = path.resolve(module_dir, 'dist', dist_css_name);
    if (fs.existsSync(dist_css_path)) {
        has_css = true;
    }

    const module_names = fs.readdirSync(module_dir);
    const has_script = module_names.find(name => name == 'component.js')

    let file_data = getComponentSvelte(component_name,  has_script, has_css);

    let cleanName = toPascalCase(component_name);

    fs.writeFileSync(path.resolve(destDir,`${cleanName}.svelte`), file_data);

    index_data+= `export {default as ${cleanName}} from './${cleanName}.svelte'\n`
}

fs.writeFileSync(path.resolve(destDir,`index.js`), index_data);


 
function getComponentSvelte(component_name, has_script, has_css )
{
    let mdcName = toMdcName(component_name);
    let file_data = 
    `
    <script lang="ts">
    import { onMount } from "svelte";
    ${has_script ? `import {  ${mdcName}  } from "@material/${component_name}"`: ''}
    

    let node:HTMLElement;
    let component:${has_script ? mdcName : 'any'};

    onMount(()=>{

        ${has_script ? '' : '//' }component = new ${mdcName}(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    ${has_css ? `@import url("@material/${component_name}/dist/${getDistMinCssName(component_name)}");` : ''}
    </style>
    `
    return file_data;
}

 
function toPascalCase(component_name) {
    return component_name.split('-').map(name => name[0].toUpperCase(name) + name.substring(1)).join('');
}

function toMdcName(component_name)
{
    return 'MDC'+toPascalCase(component_name);
}

function getDistMinCssName(component_name) {
    return `mdc.${component_name}.min.css`;
    // return `node_modules/@material/${input}/dist/mdc.${input}.min.css`
}
