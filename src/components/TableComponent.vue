<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: null,
  },
  classes: {
    type: String,
    default: null,
  },
  note: {
    type: Number,
    required: true,
  },
});

const evaluation = computed(() => {
  if (props.note <= 3) {
    return "Muy deficiente";
  }
  if (props.note > 3 && props.note <= 5) {
    return "Insuficiente";
  }
  if (props.note > 5 && props.note <= 6) {
    return "Suficiente";
  }
  if (props.note > 6 && props.note <= 7) {
    return "Bien";
  }
  if (props.note > 7 && props.note <= 9) {
    return "Notable";
  }
  if (props.note > 9 && props.note <= 10) {
    return "Sobresaliente";
  }
});
</script>

<template>
  <table>
    <tr>
      <td>{{ name }}</td>
      <td>{{ classes }}</td>
      <td>{{ evaluation }}</td>
    </tr>
  </table>
</template>

<style lang="scss">
table {
  margin: 0 auto;
  border-collapse: collapse;
}

 td {
  padding: 10px;
  text-align: center;

}

</style>