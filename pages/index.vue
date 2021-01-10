<template>
  <div>
    <h1>Tide times</h1>
    <ul>
      <li v-for="time of times" :key="time.DateTime">
        {{ $nuxt.$dayjs(time.DateTime).format('DDDo MMMM YYYY hh:mmA') }}: {{ time.EventType }}
        [Height: {{ time.Height.toFixed(2) }}m]
 </li>
    </ul>
    <button @click="$fetch">Refresh</button>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.times = await this.$axios.$get(
      'https://beach-safe.netlify.app/.netlify/functions/tidal-events'
    )
    console.log(this.times)
  },
  data() {
    return {
      times: [],
    }
  },
}
</script>
