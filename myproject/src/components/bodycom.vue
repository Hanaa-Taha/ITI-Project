<template>
    <div>
        <div class="top">
                <div id="contact">
                <p>LOUIS 200</p>
                
                     <button>celebrating louis vuitton's birthday</button>

                
                </div>
                
        </div>
        <div class="mt-5">
        
            <women/>
        </div>
         <div class="mt-5">
        
            <men/>
        </div>
        <div class="mt-5">
        
            <lightup/>
        </div>
        <div  class="row mt-5">
            <HIGHLIGHTS />
        </div>
          <div  class="row mt-5">
            <SERVICES/>
        </div>
        <br><br><br>
       
  
    </div>
</template>

<script>


import COUNTRY from './COUNTRY.vue'
import Footer from './footer.vue'
import HIGHLIGHTS from './HIGHLIGHTS.vue'
import Lightup from './lightup.vue'
import Men from './men.vue'
import Newpage from './newpage.vue'
import SERVICES from './SERVICES.vue'
import women from './women.vue'
import Womenpage from './womenpage.vue'
export default {
  components: { women, Men, Lightup, HIGHLIGHTS, SERVICES, Footer, COUNTRY, Newpage, Womenpage },
  data() {
      return {
                     

      }
  },

}
</script>

<style scoped>
    .top{
    height: 25em;
        background-image: url('https://www.louisvuitton.com/images/Unisex_Louis_200_DI4.jpg');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        
    }
    #contact{
        display: flex;
        flex-direction: column;
        padding: 13%;
        padding-top:33% ;
    }
    p{
        font-size: 2em;
        color: white;
        font-weight:bolder ;
    
    }
    button{
        width: 20em;
        background-color:white ;
        border: none;
        height: 3em;
        text-transform: uppercase;
        font-size:0.7em;

    }
    button:hover{
        opacity: 0.6;
    }
   
</style>