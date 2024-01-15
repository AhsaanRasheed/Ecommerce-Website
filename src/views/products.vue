
<template>
  <div class="products">
    <div v-for="product in showProducts" class="productShowcase">
      <RouterLink :to="`/productdetail/${product.id}`">
        <img :src= product.picture style="height: 200px; width: 200px; border-radius: 20px;">
      </RouterLink>
      <h3>{{product.name}}</h3>
      <h4>{{ product.price}}</h4>
      
    </div>
  </div>
</template>

<script>
import { RouterLink} from 'vue-router'

export default{
  
  computed:{
    showProducts(){
      return this.$store.state.products.filter(product=> product.type=== this.$route.params.type)
    }
  }
}

</script>


<style scoped>
.products{
  display: flex;
  flex-wrap: wrap;
  padding: 50px 100px 0px 100px;
  justify-content: center;
}

.productShowcase{
  padding: 30px 20px 20px;
  background-color:#48AFFF;
  margin: 10px;
  border-radius: 15px;
  box-shadow: 0 10px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.productShowcase:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.variation{
  width: 20px;
  height: 20px;
}

</style>