<template>
  <div class="body">
  <div id="login-form-wrap">
    <h2>Sign In</h2>
    <form v-on:submit="verifyUser" id="login-form">
      <p>
        <input type="email" id="email" name="email" placeholder="Email Address" v-model="mail" required>
      </p>
      <p>
        <input type="text" id="Password" name="Password" placeholder="Password" v-model="pass" required>
      </p>
      <p>
        <input type="submit" id="signin" value="sign In">
      </p>
    </form>
    
  </div>
    
</div>
</template>

<script>

export default{
  data(){
    return{
      mail: null,
      pass: null
    }
  },
  methods:{
    verifyUser(e){
      e.preventDefault()
      this.$store.commit('verifyUser', {
        email: this.mail,
        password: this.pass   
      })
      
      if(this.$store.state.isloggedIn){
        
        this.$router.push('/')
      }else{
        alert("incorrect email or password")
      }
    }

  },
  
}
</script>



<style>
.body {
  background-color: white;
  font-size: 1.6rem;
  font-family: "Open Sans", sans-serif;
  color: #2b3e51;
  height: 86vh;
  overflow-y: hidden;
}

h2 {
  font-weight: 300;
  text-align: center;
}

p {
  position: relative;
}


#login-form-wrap {
  background-color: #fff;
  width: 35%;
  margin: 30px auto;
  text-align: center;
  padding: 20px 0 20px 0;
  border-radius: 4px;
  box-shadow: 0px 30px 50px 0px rgba(0, 0, 0, 0.2);
}

#login-form {
  padding: 0 60px;
}

input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  height: 60px;
  line-height: 60px;
  border-radius: 4px;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 0 0 0 10px;
  margin-bottom: 20px;
  color: #8a8b8e;
  border: 1px solid #c2c0ca;
  font-style: normal;
  font-size: 16px;
}




input[type="submit"] {
  border: none;
  display: block;
  background-color: #3ca9e2;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  font-size: 18px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  text-align: center;
}
input[type="submit"]:hover {
  background-color: #329dd5;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

#create-account-wrap {
  background-color: #eeedf1;
  color: #8a8b8e;
  font-size: 14px;
  width: 100%;
  padding: 10px 0;
  border-radius: 0 0 4px 4px;
}
</style>