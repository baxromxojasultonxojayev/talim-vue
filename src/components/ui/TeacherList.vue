<template>
  <section>
    <base-card>
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
    </base-card>
    <ul></ul>
    <teacher-info></teacher-info>
  </section>
</template>


<script>
import TeacherInfo from '../../teachers/TeacherInfo.vue'
import BaseCard from './BaseCard.vue'
export default {
  components: {
    TeacherInfo,
    BaseCard
  },
  data(){
    return{
      title: 'Bizning jamoa',
      text: `Kafolatlangan ta'lim tizimi`
    }
  }
}
</script>

<style scoped>
section{
  background: linear-gradient(210.88deg, #f9fafc 7.52%, #968f91 92.48%);
  padding: 15px;
}
h2{
  color: #EE3163;
}

p{
  color: #9202B7;
  margin-top: 25px;
}

</style>