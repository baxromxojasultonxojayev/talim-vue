<template>
  <img class="prize" src="../../public/photos/section-1/prize.png" alt="">
  <ul>


    <teacher-list 
    v-for="teacher in teacherInfo" 
    :key="teacher.id"
    :title="teacher.title"
    :description="teacher.description"
    :link="teacher.link"></teacher-list>
  </ul>
  <h4><router-link to="/gallery">Va boshqalar</router-link></h4>
  <img class="icon" src="../../public/photos/section-1/icon-5.png" alt="">
  
</template>

<script>
import TeacherList from './TeacherList.vue'

export default {
  components:{
    TeacherList
  },
  data() {
    return{
      teacherInfo: [
        {
          id: 'c1',
          fullName: 'Said Azizov',
          description: 'English teacher: 3 yildan ortiq tajribaga ega',
          link: '/about'
        },
        {
          id: 'c2',
          fullName: 'Fotima Ibragimova',
          description: 'Math teacher: 6 yildan ortiq tajribaga ega',
          // link: '/about'

        },
        {
          id: 'c3',
          fullName: 'Lobar Azizova',
          description: `Ona tili oq'tuvchisi: 4 yildan ortiq tajribaga ega`,
          // link: '/about'

        },
        {
          id: 'c3',
          fullName: 'Lobar Azizova',
          description: `Kimyo o'qtuvchisi: 4  yildan ortiq tajribaga ega`,
          // link: '/about'

        },
      ]
    }
  }
}
</script>



<style scoped>

ul{
  display: flex;
  justify-content: center ;
  flex-wrap: wrap;
}
h4{
  text-align: center;
}
a{
  text-decoration: none;
  color:rgb(124, 93, 124);
}
a:hover{
  color:rgb(97, 74, 97);
  transition: 1s;
}
.prize{
  position: absolute;
  width: 100px;
  height: 100px;
  bottom: -210%;
  left: 7%;
}

.icon{
  position: absolute;
  width: 80px;
  height: 80px;
  left: 5%;
  bottom: -265%;
}
</style>