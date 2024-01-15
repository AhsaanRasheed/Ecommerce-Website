import {createStore} from 'vuex'
import Moveable from "moveable";

const store = createStore({
    state(){
        return {
            products: [{
                id:'1',
                name: 'wireless earbuds',
                price: '1000',
                picture: '/public/eight.webp'
            },
        ],
            getText:'',
            getsize: 0,
            getwidth: 0,
            getheight: 0,
            getcolor: "black",
            getbackground:"white",
            activeMovable: null,
            objectsId: 0,
            objectProperties:[],
            selectedElement: null,
            currentState: null,
        }
    },
    
    mutations: {
        getTextProperties(state, id){
            var element = document.querySelector(`[data-croffle-ref="targetRef${id}"]`);
            var styles = window.getComputedStyle(element);
            state.getText = element.innerHTML 
            state.getsize = styles.getPropertyValue("font-size");
            state.getwidth = styles.getPropertyValue('width')
            state.getheight = styles.getPropertyValue('height')
            state.getcolor = styles.getPropertyValue("color")
            state.getbackground = styles.getPropertyValue("background-color")
          },
    },
    getters: {
        getfontSize(state){
            return state.getsize
        },
        
    },
    
})

export default store;