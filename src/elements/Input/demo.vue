<template>
  <div>
    <el-input
      icon="user"
      name="demo-name"
      placeholder="Demonstration placeholder"
    ></el-input>

    <el-input
      icon="lock"
      name="demo-name"
      placeholder="Demonstration placeholder"
    ></el-input>

    <el-input
      name="demo-name"
      placeholder="Demonstration placeholder"
    ></el-input>
  </div>
</template>

<script>
import ElInput from './Input'

export default {
  name: 'e-input-demo',
  components: { ElInput }
}
</script>

<style></style>
