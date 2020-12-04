<template>
  <div class="main">
    <router-view />
  </div>
</template>

<style lang="scss">
*{
    box-sizing: border-box;
}
.main{
    width: 1200px;
    margin: 0 auto;
}
ul,
li {
  list-style: none;
  color: rgb(11, 34, 32);
}

a {
  text-decoration: none;
  line-height: 30px;
  transition: 0.8s;
  font-weight: bold;
  color: #4e4e4e;
  border-bottom: 2px solid transparent;
  // -exact
  &.router-link-active {
    color: #4276b9;
  }
}
a:hover {
  border-bottom: 2px solid rgb(63, 14, 38);
  color: #d13eb9;
}
</style>
