<template>
    <splash v-if="isLoading"></splash>
     <div class="parent" v-if="!isLoading">
        <h1>Welcome to Polo 7</h1>

           <form action="" class="login-box" @submit.prevent="signin">
                <h1>Lucky Login</h1>

                <p>Phone Number</p>

                <input type="text" placeholder="">

                <p>Password</p>

                <input type="text" placeholder="">


                <button type="submit">
                    Login
                </button>


                <div class="line">
                    <div class="small-line"></div>

                    <p>Or</p>

                    <div class="small-line"></div>
                </div>


                
           </form>
           <form class="login-box" @submit.prevent="goToAccount" style="padding: 0;">
            <button type="submit" id="special" >
                    Create New Account
                </button>
           </form>
          
        </div>
   

</template>

<script setup>
import {ref, onMounted} from 'vue'

import { useRouter } from 'vue-router';
const router = useRouter();

import splash from '../components/Splash.vue'

var isLoading = ref(true)

  onMounted(()=>{
    setTimeout(() => {
      isLoading.value = false
    }, 2000);
  })




  function signin(){
   

              setTimeout(() => {
                router.push(
                  {name: 'home'}
                  // router.push ({name: 'dashboard'}) not working like in signup
                )
        }) 
}

function goToAccount(){
    setTimeout(() => {
                router.push(
                  {name: 'signup'}
                  // router.push ({name: 'dashboard'}) not working like in signup
                )
        })  
}

</script>

<style scoped>
    @media only screen and (max-width:768px) {
    .parent{
        /* width: 100%; */
        padding-top: 2rem;
        padding-bottom:2rem;
        /* background: radial-gradient(101.53% 101.53% at 88.3% 100%, #01736D 0%, #39B68C 100%) ; */
    
    }

    .parent >h1,.login-box >h1{
        text-align: center;
    }
    .parent >h1{
        font-size: 1.1875rem;
        color: #ffff;
        font-weight: bold;
        margin-bottom: 1.875rem;
    }
    .login-box >h1{
        color: #01736D;
        font-size: 1.4375rem;
        margin-bottom: 1.875rem;
        font-weight: bold;

    }
    body{
        margin: 0px;
    }

    .login-box{
        width: 90%;
        background-color: #ffff;
        padding: 5%;
        margin: auto;
        border-radius: 0.625rem;
        box-sizing: border-box; 
    }

    input{
        width: 100%;
        padding-top: 1.5625rem;
        padding-bottom: 1.5625rem;
        background-color: #E8E4E4;
        box-sizing: border-box;
        border: none;
        border-radius: 0.5rem;
        margin-bottom: 1.25rem;
        padding-left: 0.625rem;
        outline: none;

    }

    button{
        display: block;
        margin: auto;
        width: 100%;
        padding-top: 1.6875rem;
        padding-bottom: 1.6875rem;
        border-radius: 0.5rem;
        border: none;
        font-weight: bold;
        margin-bottom: 1.875rem;
        margin-top: 0.625rem;
        color: #ffff;
        cursor: pointer;
        font-size: 1.125rem;
        background: linear-gradient(91.44deg, #FF7D05 0%, #F2B006 100%);

    }
    .diff{
        color:#FF7D05;
        background: #ffff;
        font-weight: bold;
        font-size: 1.1875rem;

    }
    .home-box{
        background: transparent;
    }

    .home-box >h1{
        text-align: left;
        color: #ffff;
        font-size: 1.6875rem;
        font-weight: lighter;
        
    }

    h1 >span{
        font-weight: bold;
        color: yellow;
    }

    #special{
        background: #ffff;
        border: 0.125rem solid #00000047;
        color: #000000;
        font-size: 1rem;
        
    }

    .line{
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 1rem;
        justify-content: space-between;
        margin-bottom: 2.5rem;
        margin-bottom: 1.25rem;
       
        

    }

    .small-line{
        width: 45%;
        border: 0.125rem solid #00000047;
    }


}
</style>