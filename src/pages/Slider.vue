<template>
  <transition-group name="text">
    <p >{{ text }}</p>
  </transition-group>
</template>

<script>
// const images = [
//   "https://picsum.photos/1000/800?random=1",
//   "https://picsum.photos/1000/800?random=2",
//   "https://picsum.photos/1000/800?random=3",
// ];
const texts = [
  `bizning maqsad o'quvchilarga bilmagan narslarini o'rgatishdir!`,
  `sifatga e'tibor eng katta yutuq bo'ladi`,
  `bundan tashqari bilimlarni rivojlantirish asosiy ne'matdir `
]
export default {
  // name: "App",
  data() {
    return { index: 0, text: texts[0] };
  },
  created() {
    setInterval(()=>{
      this.index = (this.index + 1) % texts.length;
      this.text = texts[this.index];
    },4000)
   
    
  },
};
</script>


<style scoped>
div{
  display: flex;
  justify-content: space-around;
}
div img{
  /* min-height: 100%; */
  width: 35%;
  object-fit: cover;
}
p{
  width: 800px;
  position: absolute;
  font-size: 30px;
  top: 30%;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  text-align: center;
  left: 20%;
}

.text-enter-from{
  opacity: 0;
  transform: translateX(-100px);
}
.text-enter-active{
  transition: all 2s ease-out;
}
.text-enter-to{
  opacity: 1;
  transform: translateX(0);
}

.text-leave-from{
  opacity: 1;
  transform: translateX(0px);
}
.text-leave-active{
  transition: all 2s ease-out;
}
.text-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}

</style>