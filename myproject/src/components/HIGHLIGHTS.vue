<template>
   <div>
        <div class="col-12">

            <p>HIGHLIGHTS</p>
        </div>
        <div id="img" class="cl-12 m-3">
            <div class="d-flex" >
              <img  src="https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--LV_Exceptional_Pieces_Women_MM_DII.jpg?wid=1240" alt="">
                <p id="link">The Luxury Edit</p>
            </div>
            <div class="d-flex">
             <img  src="https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--LV_Exceptional_Pieces_MM_DII.jpg?wid=1240" alt="">
               <p id="link">Exceptional Pieces for Him</p> 
            </div>

    
        </div>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #img{
        display: flex;
        justify-content: center;
        

    }
    img{
        width: 90%;
        height: 90%;
        margin: 1em;
    }
    p{
        text-align: center;
        font-weight: bolder;
        font-size: 2em;
    }
    #link:hover{
        cursor: pointer;
        text-decoration: underline;
    }
    .d-flex{
        flex-direction: column;
    }
    .d-flex p{
      font-size: 1em;
        text-align: left;
        margin-left: 1.3em;
    }
</style>