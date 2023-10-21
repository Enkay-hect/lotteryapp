<template>
    <div class="game-details">
        <ul class="list-item first">
            <li>{{text1}}</li>
            <li>{{text2}}</li>
            <li>{{text3}}</li>
        </ul>
        <div class="list-item  second">
            <li>{{chart1}}</li>
            <li>{{chart2}}</li>
            <li>{{chart3}}</li>
        </div>
    </div>
</template>

<script setup>
    const {text1, text2, text3, chart1, chart2, chart3} = defineProps(['text1','text2','text3', 'chart1', 'chart2', 'chart3'])

    // export default {
    //     name: 'GameDetail',
    //     data(){
    //         return{
               
    //         }
    //     }
    // }
</script>


<style scoped>
    .game-details{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        margin: auto;
        padding: 10px 15px;
        box-sizing: border-box;
        border-radius: 10px;
        background: radial-gradient(113.52% 101.53% at 100% 100%, #29A283 0%, #2FAA86 100%);
    }
    .list-item{
      list-style:none;
      color: #fff;
    }
    .list-item li{
        margin-bottom: 10px;
    }
    .second li{
        font-weight: 800;
        font-size: 20px;
    }
    .first li{
        font-size: 18px;
        font-weight: 400;
    }

</style>