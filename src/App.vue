<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default { name: 'app' }
</script>

<style>
@import 'https://semantic-ui.com/dist/components/reset.css';
@import 'https://semantic-ui.com/dist/components/site.css';

@import 'https://semantic-ui.com/dist/components/container.css';
@import 'https://semantic-ui.com/dist/components/grid.css';
@import 'https://semantic-ui.com/dist/components/header.css';
@import 'https://semantic-ui.com/dist/components/image.css';
@import 'https://semantic-ui.com/dist/components/menu.css';

@import 'https://semantic-ui.com/dist/components/divider.css';
@import 'https://semantic-ui.com/dist/components/segment.css';
@import 'https://semantic-ui.com/dist/components/form.css';
@import 'https://semantic-ui.com/dist/components/input.css';
@import 'https://semantic-ui.com/dist/components/button.css';
@import 'https://semantic-ui.com/dist/components/list.css';
@import 'https://semantic-ui.com/dist/components/message.css';
@import 'https://semantic-ui.com/dist/components/icon.css';

body { background-color: #DADADA }

body > #app,
body > #app > .grid
{ height: 100% }

.image { margin-top: -100px }

.column { max-width: 450px }
</style>
