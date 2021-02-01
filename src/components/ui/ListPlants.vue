<template>
  <div>
    <h1 class="title font-bold text-xl mb-4">
      {{ title }}
    </h1>
    <ul>
      <li>
        <button class="border border-black rounded-2xl py-2 px-4 text-3xl">
          +
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class ListPlants extends Vue {
  title = 'Mis plantas'
}
</script>
