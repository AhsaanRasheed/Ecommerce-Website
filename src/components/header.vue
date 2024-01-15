<template>
    <header>
    <div class="wrapper">
        <RouterLink to="/">
            <img 
            style=
            "height: 70px;
            margin-left: 30px;" 
            src="../assets/categories/logoapp.png">
        </RouterLink>
            <div v-if="$store.state.isloggedIn" style="display: flex;">
                <div class="quantity">{{ $store.state.cart.qty }}</div>
                <div>
                    <RouterLink to="/cart" > <img src="../assets/logocart.png" style="width: 40px; padding: 15px;"> </RouterLink>   
                </div>
            </div>
            <div v-else>
                <RouterLink to="/signin" > <button class="button1"> Login </button></RouterLink>
                <RouterLink to="/signup" > <button class="button2">Register </button></RouterLink>
            </div>
    </div>
  </header>
</template>

<script>
export default{
    
}
</script>

<style scoped>
.wrapper{
    display: flex;
    justify-content: space-between;
    background-color: #48AFFF;
    padding: 10px;
}
.button1{
    padding: 13px 32px;
    font-size: 16px;
    margin: 10px 2px;
    background-color: white;
    border: none;
    border-radius: 7px;
    color:#48AFFF;
}
.button2{
    padding: 13px 32px;
    font-size: 16px;
    margin: 10px 2px;
    background-color:#48AFFF;
    color: whitesmoke;
    border-radius: 7px;
    border: none;
    

}
.quantity{
    width: 30px; 
    height: 30px; 
    background-color: azure; 
    border-radius: 20px; 
    display: flex; 
    justify-content: center; 
    align-items: center;
    position: relative;
    top:20px
}
</style>


