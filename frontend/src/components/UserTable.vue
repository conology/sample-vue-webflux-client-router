<script setup lang="ts">
import {User} from "../jsonplaceholder";

const props = defineProps<{
  users: User[]
  selectedUser: User|null
}>()

defineEmits<{
  selectUser: [user: User]
  deleteUser: [user: User]
}>()
</script>

<template>
  <table class="table is-fullwidth">
    <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Company Name</th>
      <th />
    </tr>
    </thead>
    <tbody>
    <tr v-for="user in props.users" :key="user.id" :class="{'is-selected': props.selectedUser === user}"
        @click="$emit('selectUser', user)"
    >
      <td>{{ user.id}} </td>
      <td>{{ user.name}}</td>
      <td>{{ user.company.name}}</td>
      <td>
        <button class="button is-danger" @click.stop="$emit('deleteUser', user)">Delete</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>