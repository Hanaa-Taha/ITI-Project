<template>
<router-link class="link" to="/">
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
    
      
    <div class="row mt-5 col-12">
      
      <bodycom/>
    </div>
        
   
</div>
   <div  class="row col-12">
            <Footer/>
        </div>        
</div>
</router-link >
</template>

<script>
import alert from '../components/alert.vue'
import Navcom from '../components/navcom.vue'
import linkscom from '../components/linkscom.vue'
import Bodycom from '../components/bodycom.vue'
import Checkout from './checkout.vue'
import Footer from '../components/footer.vue'



export default {
  components: { alert, Navcom ,linkscom, Bodycom, Checkout, Footer,},

}
</script>

<style scoped>
 .link{
   color: black;
   text-decoration: none;
 }
 
</style>
