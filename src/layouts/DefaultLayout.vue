<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header flex flex-center">
      <q-toolbar>
        <q-toolbar-title>Home Automation</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'DefaultLayout'
};
</script>

<style scoped>
.header {
  height: 60px;
}
</style>
