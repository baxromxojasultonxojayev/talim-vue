<template>
  <section>
    <h2>Ro'yxatdan o'tish uchun quyidagilarni to'ldiring</h2>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="name">Ismingiz</label>
          <input type="text" id="name" v-model,trim="name">
        </div>
      
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" id="email" v-model.trim="email">
        </div>
        <div class="form-control">
          <label for="password">Parolingizni kiriting</label>
          <input type="password" id="password" v-model.trim="password">
        </div>
        <p v-if="!formIsValid">Qandaydir xatolik bor, iltimos xatoni to'g'irlab qayta urinib ko'ring</p>
        <base-button>{{submitButtonCaption}}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{submitModeButtonCaption}}</base-button>
      </form>
    </base-card>  
  </section>
</template>

<script>
export default {
  data(){
    return{
      name: '',
      email: '',
      password: '',
      formIsValid: false,
      mode: 'login'
    }
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login'
      } else{
        return 'SignUp'
      }
    },
    submitModeButtonCaption() {
      if (this.mode === 'login') {
        return `Signup ga o'tish`
      } else{
        return `Login ga o'tish`
    }
    }, 
  },
  methods: {
    submitForm() {
      this.formIsValid = true
      if( this.name === '' || 
          this.email === '' ||
          !this.email.includes('@') || 
          this.password.length < 5
      ) {
        this.formIsValid = false
        return false
      }
    },
    switchAuthMode() {
      if(this.mode === 'login'){
        this.mode = 'signup'
      } else{
        this.mode = 'login'
      }
    }
  }
}
</script>


<style scoped>
h2{
  text-align: center;
  margin-top: 50px;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>