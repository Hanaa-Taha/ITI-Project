<template>
    <div class="cover " >
   
       

     <router-link class="link" to="/prodact" >

            <div class="src"  @click="$store.commit('push3',womenprodact)" > 


<div :id="womenprodact.position" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="womenprodact.image1_url" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img :src="womenprodact.image2_url" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img :src="womenprodact.image3_url" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button"  :data-bs-target="'#'+womenprodact.position" data-bs-slide="prev">
    
  </button>
  <button class="carousel-control-next" type="button" style="color:black;"  :data-bs-target="'#'+womenprodact.position" data-bs-slide="next">
    
  </button>
</div>
        

        </div>
                </router-link>

        <router-link class="link" to="/prodact" >
            <div class="src"  @click="$store.commit('push3',womenprodact)" > 

        <div class="mb-5">
            <h3>{{womenprodact.name}}</h3>
            <p>{{$store.getters.formater(womenprodact.price)}}</p>
        </div>
        </div>
        </router-link>

    </div>
</template>

<script>
export default {
    props:['womenprodact'],
    data() {
        
                 //<p @click="$store.commit('adds',COUNTRYNAME.name)"> &#60;</p>

    },
    methods: {
        addc(e){
            //console.log(e.target.src)
        }
    },
  


}
</script>

<style scoped>
    
  
    h3{
        height: 3em;
        width: 12em;
        font-size: 1em;
    }
   
     .cover:hover{
   cursor: pointer;
   transform: scale(1.03);
   transition: all 0.5s;
 }
 .link{
   color: black;
   text-decoration: none;
 }
</style>