<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
  * { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }
  body,html{
    height: 100%;
  }
</style>
