<template>
      <the-header></the-header>
  <div>
    <!-- <base-spinner></base-spinner> -->
    <router-view></router-view>

    <footer>
      <img class="cup" src="../public/photos/section-1/cup.png" alt="">
      <img class="logo" src="../public/photos/section-1/logo.jpg" alt="">
      <div>
        <h2>Bizning manzil</h2>
        <p>📍Manzil: Yashnobod tumani,Olmos mahalla39A </p>
        <p>☎️ Phone: +998933992400 | +998946114334</p>
      </div>
      <div>
        <h3>Ijtimoiy tarmoqlarimiz</h3>
        <ul>
          <li>
            <a href="https://t.me/FRUITFUL_EDU">
              <img class="network" src="../public/photos/section-1/telegram.svg" alt="">
            </a>
          </li>
          <li>
            <a href="https://t.me/FRUITFUL_EDU">
              <img class="network" src="../public/photos/section-1/instagram.svg" alt="">
            </a>
          </li>
          <li>
            <a href="https://t.me/FRUITFUL_EDU">
              <img class="network" src="../public/photos/section-1/facebook.svg" alt="">
            </a>
          </li>
        </ul>
      </div>
    <img class="saturn" src="../public/photos/section-1/saturn.png" alt="">

    </footer>
  </div>

</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue'
export default ({
  components: {
    TheHeader,
  },
  data(){
    return{
      isLoading: false,
      isBody: true
    }
  },
    created() {
      setInterval(() =>{
        this.isLoading = true
        this.isBody = false        
        },3000)
        // this.isLoading = false
        // this.isBody = true
    }
})
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

footer{
  display: flex;
  justify-content: space-around;
  background: #000;
  background: #F3F4F8;
  margin-top: 20px;
  padding-bottom: 50px;
  padding-top: 30px;
}
ul{
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
}
li{
  margin: 10px;
}
h2{
  color: rgb(71, 71, 71);
}
p{
  color: rgb(136, 136, 136);
}


h3{
  color: rgb(71, 71, 71);
}
.cup{
  width: 100px;
  height: 100px;
  margin-top: 20px;
  /* position: absolute; */
}

.saturn{
  width: 100px;
  height: 100px;
  margin-top: 20px;
  /* position: absolute; */
}
.network{
  width: 30px;
  height: 30px;
  border-radius: 48%;
}
.network:hover{
  background: red;
  transition: 1s;
}

img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 10px;
}
</style>