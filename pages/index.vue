<template>
  <div>
    <h1>Bude Tide Times</h1>
    <ul>
      <li v-for="time of times" :key="time.DateTime">
        {{ $nuxt.$dayjs(time.DateTime).format('Do MMMM YYYY hh:mmA') }}: {{ time.EventType }}
        <span v-if="time.Height">({{ Number(time.Height).toFixed(2) }}m)</span>
 </li>
    </ul>
<h1>Current weather<h1>
<p>Temperature: {{ weather.main.temp }}&#8451<p>
<p>Feels like: {{ weather.main.feels_like }}&#8451<p>
    <button class="btn-primary" @click="$fetch">Refresh</button>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.times = await this.$axios.$get(
      'https://beach-safe.netlify.app/.netlify/functions/tidal-events'
    )
    this.weather = await this.$axios.$get(
      'https://beach-safe.netlify.app/.netlify/functions/current-weather'
    )
  },
  data() {
    return {
      times: [],
      weather: {}
    }
  },
}
</script>
