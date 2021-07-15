<template>
<!--   
      <img src="../../public/photos/section-1/prize.png" alt=""> -->
    <li>
      <div>
        <header>
          <img src="https://picsum.photos/300/200" alt="">
          <h4>{{ fullName }}</h4>
        </header>
      </div>
      <nav>
        <p>{{ description }}</p>
        <router-link to="/gallery">Read more</router-link>      </nav>
    </li>
</template>

<script>
export default {
  props: ['fullName', 'description']
}
</script> 
<style scoped>
/* base-card{
  display: flex;
} */
li {
  margin: auto;
  max-width: 40rem;
  margin: 35px;
  list-style-type: none;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h4 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
  padding: 10px 30px;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
img{
  border-radius: 20px;
}
</style>