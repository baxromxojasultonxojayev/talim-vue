<template>
  <section class="home-page">
    <div class="bg-image"></div>
    <slider-type></slider-type>
    <router-link to="/register" class="register"> Ro'yxatdan o'tish</router-link>
  </section>

  <section class="info-study">
    <base-card>
      <div class="about">
        <h4><router-link to="/about"> Biz haqimizda</router-link></h4>
      </div>
      <div class="simple">
        <h4><router-link to="/gallery">Foto galereya</router-link></h4>
      </div>
      <div class="simple">
        <h4><router-link to="/achievement">Bizning yutuqlar</router-link></h4>
      </div>
    </base-card>
    <img src="../../../public/photos/section-1/Group_14.png" class="group" alt="img">
    <img src="../../../public/photos/section-1/icon.png" class="icon" alt="img">
    
    <base-card>
      <div>
        <h2>{{ title }}</h2>
        <p>{{ text }}  </p>
      </div>
      <div>
        <img src="../../../public/photos/section-1/frame.png" class="frame" alt="img">
      </div>

    </base-card>
    <div class="button-about">
      <h3 class="button-text"><router-link to="/about">Davomini o'qish</router-link></h3>
    </div>
  </section>

  <section class="achievement">
    <h2>Bizning muvaffaqiyatlarimiz</h2>
    <p>O'qish sifati kafolatlangan</p>
    <div class="container">
      <div class="yutuqlar">
      <h4><router-link to="/achievement">1K o'quvchilar</router-link></h4>
      </div>
      <div class="yutuqlar">
        <h4><router-link to="/gallery">100 dan ortiq bitirganlar</router-link></h4>
      </div>
      <div class="yutuqlar">
        <h4><router-link to="/achievement">Biz erishgan natijalar</router-link></h4>
      </div>
    </div>
  </section>

  <section class="lessons">
    <div class="container">
      <lesson-type></lesson-type>
    </div>
  </section>
<teacher-list></teacher-list>
<!-- <about-us></about-us> -->
</template>





<script>
import SliderType from '../../pages/Slider.vue'
import LessonType from '../../components/ui/Lessons.vue'
import TeacherList from '../../components/ui/TeacherList.vue'
// import AboutUs from './about.vue'
export default {
  data(){
    return{
      title: `Bizning o'quv markazimizga xush kelibsiz`,
      text: `Bizning o'quv markazimiz bundan 2 yil oldin tashkil etilgan bo'lib ....`,
    }
  },
  components: {
    SliderType,
    LessonType,
    TeacherList,
    // AboutUs
  }
}
</script>

<style scoped>
.home-page{
  background: linear-gradient(213.26deg,#EE3163 6.81%, #1D32CC 93.19%);
}

.bg-image{
  width: 100%;
  min-height: 500px;
  background-image: url('../../../public/photos/section-1/logo.jpg');
  background-size: 300px, 200px, cover;
  background-position: 500px 70px;
  background-repeat: no-repeat;
  opacity: 0.4;
}
.register{
  position: absolute;
  bottom: 15%;
  left: 43%;
   text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: rgb(236, 232, 232);
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
  font-size: 20px;
}

.info-study{
  background: #F3F4F8;
  padding: 10px;
  position: relative;
}
.group{
  width: 100px;
  position: absolute;
  top: 20%;
}
.icon{
  width: 200px;
  position: absolute;
  right: 1%;
  top: 10%;
}

.about{
  background: linear-gradient(213.26deg,#EE3163 6.81%, #1D32CC 93.19%);
  color: white!important;
  border-radius: 20px;

}
.simple{
  background-color: #fff;
  background: linear-gradient(213.26deg,#b38994 6.81%, #1D32CC 93.19%);
  border-radius: 20px;

}
a{
  text-decoration: none;
  padding: 1.85rem 1.5rem;
  font: inherit;
  color: rgb(253, 249, 249);
  cursor: pointer;
  margin-right: 0.5rem;
  display: inline-block;
  font-size: 18px;
}
a:hover{
  color: black;
  transition: 1s;
}
h2{
  text-align: center;
  font-size: 25px;
  color: #1E1E1E;
}

.frame{
  width: 230px;
  margin-left: 10px;
}
.button-text{
  position: absolute;
  bottom: 10%;
  left: 30%;
  background: #FFBB02;
  border-radius: 20px;
  line-height: 20px;
}
p{
  font-family: Cormorant Garamond;
  color: #68778C;
  text-align: center;
}

.container{
  margin: 0 auto;
  width: 900px;
  display: flex;
  justify-content: center;
  align-content: center;
}

.yutuqlar{
  margin: 10px;
  width: 200px;
  background-color: #fff;
  background: linear-gradient(213.26deg,#927a80 6.81%, #1D32CC 93.19%);
  border-radius: 20px;
  text-align: center;
}

.lessons{
  background: #F3F4F8;

}
</style>
