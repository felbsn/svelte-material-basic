
import fs from 'fs'
import path from 'path';

const libDir = 'src/lib';
const components = fs.readdirSync(libDir);

console.log(components)

let index_data = "";
for (const component_name of components) {
 
    let {name,ext} = path.parse(component_name);
    if(ext == '.svelte')
    {
        index_data+= `export { default as ${name} } from './${component_name}'\n`
    }
}

console.log(index_data);

fs.writeFileSync(path.resolve(libDir,`index.js`), index_data);


function toPascalCase(component_name) {
    return component_name.split('-').map(name => name[0].toUpperCase(name) + name.substring(1)).join('');
}