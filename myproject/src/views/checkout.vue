<template>
<div>
        <div class="d-flex text-center mb-5">
            <h3 style="width:45%;border:2px solid;">LOUIS VUITTON</h3>
            <h3 style="width:30% ;border:2px solid;" data-bs-toggle="modal" data-bs-target="#Secure"> <fa  icon="lock" /> Secure Payment</h3>
            <h3 style="width:25% ;border:2px solid;" ><fa icon="mobile-alt"/>Call US</h3>
        </div>
  <router-link class="link" to="/cart">
  <div class="left">
 <fa icon="arrow-left"/>
  </div></router-link>

<!-- Modal -->
<div class="modal fade" id="Secure" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">PAYMENT</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
            <p>Payments are accepted via credit card, debit card, PayPal or Apple Pay with a valid United States billing and shipping address. Accepted credit cards are Visa, American Express, Mastercard, and Discover.

When placing an order, your billing address must correspond to the address of your credit card, or we will not be able to process your order.

All transactions are secured. The Louis Vuitton website is provided with an SSL encryption system to protect personal and payment data.</p>
      </div>
    </div>
  </div>
</div> 
<div  class="container">
        <div>
                <div class="d-flex">
                <h3 ><p v-if="iscomplet=='true'" class="scucces" ><fa icon="check"/></p ><p v-if="iscomplet=='false'">1</p></h3> <h3>IDENTIFICATION</h3> <a v-if="iscomplet=='true'" @click="iscomplet='false',showcencel='true'" href="#" style="margin-left:20%;" >Modify</a>
                
                </div>
               <hr>
               <div class="step1" style="margin:4em ;border:2px solid; color:grean" v-if="iscomplet=='true'">
                    <p >Your email is</p>
                    <h6>{{youremail}}</h6>
               </div>
               <div style="margin:3em" v-if="iscomplet=='false'">
               <p>In order to better assist you, please enter your email address</p>
               <br>
               <form >
                
               <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input type="email" v-model="state.email" class="form-control" id="email" placeholder="name@example.com">
                         <span v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>

                </div>
                 </form>  
                 <br><br>
               <div class="form-check">
  <input class="form-check-input"   type="checkbox" value="s" id="flexCheckDefault"  >
  <label class="form-check-label" for="flexCheckDefault">
   Uncheck the box if you prefer to not receive Louis Vuitton emails. By subscribing you agree to our <a href="" data-bs-toggle="modal" data-bs-target="#PRIVACY">Privacy Policy</a> 
  </label>
   

</div>
                
                <br><br>
                <div class="d-grid gap-2">
                          <button class="btn btn-primary"  type="button"  @click="login">login</button>
                </div>
                  <div class="d-grid gap-2">
                          <button class="btn btn-primary"  type="button" v-if="showcencel=='true'"  @click="iscomplet='true'">Cencel</button>
                </div>
               
        </div>
        </div>
        <!-- Modal -->
<div class="modal fade" id="PRIVACY" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">PRIVACY POLICY</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
            <h6>PRIVACY POLICY This policy describes how we treat customer information.</h6><br><br><br>
            <p>Effective Date: May 20, 2013. Last Updated: December 13, 2019.This Privacy Policy ("Policy") describes how Louis Vuitton North America, Inc. treats personal information we collect on our websites, mobile applications, stores, and other locations where the Policy is located or referenced (the “Platform”). </p>
      </div>
    </div>
  </div>
</div> 


            <div>
               <div class="d-flex">
                <h3><p v-if="iscomplet2=='true'" class="scucces" ><fa icon="check"/></p ><p v-if="iscomplet2=='false'">2</p></h3> <h3>DELIVERY OPTIONS</h3> 
                
                </div>
               <hr>
                 <div style="margin:3em " v-if="iscomplet=='true'&&iscomplet2=='false'">
                <div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" data-bs-toggle="offcanvas" data-bs-target="#DELIVERY" aria-controls="DELIVERY">
                         <label class="form-check-label" for="flexRadioDefault1">
                                <h6>Standard  Complimentary</h6>
                                <p>2-5 Business days</p>
                          </label>
                        </div>
                </div>
                  <div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" data-bs-toggle="offcanvas" data-bs-target="#DELIVERY" aria-controls="DELIVERY">
                         <label class="form-check-label" for="flexRadioDefault1">
                                <h6>Express  Complimentary</h6>
                                <p>1-4 Business days</p>
                          </label>
                        </div>
                </div>
                  <div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" data-bs-toggle="offcanvas" data-bs-target="#DELIVERY" aria-controls="DELIVERY">
                         <label class="form-check-label" for="flexRadioDefault1">
                                <h6>Overnight  Complimentary</h6>
                                <p>1 Business days</p>
                          </label>
                        </div>
                </div>
                 </div>

               

<div class="offcanvas offcanvas-end" tabindex="-1" id="DELIVERY" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">DELIVERY OPTIONS</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
        <h5>DELIVER TO AN ADDRESS</h5>
        <br>
        <p>Title*</p>
        <div>
        <select class="form-select" aria-label="Default select example">
          <option selected>Mr</option>
            <option value="1">Mrs</option>
            <option value="2">Ms</option>
            <option value="3">Mx</option>
            <option value="4">Prfer not say</option>
        </select>
        </div>
        <div class="mb-3">
          <label for="FirstName" class="form-label">First Name*</label>
          <input type="text" class="form-control" id="FirstName" v-model="state.fristname" >
          <span v-if="v$.fristname.$error && vx=='true'">{{ v$.fristname.$errors[0].$message }}</span>
         </div>

         <div class="mb-3">
          <label for="LastName" class="form-label">Last Name*</label>
          <input type="text" class="form-control" id="LastName" v-model="state.lastname">
          <span v-if="v$.lastname.$error && vx=='true'">{{ v$.lastname.$errors[0].$message }}</span>
         </div>
         <div class="mb-3">
          <label for="CompanyName" class="form-label">Company Name</label>
          <input type="text" class="form-control" id="CompanyName">
         </div>
          <div class="mb-3">
          <label for="Address1" class="form-label">Address 1*</label>
          <input type="text" class="form-control" id="Address1" placeholder="Enter a Location"  v-model="state.address">
          <span v-if="v$.address.$error && vx=='true'">{{ v$.address.$errors[0].$message }}</span>
         </div>
         <div class="mb-3">
          <label for="Address2" class="form-label">Address 2</label>
          <input type="text" class="form-control" id="Address2">
         </div> 
          <div class="mb-3">
          <label for="City" class="form-label">City*</label>
          <input type="text" class="form-control" id="City"  v-model="state.city">
          <span v-if="v$.city.$error && vx=='true'">{{ v$.city.$errors[0].$message }}</span>
         </div>
         <div class="mb-3">
          <label for="Country" class="form-label">Country*</label>
           <input class="form-control" type="text" :value="$store.state.xx"  id="Country" aria-label="Disabled input example" disabled readonly>
         </div>
         <div v-for="numphone in numphones" :key="numphone">
         <div >
         <label for="PhoneNumber">Phone Number*</label>
        <select class="form-select" id="PhoneNumber" aria-label="Default select example">
          <option value="3" selected>Mobile</option>
            <option value="1">Home</option>
            <option value="2">Work</option>
           
        </select>
        </div> 
        <div class="mt-3">
           <input class="form-control" type="tel"  id="tel" placeholder="xxx-xxx-xxx"   v-model="state.mobile">
                   <span v-if="v$.mobile.$error && vx=='true'">{{ v$.mobile.$errors[0].$message }}</span>

         </div>    
        </div> 
        
          <div class="input-group mb-3">
             <button type="button" class="form-control"  aria-describedby="basic-addon1" @click="addphone()"> <fa icon="mobile-alt"/> Add A Phone Number</button>
          </div>
          <div>
              <small>Required Fields*</small>
            <button type="button" class="form-control" :data-bs-dismiss="iscomplet2=='true'?'offcanvas':''" aria-label="Close"  @click="login2(),vx='true'">Continue</button>

          </div>
                    
  </div>
</div>
            </div> 
            <div>
             <div>
               <div class="d-flex mt-5">
                <h3><p v-if="iscomplet3=='true'" class="scucces" ><fa icon="check"/></p ><p v-if="iscomplet3=='false'">3</p></h3> <h3>PAYMENT</h3> 
                
                </div>
               <hr>
               <div v-if="iscomplet2=='true'" >
               <div class="mb-3">
                <label for="email" class="form-label">Your Email</label>
                <input class="form-control" type="text" :value="youremail"  id="email" aria-label="Disabled input example" disabled readonly>
               </div>
                <div class="mb-3">
                <label for="CardInformation" class="form-label">Card Information</label>
                <input class="form-control" type="text" id="CardInformation" >
               </div>
                <div class="mb-3">
                <label for="NameOnCard" class="form-label">Name On Card</label>
                <input class="form-control" type="text"   id="NameOnCard" >
               </div>
               <div class="mb-3">
                <label for="Country" class="form-label">Country</label>
                <input class="form-control" type="text" :value="$store.state.xx"  id="Country" aria-label="Disabled input example" disabled readonly>
               </div>
               <div class="mb-3">
             
                <button class="btn form-control" type="button" @click="checkout(),$store.commit('removeall')" ><div v-if="spinner=='true'" class="spinner-border text-dark" role="status" ><span class="visually-hidden"></span></div><div v-if="pay=='true'">Pay {{$store.getters.formater($store.getters.totalprice)}}</div><div v-if="finalk=='true'">
                <fa icon="check"/></div></button>
               </div>
               </div>
            
 </div>  

          </div>      
</div> 
     



</div>
  
</template>

<script>
import useValidate from '@vuelidate/core'
import { required,email,minLength,sameAs ,maxLength} from '@vuelidate/validators'
import { reactive, computed } from 'vue'
import footer from '../components/footer.vue'

export default {
  components: { footer },
    data() {
        return {
            iscomplet:'false',
            youremail:'',
            showcencel:'false',
            iscomplet2:'false',
            numphones:1,
            vx:'false',
            iscomplet3:'false',        
            finalk:'false',  
            pay:'true',
            spinner:'false',
        }
    },
    
      setup() {
    const state = reactive({
      email: '',
      fristname:'',
      lastname:'',
      mobile:null,
      city:'',
      address:'',
      password: {
        password: '',
        confirm: '',
      },
    })
  const rules = computed(() => {
      return {
        email: { required, email },
        fristname:{required },
        lastname:{required},
        mobile:{required,minLength: minLength(10),maxLength: maxLength(10)},
         city:{required},
         address:{required},
        password: {
          password: { required, minLength: minLength(6) },
          confirm: { required, sameAs: sameAs(state.password.password) },
        },
      }
})
    
    const v$ = useValidate(rules, state)

    return { state, v$ }


  },

  methods: {
      login(){
        this.v$.$validate() // checks all inputs
        console.log(this.v$)
        if(!this.v$.email.$error){
           this.iscomplet='true'
             this.youremail = document.getElementById('email').value

        }
      },login2(){
            this.v$.$validate() // checks all inputs
            if(!this.v$.mobile.$error && !this.v$.city.$error && !this.v$.address.$error && !this.v$.lastname.$error && !this.v$.fristname.$error){
              this.iscomplet2='true'

            }
      },checkout(){
            this.pay='false'
             this.spinner='true'
          setTimeout(()=>{
              this.spinner='false'  
             this.finalk='true'     
   
          } ,2000)
             setTimeout(()=>{
            alert("Your purchase has been completed successfullyوYou will return to the home page....Thank you for shopping ")
                } ,3000)
               const self = this;
            setTimeout(function(){
             self.$router.push('/');
             },8000)
          
       
      },
      addphone(){
        this.numphones++
      }

  },

}
</script>

<style scoped>
button{
   margin: 2em;
   margin-left: 0em;
  background-color: rgb(24, 11, 11);
  color: aliceblue;
  border: 1px solid rgb(24, 11, 11);
  box-shadow: 2px 2px 2px black;

 }
 button:hover{
   background-color: rgb(245, 244, 244);
  color: black;
    border: 1px solid rgb(245, 244, 244);
      box-shadow: -2px -2px 2px rgb(219, 217, 217);



 }
 span{
     color: red;
     
 }
 h3 p{
     background-color: black;
     width: 1.3em;
     
     border-radius:50% ;
     color: white;
     text-align: center;
     margin-left: 2em;
     margin-right: 0.3em;
 }
 .d-flex{
              align-items: baseline;

 }
 .scucces{
          background-color: green;

 }h3{
   cursor: pointer;
 }
 .offcanvas{
   width: 30em;
 }
 .step1 p ,.step1 h6{
    margin: 1em;
    color: green;
 }.form-check-input{
   margin-right: 1em;
 }.left{
   width: 2em;
   height: 1.4em;
   font-size: 2em;
   color: white;
   background-color:rgb(24, 11, 11) ;
   text-align: center;
   margin: 0.1em;
  cursor: pointer;
  box-shadow: 2px 2px 2px black;
 }
 .left:hover{
        transform: scale(1.01);
        transition: all 1s;

 }
</style>