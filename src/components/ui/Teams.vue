<template>
    <img src="../../../public/photos/section-1/shape.png" class="shape" alt="img">
  <section>
    <!-- <base-card> -->
        <div>
          <img src="https://picsum.photos/100/100" alt="">
          <p><router-link to="/about/c1/events">Matematika</router-link> </p>
        </div>
        <div>
          <img src="https://picsum.photos/100/100" alt="">
          <p><router-link to="/about/c1/events">Fizika</router-link></p>
        </div>
        <div>
          <img src="https://picsum.photos/100/100" alt="">
          <p><router-link to="/about/c1/events">Kimyo</router-link></p>
        </div>
        <div>
          <img src="https://picsum.photos/100/100" alt="">
          <p><router-link to="/about/c1events">Ingliz tili</router-link></p>
        </div>
    <!-- </base-card> -->
  </section>
    <img src="../../../public/photos/section-1/plant.png" class="icon" alt="img">

</template>


<style scoped>
section{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  /* margin: 10px 15px; */
}
div{
  width: 300px;
  margin-top: 20px;
  display: flex;
  align-items: center;
}
p{
  padding-left: 10px;
}
img{
  border-radius: 30%;
}
a{
  text-decoration: none;
  font: inherit;
  cursor: pointer;
  text-align: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 20px;
  font-weight: bolder;
  color: #e97a7a;
}
a:hover{
  color: #a05a5a;
  transition: 1s;
}

.icon{
  position: absolute;
  margin-left: 50px;
  margin-bottom: -100px;
  width: 100px;
  bottom: -160%;
  left: 12%;
}
.shape{
  position: absolute;
  right: 25%;
  margin-right: 20px;
}
</style>