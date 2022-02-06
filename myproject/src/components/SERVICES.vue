<template>
   <div>
        <div class="col-12">

            <p>SERVICES</p>
        </div>
        <div id="img" class="cl-12 m-3">
            <div class="d-flex " >
              <img  src="https://www.louisvuitton.com/images/Homepage_Service_Store_Appointment_DI3.jpg?wid=824" alt="">
                <p>Virtual or In-Store Appointments</p>
                <p>Book a personal shopping experience with a Louis Vuitton Client Advisor.</p>
                <p id="link">Book an Appointment</p>
                
            </div>
            <div class="d-flex ">
             <img  src="https://www.louisvuitton.com/images/Homepage_Service_Contact_Us_DI3.jpg?wid=824" alt="">
               <p >Contact Us</p> 
               <p>Louis Vuitton Client Advisors are always here to help.</p>
                <p id="link">Ask Our Advisors</p>
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
        width: 98%;
        height: 98%;
        margin: 1em;
    }
    p{
        text-align: center;
        font-weight: bolder;
        font-size: 2em;
    }
    #link{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: normal;
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
    .d-flex p:nth-child(3){
        font-weight:normal ;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: rgb(94, 92, 92);
    }
    
</style>