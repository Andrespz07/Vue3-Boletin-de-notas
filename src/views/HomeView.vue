<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import FormComponent from '../components/FormComponent.vue';
import TableComponent from '../components/TableComponent.vue';


</script>

<template>
  <main>
  <HeaderComponent :title="'Notes student'">
  </HeaderComponent>
  <FormComponent></FormComponent>
  <TableComponent></TableComponent>
  </main>
</template>
<style lang="scss" scoped>
  main{
    background-color: darkslategrey;
    width: auto;
    height: 100vh;
  }
</style>