<template>
    <div class="logoDiv">
        <div >
                <router-link to="" class="logo">Logo</router-link>
        </div>

        <h2 class="welcome-text">
            Funding <br> Our Future
        </h2>

        <h4 class="welcome-subtext">Sport development and Peace</h4>



        <div style="height: 400px;"></div>

        <input 
                        type="text"
                        class="w-12 h-9 numList" 
                        style="border-radius: 10px; cursor: pointer"
                        @click="submit($event)"
                        v-for="drum1 in 69"
                        :value="drum1"
 
                        disabled
                        >
    </div>

  
</template>

<script setup>


</script>

<style scoped>

@media (max-width: 768px) {
    .logoDiv{
        padding-top: 30%;
        padding-left: 5%;
    }
    .logo{
        color: white;
        text-decoration: none;
        font-family: 'Poppins';
        font-size: 4rem;
        font-weight: bolder;
    }

    .welcome-text{
        color: white;
        text-decoration: none;
        font-family: 'Poppins';
        font-size: 3.5rem;
        font-weight: bold;
        margin-top: 40%;
        line-height: 1;
    }

    .welcome-subtext{
        color: white;
        line-height: 1;
        font-size: 1.8rem;
        height: auto;
    }    
}


</style>