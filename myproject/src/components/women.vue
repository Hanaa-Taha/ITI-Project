<template>
<div>
    <div class="top container ">
        <div id="contact">
            <div class="row  col-8">
             <p>WOMEN’S FALL-WINTER 2021 COLLECTION</p>

            </div>
            <div class="d-flex">
              <router-link class="link" to="/menpage"><button>shop now</button>  </router-link>
            <button>discover the campaing</button>
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
        background-image: url('https://hauteliving.com/wp-content/uploads/2020/07/2-21-1366x729.jpg');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-top: 5em;
        
    }
    #contact{
        margin:5em;
        padding-left: 0.1em;
        padding-top:8em ;
    }
   
    p{
        font-size: 2em;
        color: rgb(88, 83, 83);
        font-weight:bolder ;
    
    }
    button{
        width: 20em;
        height: 3em;
        margin-left:1em ;
        text-transform: uppercase;
        font-size:0.7em;
         color: rgb(88, 83, 83);

    }
     button:nth-child(1){
        background-color:white ;
                border: none;

     }
    button:nth-child(2){
            background:none ;
            border:1px solid white;

    }
     button:nth-child(1):hover{
        opacity: 0.5;
    }
     button:nth-child(2):hover{
         box-shadow: 2px 2px 2px white inset,-2px -2px 2px white inset;
    }

</style>

