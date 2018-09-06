<template>
  <div id="app">
    <h1>Ardian Planets</h1>
    <span v-if="planets.status === 'fetching'">Loading...</span>
    <span v-if="planets.status === 'error'">Something Error</span>
    <ul v-if="planets.status === 'fetched'">
      <li v-for="(planet, index) in planets.items" :key="index">
        {{ planet.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex' 
  export default {
    computed: {
      ...mapGetters([
        'planets'
      ])
    },
    mounted () {
      this.$store.dispatch('FETCH_PLANETS')
    }
  }
</script>