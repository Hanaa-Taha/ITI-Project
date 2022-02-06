<template>
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
    <hr>
    <div  class="container">
 
        <div class="n col-lg-12 ">
            <prodactnew class="prodact" v-for="womenprodact in $store.state.womenprodacts" :key="womenprodact.position" :womenprodact="womenprodact" />
        </div>
        
      </div>
      <div class="col-12">
        <Footer/>
        
        </div>  
    </div>
</template>

<script>
import Alert from '../components/alert.vue'
import Footer from '../components/footer.vue'
import Linkscom from '../components/linkscom.vue'
import Navcom from '../components/navcom.vue'
import prodactnew from '../components/prodactnew.vue'
export default {
  components: { prodactnew, Linkscom, Navcom, Alert, Footer },

}
</script>

<style>
.n{
   column-count:3 ;
   

 }
 .prodact{
   margin: 5px;
   
 }

    @media all and (orientation:portrait){
            .n {
                 column-count:1 ;

            }
        }
 @media all and (max-width: 1300px){
            .n {
                 column-count:2 ;

            }
        }

</style>