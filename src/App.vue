<template>
  <HeaderVue />
  <router-view />
</template>

<script>
import HeaderVue from "./components/Header";

export default {

  name: 'App',
  components: {
    HeaderVue,
  }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
</style>

