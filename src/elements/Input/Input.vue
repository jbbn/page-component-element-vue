<template>
  <div>
    <div
      :class="[
        'ui',
        { 'left icon' : icon },
        'input'
      ]"
    >
      <i
        v-if="icon"
        :class="[ icon, 'icon' ]"
      ></i>
      <input
        type="text"
        :name="name"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'el-input',
  props: [ 'icon', 'name', 'placeholder' ]
}
</script>

<style></style>
