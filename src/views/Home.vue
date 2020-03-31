<template>
  <div>
    <div v-if="calendar">
      <div>
        <h1>{{moment(calendar.date)}}</h1>
        <h2>{{calendar.location.title}}</h2>
      </div>

      <Item v-for="(item, index) in calendar.items" :key="index" :item="item" />

    </div>
  </div>
</template>

<script>
import Item from '../components/Item';
import moment from 'moment';
import axios from 'axios';

export default {
  name: 'home',
  components: {
    Item
  },
  data() {
    return {
      calendar: null,
      settings: JSON.parse(localStorage.getItem('settings'))
    }
  },
  methods: {
    moment: (date) => moment(date).format("MMM D, YYYY h:mma")
  },
  async created() {
    const res = await axios.get(`https://www.hebcal.com/hebcal/?v=1&cfg=json&maj=${this.majorHolidays}&min=${this.minorHolidays}&nx=${this.roshChodesh}&mf=${this.minorFasts}&s=${this.parashat}&c=${this.candleLighting}&o=${this.daysOfOmer}&i=${this.torahReadings}&mod=on&&year=now&month=x&ss=on&&geo=zip&zip=72117&m=50&`);
    this.calendar = await res.data;
  },
  computed: {
    majorHolidays: function() {
      return this.settings && this.settings.majorHolidays ? 'on' : 'off';
    },
    minorHolidays: function() {
      return this.settings && this.settings.minorHolidays ? 'on' : 'off';
    },
    roshChodesh: function() {
      return this.settings && this.settings.roshChodesh ? 'on' : 'off';
    },
    minorFasts: function() {
      return this.settings && this.settings.minorFasts ? 'on' : 'off';
    },
    parashat: function() {
      return this.settings && this.settings.parashat ? 'on' : 'off';
    },
    candleLighting: function() {
      return this.settings && this.settings.candleLighting ? 'on' : 'off';
    },
    daysOfOmer: function() {
      return this.settings && this.settings.daysOfOmer ? 'on' : 'off';
    },
    torahReadings: function() {
      return this.settings && this.settings.torahReadings ? 'on' : 'off';
    }
  }
}
</script>

<style scoped>
  h1, h2 {
    margin-left: 1rem;
  }
</style>
