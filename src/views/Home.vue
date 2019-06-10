<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Hebrew Calendar</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content color="dark">

      <ion-text>
        <h1>{{moment(calendar.date)}}</h1>
        <h2>{{calendar.location.title}}</h2>
      </ion-text>

      <Items v-for="(item, index) in calendar.items" :key="index" :item="item" />

    </ion-content>
  </div>
</template>

<script>
import Items from '../components/Items';
import moment from 'moment';

export default {
  name: 'home',
  components: {
    Items
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
    const res = await fetch(`https://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&min=off&mod=on&nx=on&year=now&month=${moment().format("M")}&ss=on&mf=on&c=on&geo=zip&zip=72117&m=50&s=on`);
    this.calendar = await res.json();
  } 
}
</script>

<style scoped>
  
</style>
