<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import FormComponent from '../components/FormComponent.vue';
import TableComponent from '../components/TableComponent.vue';


</script>

<template>
  <main>
  <HeaderComponent :headerProps="'Boletín de notas'">
  </HeaderComponent>
  <FormComponent></FormComponent>
  <TableComponent></TableComponent>
  </main>
</template>
<style lang="scss" scoped>
  main{
    background-color: darkslategrey;
    width: 100vw;
    height: 100vh;
  }
</style>