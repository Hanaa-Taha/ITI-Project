<template>
<div>
<div>
 <div class="row col-12">
      
      <alert/>
    </div>
    
    <hr>
      <div class="row col-12">
      
      <navcom/>
    </div>
    <hr>
      <div class="row col-12">
      
      <linkscom/>
    </div>
<div class="container">
   
    <div  id="div" class="row col-12">
        <div id="bigimg">
               <img :src="change=='true'?$store.state.ul[0].image1_url:src" alt="">

        </div>
        <div id="img" class="d-flex">
                <div >
                 <img @click="src=$store.state.ul[0].image1_url,change='false'" :src="$store.state.ul[0].image1_url" alt="">
               
                </div>
                <div  >
                   <img  @click="src=$store.state.ul[0].image2_url,change='false'" :src="$store.state.ul[0].image2_url" alt="">
            
                </div>
                <div >
               <img @click="src=$store.state.ul[0].image3_url,change='false'" :src="$store.state.ul[0].image3_url" alt="">                
                </div>

        </div>
    
    </div>
    <div  class="row col-11 ">
    <div>
      <p>{{$store.state.ul[0].product_id}}</p>
    <h6>{{$store.state.ul[0].name}}</h6>
    </div>
    <div class="heart " @click="$store.commit('hearticon')">
      <p :class="$store.state.isv=='true'?'block':'hide'">&#9825;</p>
      <p :class="$store.state.isv=='false'?'block':'hide'">&#9829;</p>

    </div>
    
    </div>
    
 <div class="row col-12">
 
  
      <h3>{{$store.state.ul[0].price}}</h3>
    </div>
   <div class="row col-12">
 
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="$store.commit('addmycart')">place in cart</button>
    </div>
    <div class="row col-12">
 
      <p>{{$store.state.ul[0].text}}</p>
    </div>
     <div class="row col-12">
        <ul>Detailed Features
        <li v-for="feature in $store.state.ul[0].features" :key="feature.name">{{feature.name}}</li>
        </ul>
    </div>
       
</div>

<!-- Modal -->
<div  class="modal fade " id="staticBackdrop"  data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div  class="modal-dialog modal-lg"   v-if="$store.state.incart=='false'" >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">ADDED TO CART</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$store.state.countInCart=0,$store.state.incart='false'"></button>
      </div>
      <div class="modal-body d-flex">
          <div>
          <img :src="$store.state.ul[0].image1_url" style="width:7em; hight:7em; " alt="">
          </div>
          <div>
            <h6 >{{$store.state.ul[0].name}}</h6>
            <p>{{$store.state.ul[0].product_id}}</p>
            <p>{{$store.getters.formater($store.state.ul[0].price)}}</p>

          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="$store.state.countInCart=0,$store.state.incart='false'">Continue Shopping</button>
        <router-link class="link" to="/cart"><button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="$store.state.countInCart=0,$store.state.incart='false'">View my Cart</button></router-link >
      </div>
    </div>
  </div>
  <div  class="modal-dialog modal-lg"   v-if="$store.state.incart=='true'" >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">ADDED TO CART</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$store.state.countInCart=0,$store.state.incart='false'"></button>
      </div>
      <div class="modal-body d-flex">
          <p>This product is out of stock</p>
       </div>
 </div>
  </div>
</div>
 <div class="row mt-5 col-12">
    <Footer/>
    
    </div>
</div>
</div>
 
  
</template>

<script>
import Alert from '../components/alert.vue'
import Footer from '../components/footer.vue'
import Linkscom from '../components/linkscom.vue'
import navcom from '../components/navcom.vue'
import Checkout from './checkout.vue'
export default {
  components: { navcom, Linkscom, Alert, Footer, Checkout },
  data() {
    return {
      src:'',
      change:'true',
      x:'true'
    }
  },
  methods: {
    border(e){
     console.log(e.target.classNam)
     e.target.style.border= '2px solid black';
     x='false'
    },
  },
  computed:{
   
  }
   

}
</script>

<style scoped>
   
  .heart{
      font-size: 3em;
  }
 .hide{
    display: none;
 }
 .block{
  display: block;

 }
 .row {
    display: flex;
    flex-wrap: nowrap;
 }
 .heart:hover{
  cursor: pointer;
 }
 li{
   margin-left: 2em;
  
 }
 button{
   margin: 2em;
   margin-left: 0em;
  background-color: rgb(24, 11, 11);
  color: aliceblue;
  border: 1px solid rgb(24, 11, 11);
  box-shadow: 2px 2px 2px black;

 }
 button:hover{
   background-color: rgb(245, 244, 244);
  color: black;
    border: 1px solid rgb(245, 244, 244);
      box-shadow: -2px -2px 2px rgb(219, 217, 217);



 }
 p,li{
   font-family:'Times New Roman', Times, serif;
   margin-top: 1em;
 }
  #img div img{
      width: 99%;
      height: 99%;
      padding: 10%;
      cursor: pointer;
  }
  
  #img div{
      background-color:  whitesmoke;
      width: 9em;
      height: 9em;
      margin: 1em;
  } #img div:nth-child(1){
    margin-left: 17%;
  }
    #img div:hover{
          border: 2px solid black;

    }
  #div{
    display:flex ;
    flex-direction: column;
  }
  #bigimg img{
      width: 35%;
      height: 10%;
      margin-left:30% ;
        padding: 0.5em;

  }
  #bigimg {
    background-color: whitesmoke;
    margin-top: 2em;
  }
  .border{
    border: 1px solid black;
  }
  .none{
    border: none;
  }
</style>