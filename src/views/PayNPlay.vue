<template>
    <!-- <div ref="input" @click="submit">Lorem ipsum dolor sit amet.</div> -->
    <div class="PayNplayContainer">
        <div class="header">
            <h2 class="payNplayLinks">Drum 1</h2>
            <h3 class="payNplayLinks">Select 5</h3>
            <router-link to="" class="payNplayLinks">QP</router-link>
        </div>

     
        <div class="totNum">
                    <!-- <ul v-for="l in length" > -->
                        <li 
                            type="text"
                            id="ilist"
                            class="w-8 h-8 numList" 
                            style="border-radius: 10px"
                            @click="submit($event)"
                            v-for="numn in 69"
                            :key="numn"
                        >
                            {{ numn}}
                        </li>
                    <!-- </ul> -->
                   
        </div>

        <div class="selection">
            
        </div>

        <div class="header">
            <h2 class="payNplayLinks">Drum 2</h2>
            <h3 class="payNplayLinks">Select 3</h3>
            <router-link to="" class="payNplayLinks">QP</router-link>
        </div>

        <div class="totNum">
                    <!-- <ul v-for="l in length" > -->
                        <li 
                            type="text"
                            ref="word"
                            id="illist"
                            class="w-8 h-8 numList2" 
                            style="border-radius: 10px"
                            @click="atClick(word)"
                            v-for="numn in 26"
                            :key="numn"
                        >
                            {{ numn}}
                        </li>
                    <!-- </ul> -->
                   
        </div>

        <button >Ok</button>
    </div>
</template>

<script setup>
import {ref, reactive, onUpdated, onMounted} from 'vue'

const length = 69
const totNum = 1

    function submit(e) {
        alert(e.target.innerHTML)
    }

</script>

<style scoped>

@media (max-width: 768px) {
    .PayNplayContainer{
        padding: 10px 20px 0px 20px;
    }
    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 5%;
    }

    .payNplayLinks{
        color: white;
    }

    .totNum{
        display: flex;
        flex-flow: row wrap;
        row-gap: 6px;
        column-gap: 15px;
        width: 100%;
        box-sizing: border-box;
        margin-top: 5%; 
        justify-content: center;
    }

    .numList{
        background-color: white;
        color: rgba(1, 115, 109, 1);
        text-align: center;
        display: flex;
        text-decoration: none;
        list-style: none;
        justify-content: center;
        padding-top: 0;
    }
    .numList2{
        background-color: white;
        text-align: center;
        display: flex;
        text-decoration: none;
        list-style: none;
        justify-content: center;
        padding-top: 0;
        color: rgba(1, 115, 109, 1);
    }

    .selection{
        /* width: 100%; */
        height: 70px;
        background-color: aliceblue;
        margin-top: 10%;
        margin-left: -19px;
        margin-right: -19px;
    }

    .PayNplayContainer button{
        text-align: center;
        color: white;
        width: 100%;
        height: 50px;
        margin-top: 16%;
        margin-bottom: 16%;
        background-color: orange;
        border-radius: 9px;
        
    }
}
</style>