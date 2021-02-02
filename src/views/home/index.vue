<template>
  <div class="home">
    <ListPlants />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import ListPlants from '@/views/home/components/ListPlants.vue'

@Options({
  components: {
    ListPlants
  }
})
export default class Home extends Vue {}
</script>
