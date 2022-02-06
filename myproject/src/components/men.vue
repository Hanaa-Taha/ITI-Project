<template>
<div>
    <div class="top container ">
        <div id="contact">
            <div class="row  col-8">
             <p>MEN’S FALL-WINTER 2021 COLLECTION</p>

            </div>
            <div class="d-flex">
           <router-link class="link" to="/menpage"><button>shop the COLLECTION</button></router-link>

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
      .top{
        height: 25em;
        background-image: url('https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--1699_LVNow_Men_SS20_Precollection_Campaign_2_DI2.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        margin-top: 5em;
        
    }
    #contact{
       padding-left: 0.1em;
        padding-top:8em ;
    }
   
    p{
        font-size: 2em;
        color: white;
        font-weight:bolder ;
    
    }
    button{
        width: 20em;
        height: 3em;
        margin-left:1em ;
        text-transform: uppercase;
        font-size:0.7em;
         background-color:white ;
                border: none;
         

    }
    
     button:hover{
        opacity: 0.5;
    }
   

</style>

