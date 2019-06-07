<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Hebrew Calendar</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-card>
      <ion-card-header>
        <ion-card-subtitle>{{moment(calendar.date)}}</ion-card-subtitle>
        <ion-card-title>{{calendar.location.title}}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto a possimus mollitia quibusdam, itaque illum modi reprehenderit cumque sed ea aliquam beatae enim debitis. Dolor eius perspiciatis aut possimus?
      </ion-card-content>
    </ion-card>

    <Item />
  </div>
</template>

<script>
import Item from '../components/Item';
import moment from 'moment';
export default {
  name: 'home',
  components: {
    Item
  },
  data() {
    return {
      calendar: null
    }
  },
  methods: {
    moment: () => moment()
  },
  async created() {
    const res = await fetch(`https://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&min=off&mod=on&nx=on&year=now&month=${moment().format("M")}&ss=on&mf=on&c=on&geo=zip&zip=72117&m=50&s=on`);
    this.calendar = await res.json();
  } 
}
</script>
