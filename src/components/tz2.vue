<template>
  <div id="main1">
    <div class="dragQ">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <draggable v-model="listQ" class="dragArea dragArea1" :options="{group:liQ,sort: false}">
        <img  :class="[element.isActive ? liac : '',element.isActive1 ? liac1 : '']" v-for="(element ,index) in listQ" :src="element.name" :key="index" alt >
      </draggable>
    </div>

    <div class="drag">
      <draggable v-model="list" class="dragArea dragArea1" :options="{group:li2}" @remove="end1">
        <img :class="[element.isActive1 ? liac1 : '']"  v-for="(element ,index) in list" :src="element.name" :key="index" alt>
      </draggable>

      <draggable v-model="list2" class="dragArea dragArea2" :options="{group:li3}" @remove="end2" @start="start" @clone="clone">
        <img :class="[element.isActive1 ? liac2 : '']"  v-for="(element ,index) in list2" :src="element.name" :key="index" alt>
      </draggable>

      <draggable v-model="list3" class="dragArea dragArea2" :options="{group:li1}" @remove="end3">
        <img :class="[element.isActive1 ? liac1 : '']"  v-for="(element ,index) in list3" :src="element.name" :key="index" alt>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "main1",
  data() {
    return {
      li1: "li1",
      li2: "li2",
      li3: "li3",
      liQ: "li1",
      listQ: [],
      liNum: 0,
      liac:'liac',
      liac1:'liac1',
      liac2:'liac2',
      list: [
        {
          id: 2,
          name: require("../assets/A2.png"),
          isActive:false,
          isActive1:true,
        }
      ],
      list2: [
        {
          id: 3,
          name: require("../assets/A3.png"),
           isActive:true,
            isActive1:true,
        }
      ],
      list3: [
        {
          id: 1,
          name: require("../assets/A1.png"),
           isActive:false,
            isActive1:true,
        }
      ],
      num: 0,
      endNum: 0,
      endNum2: 0,
      endNum3: 0
    };
  },
  methods: {
    end1: function() {
      this.liQ = "li3";
       var list1,list2;
      for (var i = 0; i < this.listQ.length; i++) {
        if(this.listQ[i].id==1){
            list1=this.listQ[i]
        }
        else  if(this.listQ[i].id==2){
            list2=this.listQ[i]
        }
      }
      this.listQ=[list1,list2]
    },
    end2: function() {
      this.liQ = "li4";
      console.log(this.listQ);
      console.log(this.list2);
      var list1,list2,list3;
      for (var i = 0; i < this.listQ.length; i++) {
        if(this.listQ[i].id==1){
            list1=this.listQ[i]
        }
        else  if(this.listQ[i].id==2){
            list2=this.listQ[i]
        }
        else  if(this.listQ[i].id==3){
            list3=this.listQ[i]
        }
        
      }
      this.listQ=[list1,list3,list2];
      setTimeout(function(){
          alert('ok')
      },1000)
     
    },
    end3: function() {
      this.liQ = "li2";
    }
    ,
    start:function(){
      
       console.log(this.list2[0].isActive)
       
   
    }
    ,clone:function(){
        console.log('221')
    }
  },
  components: {
    draggable
  }
};
</script>


<style scoped lang="scss">
#main1 {
  max-width: 500px;
  padding-top: 20%;
  box-sizing: border-box;
  margin: 0 auto
}
.drag {
  width: 50%;
  display: flex;
  justify-content: space-between;

  margin: 50% auto 0;
}
.drag .dragArea{
    height: 100px;
    position: relative;
}

.dragQ {
  position: relative;
  width: 100%;
}
.dragQ .dragArea {
  position: absolute;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.line {
  border-bottom: 1px dashed #000;
  width: 100%;
}
.dragQ .line:nth-child(1) {
  margin-bottom: 10%;
}
.dragQ .line:nth-child(2) {
  margin-bottom: 10%;
}
.dragQ .line:nth-child(3) {
  margin-bottom: 10%;
}


.liac1 {
  height: 66%;
}
.liac2 {
  height: 10%;
  position: absolute;
  top: 40%;
}
.liac {
  height: 10%!important;
  position: absolute;
  top: 40%;
}
</style>
