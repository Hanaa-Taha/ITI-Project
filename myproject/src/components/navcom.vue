<template>
<div>
  <div class="cover">
        <div class="col-sm-12 col-lg-9 mt-3">
             <router-link to="/COUNTRY" class="link"><p>Ship to: {{$store.state.xx}}</p></router-link >
            <div><p><fa icon="mobile-alt"/>+1.866.VUITTON </p></div>
            <p>Sustainability</p>
       </div>
       <div class="col-sm-12 col-lg-3  mt-3">
            <fa class="fa" icon="map-marker"/>
            <div><fa  class="fa" icon="heart"/> <sup>{{$store.state.count}}</sup></div>
            <fa  class="fa" icon="user"/>
            <div><fa data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" class="fa" icon="shopping-bag"/><sup>{{$store.state.ulCart.length}}</sup> </div>
        </div>
</div>


<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
<div class="c">
  <div class="offcanvas-header">
    <h6 id="offcanvasRightLabel">YOUR SHOPPING BAG <small>({{$store.state.ulCart.length}})</small></h6>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  
  <div class="offcanvas-body">
  <div>
    <div  v-if="$store.state.ulCart.length==0">
          <p>Your Cart Is Empty</p>
    </div>
    <div  v-if="$store.state.ulCart.length>0">
    <div  class="k d-flax " v-for="prodactInCart in $store.state.ulCart" :key="prodactInCart.name">
  
        
      <img :src="prodactInCart.image1_url" style="width:5em; hight:5em; margin-left:0.5em;" alt="">
      <p>{{prodactInCart.name}}</p>
      <p>{{$store.getters.formater(prodactInCart.price)}}</p>
    
    </div>
    </div>
        <hr/>
  </div>
   <div v-if="$store.state.ulCart.length>0" class="offcanvas-footer ">
   <div class="d-flex y">
      <h3 class="m-3">Total</h3>
      <p>{{$store.getters.formater($store.getters.totalprice)}}</p>  </div>
     <router-link class="link" to="/cart"><button style="margin-left:0.5em;" type="button" class="form-control btn btn-primary mt-4"  data-bs-dismiss="offcanvas" >View my Cart</button></router-link >

     </div>
  </div>
</div>
</div>
  </div>
  
</template>

<script>
export default {
  


}
</script>

<style scoped>
    .cover{
     display:flex;
     justify-content: space-between;
     flex-wrap: wrap;
    }
    .cover p{
      font-size: 80%;
      margin-left:2em;
    }
   .cover div{
     display: flex;
     padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y);
   }
   .fa{
     margin-left:1em ;
     cursor: pointer;
   }
   .link{
     font-weight: bolder;
     color: black;
   }
   .offcanvas-end{
    
      width: 23em;
   }
   .offcanvas-body{
     
      flex-wrap: nowrap;
   }
   .k ,.y{
     display: flex;
     justify-content: space-between;
     justify-items: baseline;
    
     text-align: center;
   }
   .k p{
     margin: 1em; 
   }
   .y{
 align-items: baseline;
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
</style>