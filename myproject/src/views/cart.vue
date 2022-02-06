<template>
        <div>
        <hr>
            <div class="row col-12 mt-3 " >
                <navcom/>
            </div> 
            <hr>
              <div class="row col-12">
                <Linkscom />
            </div>
            <div class="container">
               <div class="row col-12">
                <router-link class="link" to="/checkout"><button v-if="$store.state.ulCart.length>0"  class="btn form-control" type="button" >Proceed to checkout</button></router-link>
                <router-link class="link" to="/"><a href="" class="text-center">Continue Shopping</a></router-link>
                <br><br><br><br>
                <h3>MY SHOPPING CART <small>({{$store.state.ulCart.length}})</small></h3>
                <br><br>
                 </div>
                <div class="mt-5" v-for="cartElment in $store.state.ulCart" :key="cartElment">
                <div class="card">
                  <div class="card-header">
                  <div class="d-flex">
                  
                    <img :src="cartElment.image1_url" style="width:5em; hight:3em; margin:1em;" alt="">
                    <div class="m-4">
                        <h6>{{cartElment.product_id}}</h6>
                        <h6>{{cartElment.name}}</h6>
                    </div>
                    </div>
                  </div>
                    <div class="card-body d-flex ">
                    <div class="color d-flex">
                    <p>Color:</p>
                     <p>{{cartElment.option1}}</p>
                    </div>
                    <div>
                        <p>{{$store.getters.formater(cartElment.price)}}</p>
                    </div>
                    </div>
                    <div class="card-footer text-muted d-flex text-center">
                        
                         <p data-bs-toggle="offcanvas" :data-bs-target="'#'+cartElment.product_id" :aria-controls="cartElment.product_id" ><fa icon="eye"/>VIEW DETAILS</p>
                        <p data-bs-toggle="modal" :data-bs-target="'#'+cartElment.product_id+'n'"><fa icon="times-circle"/>REMOVE </p>
                        
                                             
                    </div>
                    </div>
                    <div class="offcanvas offcanvas-end" tabindex="-1" :id="cartElment.product_id" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">VIEW DETAILS</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <div class="k">
                            <img :src="cartElment.image1_url" style="width:5em; hight:3em; margin:0.05em;" alt="">
                            
                            <h6>{{cartElment.name}}</h6>
                            <p>{{$store.getters.formater(cartElment.price)}}</p>

                            </div>

  </div>
  <div class="offcanvas-footer">
        <router-link class="link" to="/prodact"><button style="margin-left:4em" class=" btn btn-primary" data-bs-dismiss="offcanvas"  @click="$store.commit('gotocart',cartElment)" >View Prodact Page</button></router-link>
  </div>
</div>
<div>
<!-- Modal -->
<div class="modal fade" :id="cartElment.product_id+'n'" tabindex="-1" :aria-labelledby="cartElment.product_id+'h'" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" :id="cartElment.product_id+'h'">REMOVE THIS PRODUCT</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
            <p>Do you wish to remove this product from your shopping bag?</p>
            <br>
             <div class="k">
              <img :src="cartElment.image1_url" style="width:5em; hight:3em; margin:1em;" alt="">
                           
                            <h6>{{cartElment.name}}</h6>
                            <p>{{$store.getters.formater(cartElment.price)}}</p>

                            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cencel</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="$store.commit('removeelment',cartElment)">Remove</button>
      </div>
    </div>
  </div>
</div>
</div>
                    </div>
           <br><br><br>
</div>
        </div>
</template>

<script>
import Linkscom from '../components/linkscom.vue'
import navcom from '../components/navcom.vue'
export default {
  components: { navcom, Linkscom },
  


}
</script>

<style scoped>
.card-footer{
    column-count:1;
    background-color: white;
    column-rule: solid;


} .card-footer p{
    margin: auto;
    cursor: pointer;
}.card-body{
    flex-direction: column;
    
}
.color{
    justify-content: space-between;
}.card-header{
    background-color: white;
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
 a{
   text-align: center;
 }
  .k {
     display: flex;
     justify-content: space-between;
     justify-items: baseline;
   
     text-align: center;
   }
   .offcanvas-end{
     width: 20em;
   }
</style>