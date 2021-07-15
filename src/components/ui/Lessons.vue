<template>
  <section>
    <div>
      <h2>{{ title }}</h2>
      <router-link to="/about">Bizdagi barcha holatlar</router-link>
    </div>

    <teams-leader></teams-leader>    
  </section>  
</template>


<script>
import TeamsLeader from './Teams.vue'
export default {
  components: {
    TeamsLeader
  },
  data() {
    return{
      title: `Tez kunda yangi guruh ochilishi kutilayotgan darslar`
    }
  }
}
</script>

<style scoped>
section{
  background: #fff;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
}

h2{
  color: #EE3163;
  text-align: center;
  font-size: 30px;
}
div{
  display: flex;
  justify-content: center;
  align-items: center;
}

a{
  text-decoration: none;
  padding: .85rem .8rem;
  font: inherit;
  cursor: pointer;
  text-align: center;
  background-color: #fff;
  background: #bbb9b9;
  border-radius: 20px;
  font-weight: bolder;
  color: white
}
a:hover{
  color: rgb(80, 78, 78);
  transition: 1s;
}
</style>