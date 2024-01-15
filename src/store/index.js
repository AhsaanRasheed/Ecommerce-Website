import {createStore} from 'vuex'

const store = createStore({
    state(){
        return {
            products: [{
                id:'1',
                name: 'wireless earbuds',
                price: 1000,
                picture: '/one.webp',
                description: "With the QCY T11 Wireless Earbuds, you can immerse yourselves in excellent sound quality. These earbuds produce crystal clear audio with rich detail and powerful bass thanks to superior sound quality and high-fidelity drivers. Each chord and beat would be brought to life, boosting your entire enjoying pleasure whether you're enjoying music, podcasts, or viewing films.",
                type: 'earbuds',
                brand: 'samsung',
                color:['red', 'blue', 'green']
            },
            {
                id:'2',
                name: 'wireless earbuds',
                price: 2000,
                picture: '/public/two.webp',
                description: "With the QCY T11 Wireless Earbuds, you can immerse yourselves in excellent sound quality. These earbuds produce crystal clear audio with rich detail and powerful bass thanks to superior sound quality and high-fidelity drivers. Each chord and beat would be brought to life, boosting your entire enjoying pleasure whether you're enjoying music, podcasts, or viewing films.",
                type: 'earbuds',
                brand: 'samsung',
                color:['red', 'blue', 'green']
            },
            {
                id:'3',
                name: 'wireless earbuds',
                price: 3000,
                picture: '/public/three.webp',
                description: "With the QCY T11 Wireless Earbuds, you can immerse yourselves in excellent sound quality. These earbuds produce crystal clear audio with rich detail and powerful bass thanks to superior sound quality and high-fidelity drivers. Each chord and beat would be brought to life, boosting your entire enjoying pleasure whether you're enjoying music, podcasts, or viewing films.",
                type: 'earbuds',
                brand: 'samsung',
                color:['red', 'blue', 'green']
            },
            {
                id:'4',
                name: 'wireless earbuds',
                price: 4000,
                picture: '/public/four.webp',
                description: "With the QCY T11 Wireless Earbuds, you can immerse yourselves in excellent sound quality. These earbuds produce crystal clear audio with rich detail and powerful bass thanks to superior sound quality and high-fidelity drivers. Each chord and beat would be brought to life, boosting your entire enjoying pleasure whether you're enjoying music, podcasts, or viewing films.",
                type: 'earbuds',
                brand: 'samsung',
                color:['red', 'blue', 'green']
            },
            {
                id:'5',
                name: 'Samsung Mobiles',
                price: 5000,
                picture: '/public/five.webp',
                description: "With the QCY T11 Samsung Mobiles, you can immerse yourselves in excellent sound quality. These earbuds produce crystal clear audio with rich detail and powerful bass thanks to superior sound quality and high-fidelity drivers. Each chord and beat would be brought to life, boosting your entire enjoying pleasure whether you're enjoying music, podcasts, or viewing films.",
                type: 'mobiles',
                brand: 'lenovo',
                color:['red', 'blue', 'green']
            },
            {
                id:'6',
                name: 'Samsung Mobiles',
                price: 6000,
                picture: '/public/six.webp',
                description: "With the QCY T11 Samsung Mobiles, you can immerse yourselves in excellent sound quality. These earbuds produce crystal clear audio with rich detail and powerful bass thanks to superior sound quality and high-fidelity drivers. Each chord and beat would be brought to life, boosting your entire enjoying pleasure whether you're enjoying music, podcasts, or viewing films.",
                type: 'mobiles',
                brand: 'lenovo',
                color:['red', 'blue', 'green']
            },
            {
                id:'7',
                name: 'Samsung Mobiles',
                price: 4000,
                picture: '/public/seven.webp',
                description: "With the QCY T11 Samsung Mobiles, you can immerse yourselves in excellent sound quality. These earbuds produce crystal clear audio with rich detail and powerful bass thanks to superior sound quality and high-fidelity drivers. Each chord and beat would be brought to life, boosting your entire enjoying pleasure whether you're enjoying music, podcasts, or viewing films.",
                type: 'mobiles',
                brand: 'qmobile',
                color:['red', 'blue', 'green']
            },
            {
                id:'8',
                name: 'Samsung Mobiles',
                price: 4000,
                picture: '/public/eight.webp',
                description: "With the QCY T11 Samsung Mobiles, you can immerse yourselves in excellent sound quality. These earbuds produce crystal clear audio with rich detail and powerful bass thanks to superior sound quality and high-fidelity drivers. Each chord and beat would be brought to life, boosting your entire enjoying pleasure whether you're enjoying music, podcasts, or viewing films.",
                type: 'mobiles',
                brand: 'qmobile',
                color:['red', 'blue', 'green']
            },
        ],

        isloggedIn: false,

        cart: {items: [], total: 0, qty: 0},
        users: [],
        orderHistory: []

        }
    },
    
    mutations: {
        adduser(state, payload){
            const userData = {
                email: payload.email,
                password: payload.password
            }
            state.users.push(userData)
            console.log(state.users)
        },
        verifyUser(state, payload){
            const userData = {
                email: payload.email,
                password: payload.password
            }
            const findUser = state.users.find( (user)=> user.email == userData.email && user.password == userData.password )
            if(findUser){
                state.isloggedIn = true
            }else{
                return;
            }
        },
        addProductToCart(state, {product, color}) {
            const productInCartIndex = state.cart.items.findIndex(
                (ci) => ci.productId === product.id && ci.color === color
                );
                
            console.log(productInCartIndex)
      
            if (productInCartIndex!=-1) {
              state.cart.items[productInCartIndex].qty++;
            //   console.log(state.cart.items[productInCartIndex].qty++)
            } else {
              const newItem = {
                productId: product.id,
                title: product.name,
                image: product.picture,
                price: product.price,
                color: color,
                qty: 1,
              };
              state.cart.items.push(newItem);
            }
            state.cart.qty++;
            state.cart.total += product.price;
          },
          removeProductFromCart(state, prodId) {
            
            const productInCartIndex = state.cart.items.findIndex(
              (cartItem) => cartItem.productId === prodId
            );
            const prodData = state.cart.items[productInCartIndex];
            state.cart.items.splice(productInCartIndex, 1);
            state.cart.qty -= prodData.qty;
            state.cart.total -= prodData.price * prodData.qty;
          },
          userorderHistory(state){
            console.log(state.cart)
              alert(state.orderHistory)
              state.orderHistory.push(state.cart);
              state.cart = {items: [], total: 0, qty: 0}
          }
    },
    getters: {
        getProducts(state){
            return state.products
        },
        getHistory(state){
            return state.orderHistory
        },
        getCart(state){
            return state.cart
        },
    },
    
})

export default store;