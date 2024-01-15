<template>
    <section>
      <h2>Total Amount: {{ cartTotal.total }}</h2>
      <ul>
        <cart-item
          v-for="item in cartTotal.items"
          :key="item.productId"
          :prod-id="item.productId"
          :title="item.title"
          :image="item.image"
          :price="item.price"
          :color = 'item.color'
          :qty="item.qty"
        ></cart-item>
      </ul>
      <div style=
      "display: flex;
      justify-content: center;
      
      ">
      
      </div>
    </section>
  </template>
  
  <script>
  import CartItem from '../components/cartitem.vue';
  import { RouterLink} from 'vue-router'
  export default {
    inject: ['cart'],
    components: {
      CartItem,
    },
    computed: {
      cartTotal() {
        return this.$store.getters.getHistory;
      },
      productInCart() {
        return this.$store.getters.getProducts;
      },
      
    }
  };
  </script>
  
  <style scoped>
  section {
    margin: 2rem auto;
    max-width: 40rem;
  }
  
  h2 {
    color: #292929;
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 1rem;
  }
  
  h3 {
   text-align: center;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
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
  .button1:hover,
    button:active {
      background-color: #0484e6;
      border-color: #48AFFF;
    }
  </style>