<template>
  <div id="main1">
    <div class="drag">
      <div class="dis">
        <draggable v-model="list" class="drag1 drag-bg" :options="{group:'li'}" @add="add">
          <img class="drag1" v-for="element in list" :src="element.name" alt>
        </draggable>

        <draggable v-model="list5" class="drag1 drag-bg1" :options="{group:'li2'}" @add="add">
          <img class="drag1" v-for="element in list5" :src="element.name" alt>
        </draggable>
        <draggable v-model="list3" class="drag1 drag-bg2" :options="{group:'li1'}" @add="add">
          <img class="drag1" v-for="element in list3" :src="element.name" alt>
        </draggable>
      </div>
      <div class="dis">
        <draggable v-model="list2" :options="{group:'li'}" @remove="end">
          <img class="drag2" v-for="element in list2" :src="element.name" alt>
        </draggable>

        <draggable v-model="list4" :options="{group:'li1'}" @remove="end">
          <img class="drag2" v-for="element in list4" :src="element.name" alt>
        </draggable>

        <draggable v-model="list6" :options="{group:'li2'}" @remove="end">
          <img class="drag2" v-for="element in list6" :src="element.name" alt>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "main1",
  data() {
    return {
      list: [],
      list2: [
        {
          id: 1,
          name: require("../assets/A1.png")
        }
      ],
      list3: [],
      list4: [
        {
          id: 1,
          name: require("../assets/A2.png")
        }
      ],
      list5: [],
      list6: [
        {
          id: 1,
          name: require("../assets/A3.png")
        }
      ]
    };
  },
  methods: {
    add: function(e) {},
    end: function(e) {}
  },
  components: {
    draggable
  }
};
</script>


<style scoped lang="scss">
.dis {
  display: flex;
  position: relative;
}
#main1 {
  max-width: 500px;
  margin: 0 auto;
  padding-top: 80%;
}

.drag1 {
  width: 100%;
  height: 100px;
  display: flex;
}
.drag1 img {
  width: 33.33%;
}
.dis .drag1:nth-child(2) img {
  height: 10%;
  width: 100%;
}
.drag-bg {
  background: url(../assets/A1-1.png) no-repeat;

  background-size: 35% 107%;
  background-position-x: 100%;
  background-repeat: no-repeat;
}
.drag-bg1 {
  background: url(../assets/A3-1.png) no-repeat !important;

  background-size: 100% 10% !important;
  background-position-x: 100% !important;
  background-repeat: no-repeat !important;
  background-position-y: 100% !important;
}
.drag-bg2 {
  background: url(../assets/A2-1.png) no-repeat !important;

  background-size: 35% 107% !important;
  background-position-x: 0% !important;
  background-repeat: no-repeat !important;
}
.dis .drag1:nth-child(1) {
  display: flex;
  justify-content: flex-end;
}
.dis .drag1:nth-child(2) {
  display: flex;
  align-content: flex-end;
  align-items: flex-end;

  position: absolute;
  width: 20%;
  background: transparent;
  left: 40%;
  bottom: 20%;
}
.dis .drag1:nth-child(3) {
  display: flex;
  justify-content: flex-start;
}
</style>
