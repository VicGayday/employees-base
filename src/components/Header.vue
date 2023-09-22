<template>
 <div class="container">
    <header class="header-main">
      <div class="logo">Жилфонд</div>
      <div class="user">Пользователь</div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
 .header-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 115px;
 }

 .logo {
  color: #E31F24;
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 700;
  line-height: 39px;
  letter-spacing: 0em;
 }

 .user {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
 }
</style>
