<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Hebrew Calendar</ion-title>
      </ion-toolbar>
    </ion-header>

    <Item />
  </div>
</template>

<script>
import Item from '../components/Item';
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
  async created() {
    const res = await fetch(`https://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&min=off&mod=on&nx=on&year=now&month=${new Date().getMonth() + 1}&ss=on&mf=on&c=on&geo=zip&zip=72117&m=50&s=on`);
    this.calendar = await res.json();
  } 
}
</script>
