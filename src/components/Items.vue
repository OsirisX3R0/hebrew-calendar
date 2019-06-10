<template>
    <ion-card>
      <ion-card-header>
        <ion-card-subtitle>{{item.hebrew}}</ion-card-subtitle>
        <ion-card-title>{{item.title}}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        {{moment(item.date)}}
      </ion-card-content>
    </ion-card>
</template>

<script>
import moment from 'moment';

export default {
    name: "Items",
    props: ["item"],
    data() {
        return {
        }
    },
    methods: {
      moment: (date) => moment(date).format("MMM D, YYYY h:mma")
    }
}
</script>

<style scoped>
  ion-card-title {
    color: ghostwhite;
  }
</style>
