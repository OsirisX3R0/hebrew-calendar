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
//import Header from '../components/Header';
import moment from 'moment';
import axios from 'axios';

export default {
  name: 'home',
  components: {
    Item//, Header
  },
  data() {
    return {
      calendar: null
    }
  },
  methods: {
    moment: (date) => moment(date).format("MMM D, YYYY h:mma")
  },
  async created() {
    const res = await axios.get(`https://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&min=off&mod=on&nx=on&year=now&month=x&ss=on&mf=on&c=on&geo=zip&zip=72117&m=50&s=on`);
    this.calendar = await res.data;
  } 
}
</script>

<style scoped>
  h1, h2 {
    margin-left: 1rem;
  }
</style>
