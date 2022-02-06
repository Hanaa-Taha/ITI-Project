<template>
<div>

     <div class="card m-1 " style="width: 22rem;margin: 0.2rem;" >
                    <div>
                    <img class="card-img-top" :src="img1" :title="name">
                    <div class="card-body  align-items-baseline">
                        
                            <h3> {{name}}</h3>
                           
                        
                    </div>
                <div class="card-footer  align-items-baseline" >
                    <p><span>price : </span> {{price}}</p>
                </div>
                 </div>
                  </div>
</div>
  
</template>

<script>
export default {
    props:["name","img1","price"],

    data() {
        return {
        }
    },
}
</script>

<style>

</style>