<template>
    <div class="item">
      <div>
        <div>{{item.hebrew}}</div>
        <div>
          {{item.title}}
          <span v-if="item.category">
            <br />
            <h6>
              {{item.category}}
              <span v-if="item.subcat"> - {{item.subcat}}</span>
            </h6>
          </span>
        </div>
      </div>
      <div>

        <span v-if="item.date">Date: {{moment(item.date)}}</span>
        <p v-if="item.memo"><em>{{item.memo}}</em></p>

        <ul v-if="item.leyning">
          <li v-for="(passage, index) in item.leyning" :key="index">
            <span v-if="index!='triennial'">{{index}} - {{passage}}</span>
            <span v-if="index=='triennial'">
              {{index}}:<br />
              <ul v-for="(tri, index) in passage" :key="index">
                <li>{{index}} - {{tri}}</li>
              </ul>
            </span>
          </li>
        </ul>

        <!-- <p v-if="item.link"><a :href="link">Read More ></a></p> -->
      </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: "Item",
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
  h6 {
    margin-top: 0;
  }

  .item {
    margin: 1rem;
    padding: 1rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
</style>
