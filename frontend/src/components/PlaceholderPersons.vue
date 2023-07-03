<script lang="ts" setup>
import {onUnmounted, reactive} from "vue";
import {getUsers, User} from "../api/jsonplaceholder";
import UserCard from "./UserCard.vue";
import UserTable from "./UserTable.vue";

const state = reactive({
  users: [] as User[],
  selectedUser: null as User|null
})

getUsers().then(users => state.users = users);

function toggleUserSelect(user: User) {
  state.selectedUser = state.selectedUser === user ? null : user;
}

function deleteUser(user: User) {
  state.users = state.users.filter(it => it.id !== user.id)
  state.selectedUser = state.selectedUser === user ? null : state.selectedUser
}

const interval = setInterval(() => console.log('was here'), 1000)
onUnmounted(() => clearInterval(interval))
</script>

<template>
  <div class="section">
    <UserTable :selected-user="state.selectedUser" :users="state.users"
               @selectUser="toggleUserSelect"
               @deleteUser="deleteUser"
    />
    <div class="detail" v-if="state.selectedUser !== null">
      <UserCard :user="state.selectedUser" />
    </div>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  gap: 2em;
}
.detail {
  width: 30%;
}
</style>
