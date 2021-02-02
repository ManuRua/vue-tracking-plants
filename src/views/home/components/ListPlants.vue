<template>
  <div>
    <h1 class="title font-bold text-xl mb-4">
      {{ title }}
    </h1>
    <ul>
      <li>
        <button
          class="border border-black rounded-2xl py-1 px-3 text-3xl"
          @click="goToCreatePlant"
        >
          +
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { ROUTES } from '@/constants'

export default class ListPlants extends Vue {
  title = 'Mis plantas'

  goToCreatePlant() {
    this.$router.push({
      name: ROUTES.ADD.name
    })
  }
}
</script>
