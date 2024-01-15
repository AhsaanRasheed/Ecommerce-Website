<template>

  <div class="categories">
    <div v-for="category in categories" style="padding: 30px 30px 30px; display: flex; justify-content: center; align-items: center; flex-direction: column;">
      <img :src= "category.link"
      style="height: 45px;
        padding-bottom: 10px;">
      <!-- <RouterLink :to="`/products/${category.type}`">
      </RouterLink> -->
      <h3>
        {{category.name}}
      </h3>
    </div>
  </div>

  <div>
      <img src='../assets/categories/slideImage.jpg'
      style="
      height: 60%px;
      width: 100%;
      ">
  </div>

  <div class="products">
    <h2 style="font-weight: bold;">Our  Products</h2>
    <div style="display: flex; justify-content: flex-end;">

      <div class="dropdown">
        <button class="dropbtn">Filter</button>
        <div class="dropdown-content">
          <a @click="selectBrand('samsung')">Samsung</a>
          <a @click="selectBrand('lenovo')">Lenovo</a>
          <a @click="selectBrand('qmobile')">Q-Mobile</a>
          
        </div>
      </div>
      
      <div class="dropdown">
        <button class="dropbtn">Sort By</button>
        <div class="dropdown-content">
          <a @click="sortBy('asc')">High To Low</a>
          <a @click="sortBy('dsc')">Low To High</a>        
        </div>
      </div>
    </div>  

      <div style="display: flex; padding-top: 10px;">

        <div class="productCategory">
          <div v-for="category in categories" style="padding: 20px 10px ; flex-direction: column;">
          <!-- <RouterLink :to="`/products/${category.type}`"> -->
            <div @click="selectCategory(category.type)" class="textDecoration">
              <h3 style="color: #48AFFF; width:100%">
                {{category.name}}
              </h3>
            </div>
          <!-- </RouterLink> -->
        </div>
      </div>
 
      <div class="productShowcase">
        <div v-for="products in showproducts" class="product">
          <RouterLink :to="`/productdetail/${products.id}`">
            <img :src= products.picture style="height: 200px; width: 200px; border-radius: 20px;">
          </RouterLink>
          <h3>{{products.name}}</h3>
          <h4>Rs. {{ products.price}}</h4>
        </div>
      </div>

    </div>
    
  </div>
</template>


<script>

import mobile from '../assets/categories/mobiles.jpeg'
import earbuds from '../assets/categories/earbuds.jpeg'
import laptops from '../assets/categories/laptops.jpeg'
import tablets from '../assets/categories/tablets.jpeg'
import { RouterLink} from 'vue-router'

export default{
  data(){
    return {
      categories: [
      {
        name: 'All Products',
        link: null,
        type: 'all'
      },
      {
        name: 'Mobiles',
        link: mobile,
        type: 'mobiles'
      },
      {
        name: 'Wireless EarBuds',
        link: earbuds,
        type: 'earbuds'
      },
      {
        name: 'Laptops',
        link: laptops,
        type: 'earbuds'
      },
      {
        name: 'Tablets',
        link: tablets,
        type: 'earbuds'
      },
    ],
     store: this.$store.state.products
    }
  },
  methods:{
    selectCategory(category){
      if(category == 'all'){
        this.store = this.$store.state.products
      }else{
        this.store = this.$store.state.products.filter(product=> product.type=== category) 
      }
    },
    selectBrand(brand){
      if(brand == 'lenovo'){
        this.store = this.$store.state.products.filter(product=> product.brand === brand)
      }
      if(brand == 'samsung'){
        this.store = this.$store.state.products.filter(product=> product.brand=== brand) 
      }
      if(brand == 'qmobile'){
        this.store = this.$store.state.products.filter(product=> product.brand=== brand) 
      }
    },
    sortBy(type){
      this.store.sort((a,b)=>{
        const sortOrder = type == 'asc' ? -1 : 1;
        return sortOrder * (a.price - b.price)
      })
      return this.store
    }  
  },
  computed: {
    showproducts(){
      return this.store
    }
  }
  
  


}
</script>

<style scoped>
.categories{
  display: flex;
  justify-content: center;
  background-color: #F1F3F6;
  height: 100px;
  
}
.products{
  background-color: #F1F3F6;
  height: 50%; 
  /* width: 100%; */
  padding: 10px 30px 20px 30px;
  
  /* justify-content: center; */
  
}

.productShowcase{
  width: 80%;
  height: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;  
  
}
.product:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.product{
  padding: 30px 20px;
  background-color: #48AFFF;
  margin: 10px;
  border-radius: 15px;
  box-shadow: 0 10px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.productCategory{
  width: 20%;
  height: 400px;
  background-color:#48AFFF;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* justify-content: center; */
  margin-top: 20px;
  /* margin: auto; */
  padding-top: 35px;
  

}
a{
  text-decoration: none;
}

.textDecoration{
  background-color: azure;
  width: 70%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 5px;
  /* position: relative; */
}

.dropbtn {
  background-color: #48AFFF;
  color: white;
  padding: 16px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
}

.dropdown {
  position: relative;
  display: flex;
  justify-content: end;
  margin-right: 20px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>