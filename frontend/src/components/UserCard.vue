<script setup lang="ts">
import {User} from "../jsonplaceholder";

const props = defineProps<{
  user: User
}>()
</script>

<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title">{{ props.user.id }}: {{ props.user.name}}</div>
    </div>
    <div class="card-content">
      <ul>
        <li>{{ props.user.phone }}</li>
        <li>{{ props.user.company.name }}</li>
      </ul>
    </div>
  </div>
</template>