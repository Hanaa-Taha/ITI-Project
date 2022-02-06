<template class="bg-secondary" >
<div >

           

    <div class="container  bg-light">
    <h2 style="padding-top:1em ;padding-bottom:1em ">louis vuitton</h2>

         <h3>CHOOSE YOUR COUNTRY/REGION</h3>
            <hr>
        <div>
            <div>
                <div v-for="country in countrys" :key="country.id"  >
                <div >
                        <div class="d-flex" data-bs-toggle="collapse" :data-bs-target="'#'+country.continent" aria-expanded="false" :aria-controls="country.continent" >
                             <p>{{country.continent}}</p>
                             <fa :id="country.id" :icon="fa1"/>
                        </div>
                        
                        <div class="collapse" :id="country.continent">
                            <ul>
                             <router-link class="link" to="/"><li v-for="COUNTRYNAME in country.COUNTRY" :id="COUNTRYNAME.name" :key="COUNTRYNAME.name" @click="$store.commit('adds',COUNTRYNAME.name)"> <fa class="fa" icon="shopping-bag"/>{{COUNTRYNAME.name}}</li></router-link >
                            </ul>
                        </div>
                </div>
                </div>

            </div>
        </div>
    
    </div>
  </div>
</template>

<script>

import countrys from '../assets/country'
export default {
    data(){
        return {
            countrys:countrys,
            COUNTRYNAMEs:countrys[1].COUNTRY,
             fa2:'minus',
            fa1:'plus',
            
        }
    
},methods: {
 
},
  
           
        

}
</script>

<style scoped>
    .d-flex{

        display:flex;
        justify-content: space-between;
    }
      .d-flex:hover{
          cursor: pointer;
      }
      li{
            list-style: none;
      }
       .link{
   color: black;
   text-decoration: none;
 }.fa{
     margin-right:0.6em ;
     
 }
</style>