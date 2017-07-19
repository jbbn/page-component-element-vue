<template>
  <div>
    <h2 class="ui teal image header">
      <img src="https://semantic-ui.com/examples/assets/images/logo.png" class="image">
      <div class="content">
        Log-in to your account
      </div>
    </h2>
    <form class="ui large form">
      <div class="ui stacked segment">

        <!-- e-mail address -->
        <el-input
          class="field"
          icon="user"
          name="email"
          placeholder="E-mail address"
        ></el-input>

        <!-- password -->
        <el-input
          class="field"
          icon="lock"
          name="password"
          placeholder="Password"
        ></el-input>

        <div class="ui fluid large teal submit button">Login</div>
      </div>

      <div class="ui error message"></div>
    </form>

    <div class="ui message">
      New to us? <a href="#">Sign Up</a>
    </div>
  </div>
</template>

<script>
import ElInput from '@/elements/Input/Input'

export default {
  name: 'login-box',
  components: { ElInput }
}

</script>
<style scoped></style>
