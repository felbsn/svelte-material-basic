<script>
    import Button from "$lib/Button.svelte";
    import Drawer from "$lib/Drawer.svelte";
    import Item from "$lib/Item.svelte";
    import List from "$lib/List.svelte";
    import Card from "$lib/Card.svelte";
    import MenuSurface from "$lib/MenuSurface.svelte";
    import IconButton from "$lib/IconButton.svelte";
    import TopAppBar from "$lib/TopAppBar.svelte";
    import Textfield from "$lib/Textfield.svelte";
    import TextArea from "$lib/TextArea.svelte";
    import Select from "$lib/Select.svelte";

    let on = false;
    let list;
    let drawer = false;

    let outlinedValue;

    let s0;
    let s0val;
    let s0index;
    let s1;
</script>

<TopAppBar>
    <Drawer fixed slot="drawer" bind:open={drawer} variant="modal" />

    <div class="container">
        <Button
            on:click={() => {
                drawer = !drawer;
            }}>Toggle Drawer</Button
        >
        <Button variant="raised">Test</Button>

        <div>
            <Select
                label="beni"
                bind:selectedIndex={s0}
                on:change={(e) => {
                    s0val = e.detail.value;
                    s0index = e.detail.index;
                }}
                items={[
                    { label: "test", value: "11" },
                    { label: "aaa", value: "32" },
                ]}
            />
            <span>s0:{s0} selection= {s0val},{s0index} </span>
        </div>

        <div>
            <Select
                label="beni"
                variant="outlined"
                items={[
                    { label: "test", value: "11" },
                    { label: "aaa", value: "32" },
                ]}
            />
        </div>

        <Textfield label="fielda" fullWidth={true} />

        <div>
            <Textfield
                label="outlined"
                variant="outlined"
                bind:value={outlinedValue}
            />
            {outlinedValue}
        </div>

        <TextArea />
    </div>
</TopAppBar>

{#if false}
    <TopAppBar>
        <main>
            <Button>test</Button>
            <Button
                on:click={(e) => {
                    console.log(e);
                }}
                variant="raised">test</Button
            >

            <List bind:this={list} selecteable={on}>
                <Item primary="test" secondary="other " />
                <Item primary="test" secondary="other " />
                <Item primary="test" secondary="other " />
            </List>

            <Card>
                <List>
                    <Item primary="test" secondary="other " />
                    <Item primary="test" secondary="other " />
                    <Item primary="test" secondary="other " />
                </List>
            </Card>

            <!-- <MenuSurface open={true}>
            <List>
                <Item primary='test' secondary='other '></Item>
                <Item primary='test' secondary='other '></Item>
                <Item primary='test' secondary='other '></Item>
            </List>
        
        </MenuSurface> -->

            <IconButton bind:on>favorite</IconButton>
            <IconButton bind:on>favorite</IconButton>

            <Button
                on:click={() => {
                    console.log(list);
                    list.clear();
                }}>Clear</Button
            >
        </main>
    </TopAppBar>
{/if}

<!-- <Drawer></Drawer> -->
<style lang="scss">
    .container {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;

        flex-direction: column;

        justify-content: space-evenly;
    }

    :global(html, body) {
        margin: 0;
        width: 100%;
        height: 100%;
    }
</style>
