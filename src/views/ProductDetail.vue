<template>
  <div class="root">

    <div class="productPicture">
      <div class="card">
          <img :src="showProductDetail.picture" style="width:100%; height: 100;">
      </div>
      <div>
          <button class="button1" @click="addtoCart"> Add To Cart </button>
      </div>
    </div>
    
    <div class="productData">
      <h2>
        {{showProductDetail.name}}
      </h2>
      <h2>

        Rs. {{showProductDetail.price}}
      </h2>
      <h2>Colors: </h2>
      <div style="display: flex; justify-content: center;">
        <div v-for="colors in showProductDetail.color" >
          <div @click="selectColor(colors)" class="variation" :style="{backgroundColor: colors}"></div>
        </div>
      </div>
      
      <h2>Description: </h2>
      <p>
        {{showProductDetail.description}}
      </p>
    </div>

  </div>
</template>

<script>
  export default{
    data(){
      return{
        product: null,
        color: null
      }
    },
    computed:{
      showProductDetail(){
        this.product = this.$store.state.products.find(product=> product.id=== this.$route.params.id) 
        return this.product
      },
    },
    methods:{
      selectColor(selectedColor){
        this.color = selectedColor
      },
      addtoCart(){
        if(this.color== null)
        {
          alert("Please Select Color")
        }
        else{
          this.$store.commit('addProductToCart', {
            product: this.product,
            color: this.color
          })
          // console.log(this.$store.state.cart.items)
        }
      }
    }  
}
</script>

<style scoped>
.root{
  background-color: rgb(241,243,246);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 70px 90px 70px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

h2{
  padding: 20px;
}
p{
  padding: 0px 0px 0px 20px;
}
.button1{
  padding: 13px 32px ;
  font-size: 16px;
  margin: 10px 2px;
  background-color:#48AFFF;
  color: whitesmoke;
  border-radius: 7px;
  border: none;
  transition: 0.3s;
}
.button1:hover {
  box-shadow: 0 8px 16px 0 rgba(162, 157, 157, 0.2);
}

.productPicture{
  padding: 50px 50px 50px 50px;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center ;
}

.variation{
  /* display: flex; */
  /* justify-content: space-between; */
  width: 20px;
  height: 20px;
  margin:10px;
  padding: 10px;
  border-radius: 20px;
  
}
.variation:hover {
  box-shadow: 10px 18px 26px 0 rgba(162, 157, 157, 0.2);
}


</style>