<script setup lang="ts">
import {ref} from 'vue'

interface PersonData {
  id: number,
  name: string
}

const persons = ref([] as PersonData[]);

(async () => {
  const url = (import.meta.env.VITE_BFF_BASE_PATH ?? "") + "/api/person/";
  const response = await fetch(url);
  persons.value = await response.json();
})();

</script>

<template>
  <h1>Person</h1>
  <div class="data">
    <table v-if="persons.length > 0">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in persons">
          <td>{{ person.id }}</td>
          <td>{{ person.name }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>No persons</p>
  </div>
</template>

<style scoped>
.data {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
