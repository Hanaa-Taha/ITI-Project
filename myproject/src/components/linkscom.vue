<template>

<nav class="navbar">
  

<div class="cover">
 
  <div class="nav-item cols-lg-8 cols-12">
 

                  
<ul class="nav nav-tabs" id="myTab" role="tablist">
 <li class="nav-item" role="presentation">

    <button @click="gotohome" class="nav-link " id="LOUIS-tab" data-bs-toggle="tab" data-bs-target="#LOUIS" type="button" role="tab" aria-controls="LOUIS" aria-selected="false">LOUIS VUITTON</button>
  </li>
 
  <li class="nav-item" role="presentation">

    <button class="nav-link " id="NEW-tab" data-bs-toggle="tab" data-bs-target="#NEW" type="button" role="tab" aria-controls="NEW" aria-selected="false">NEW</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="WOMEN-tab" data-bs-toggle="tab" data-bs-target="#WOMEN" type="button" role="tab" aria-controls="WOMEN" aria-selected="false">WOMEN</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="MEN-tab" data-bs-toggle="tab" data-bs-target="#MEN" type="button" role="tab" aria-controls="MEN" aria-selected="false">MEN</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="ART-tab" data-bs-toggle="tab" data-bs-target="#ART" type="button" role="tab" aria-controls="ART" aria-selected="false">ART OF LIVING</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="MAGAZIN-tab" data-bs-toggle="tab" data-bs-target="#MAGAZIN" type="button" role="tab" aria-controls="MAGAZIN" aria-selected="false">MAGAZIN</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
 <div class="tab-pane fade" id="LOUIS" role="tabpanel" aria-labelledby="LOUIS-tab"></div>

  <div class="tab-pane fade " id="NEW" role="tabpanel" aria-labelledby="NEW-tab">  
              <button type="button" class="btn-close" data-bs-dismiss="NEW-tab" aria-label="Close"></button>

  <newpage/></div>
  <div class="tab-pane fade" id="WOMEN" role="tabpanel" aria-labelledby="WOMEN-tab">  <newpage/></div>
  <div class="tab-pane fade" id="MEN" role="tabpanel" aria-labelledby="MEN-tab">  <newpage/></div>
    <div class="tab-pane fade" id="ART" role="tabpanel" aria-labelledby="ART-tab">  <newpage/></div>
  <div class="tab-pane fade" id="MAGAZIN" role="tabpanel" aria-labelledby="MAGAZIN-tab">  <newpage/></div>

</div>
                
   </div>         

      
       <form class="d-flex cols-12  cols-lg-4 ">
        <div class="search d-flex"><fa class="fa" icon='search'/><input type="search" placeholder="Search'Summer Shop'here"></div>  
         </form>
        </div>
     
    </nav>
     
</template>

<script>
import newpage from './newpage.vue'
export default {
  components: { newpage },
  methods: {
    gotohome(){
      const self = this;
      setTimeout(function(){
        self.$router.push('/');
      },500)
    }
  },

}
</script>

<style scoped>
   
   .navbar{
     display: flex;
   }
     .cover{
    display: flex;
    flex-wrap: wrap;
    }
    .search {
       background-color: rgb(245, 241, 241);
       width: 15em;
       height: 2em;
           margin-left: 0.8em;


     
    }
    input{
    border: none;
    outline: none;
     width: 100%;
    background-color: rgb(245, 241, 241);
      font-size: 0.8em;

      

    }

    .fa{
        
        margin-top: 0.5em;
        margin-right: 1em;
        margin-left: 1em;
    }
  
    li{
     font-size: 0.66em;
     
    }
    button{
     color: black;
    }
    #LOUIS-tab{
        font-weight: bolder;
    }
   
</style>