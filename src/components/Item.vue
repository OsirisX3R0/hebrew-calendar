<template>
    <ion-card>
      <ion-card-header>
        <ion-card-subtitle>Item Subtitle</ion-card-subtitle>
        <ion-card-title>Item Title</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto a possimus mollitia quibusdam, itaque illum modi reprehenderit cumque sed ea aliquam beatae enim debitis. Dolor eius perspiciatis aut possimus?
      </ion-card-content>
    </ion-card>
</template>

<script>
export default {
    name: "Item",
    data() {
        return {
            props: ["item"]
        }
    }
}
</script>

<style>

</style>
