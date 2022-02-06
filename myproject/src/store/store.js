import { createStore } from "vuex";
import womenprodact from '@/assets/json/men_prodact.json'

export default createStore({
  state: {
    xx:' United States',
    womenprodacts:womenprodact,
    one:'block',
    two:'hide',
    three:'hide',
    prodactprice:0,
    ul:[],
    isv:'true',
    count:0,
    countInCart:0,
    ulCart:[],
    incart:'false'

  },
  mutations: {

    adds(state,event){
      console.log(event)
      state.xx=event
      console.log(state.xx)
  
  },increse(state,e){
      console.log(e)
    if(state.one=='block'){
      state.two='block'
      state.one='hide'

    }else if(state.two=='block'){
      state.three='block'
      state.two='hide'


    }else{
      state.three='hide'
      state.one='block'


    }
  },decrese(state,e){
    console.log(e.$refs)

    if(state.one=='block'){
      state.three='block'
      state.one='hide'

    }else if(state.two=='block'){
      state.one='block'
      state.two='hide'


    }else{
      state.three='hide'
      state.two='block'


    }
  },push3(state,womenprodact){
      //state.ul.splice(0,26)
      
      state.ul.pop()
      console.log(womenprodact.price)
      //console.log(state.prodactprice)
      state.ul.push(womenprodact)
      console.log(state.ul)
      state.isv='true'

  },hearticon(state){
    if(state.isv=='false'){
      state.isv='true'
      state.count--
    }else{
      state.isv='false'
      state.count++

    }
    
    console.log(state.isv)
  },addmycart(state){
      state.ulCart.push(state.ul[0])
      console.log(state.ulCart)
      console.log(state.ulCart[0].name)
      
      for (let i = 0; i < state.ulCart.length; i++) {
        if(state.ulCart[i]==state.ul[0]){
          state.countInCart++
            console.log(state.countInCart)
         
        }else{
        }
      }if(state.countInCart==2){
        state.incart='true'
        state.ulCart.pop()
      }
    
},removeelment(state,prodact){
  for (let i = 0; i < state.ulCart.length; i++) {
    if(prodact == state.ulCart[i]){
        var index = i
        break
    }
    
  }
     
       state.ulCart.splice(index,1 )
        
      
} , gotocart(state,prodact){
      state.ul.pop()
      state.ul.push(prodact)

},removeall(state){
    for (let i = 0; i < state.ulCart.length; i++) {
      state.ulCart.splice(i,1 );
      
    }
}
    
  },
  getters:{
    totalprice(state){
      var total =0;
      for (let i = 0; i < state.ulCart.length; i++) {
       total+=state.ulCart[i].price;
        
      }
      return total
    },formater:()=>(value)=>{
      let formater = Intl.NumberFormat("en-US",{
          style:'currency',
          currency : "USD",
          minimumFractionDigits:0
      });
      return formater.format(value);
  },
  },
  actions: {
    push3({commit}){
      commit('push3')

    }
  }, 
  modules: {},
});


