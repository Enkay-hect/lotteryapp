<template>
    <div>
        <dashbord
            text1="Every Player is a winner"
        >
        <p class="text1">Game Details</p>
        <GameDetail
            text1="Game Number"
            text2="Ticket Number"
            text3="VID Number"
            chart1="123-23"
            chart2="1135619"
            chart3="0525011"
        >
        </GameDetail>

        <div class="game-summary">
            <p>Polo Number</p>
            <div id="polo-number" class="same">
                    <ul class="same-list-item first">
                        <li class="w-8 h-8 same-first" v-for="number in poloNumber" :key="number">
                            {{ number }}
                        </li>
                    </ul>
                    <div class="line"></div>
                    <ul class="same-list-item second ">
                        <li class="same-second" v-for="number in subFirst" :key="number">
                            {{ number }}
                        </li>
                    </ul>
            </div>
 
        </div>
        <div class="notice">
            An SMS has been sent to you with more information
        </div>
        <div class="play-exit">
            <button class="bf-btn btn1" id="new-btn">Play New Game</button>
            <button class="bf-btn btn2" id="exit-btn">Exit</button>
        </div>
    </dashbord>
    </div>
</template>

<script>

    import dashbord from '../views/dashbord.vue'
    import GameDetail from '../Component/GameDetail.vue'

    export default{
        name:'GameSummary',
        components:{
            dashbord, GameDetail
        },
        data(){
            return{
                poloNumber: [12,18,30,34,60],
                subFirst:[2,15],

            }
        }
    }
</script>

<style scoped>
@media screen and (max-width:768px) {
    .game-summary{
        width: 88%;
        margin: 10px auto;
    }
    .same{
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        align-items: center;
    }
    .same-list-item{
        display: flex;
        justify-content: space-between;
        list-style: none;
        padding: 0;
        margin-bottom: 10px;
    }
    .first{
        width: 75%;
    }
    .second{
        width: 20%;
    }
    .same-list-item li{
        border-radius: 5px;
        border: 1px solid;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
    }
    .line{
        border: 1px solid #0075FF;
        height: 35px;
        margin-top:-10px ;
    
    }
    .same-second{
        background: linear-gradient(91.75deg, #0075FF 1.49%, #4399FF 99.01%);
        color: #fff;
    }
    .same-first{
        color: #fff;
        background: radial-gradient(101.53% 101.53% at 88.3% 100%, #01736D 0%, #39B68C 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    }
    .notice{
        text-align: center;
        font-size: 18px;
        color: #1E1E1EE5;
        width: 90%;
        margin: 20px auto;
    }
    .play-exit{
        width: 90%;
        margin: auto;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: space-between;
    }
    .bf-btn{
        width: 100%;
        border-radius: 5px;
        padding: 20px;
        border: 1px solid;
        margin: 15px 0;
    }
    #new-btn{
        background: linear-gradient(91.44deg, #FF7D05 0%, #F2B006 100%);
        color: #fff;
        border: 1px solid currentColor;
    }
    #exit-btn{
        border: 1px solid #B8850540;
    }
    .text1{
        text-align: center;
        font-size: 25px;
        font-weight: 700;
        color: radial-gradient(101.53% 101.53% at 88.3% 100%, #01736D 0%, #39B68C 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        color:rgba(57, 182, 140, 1);
        margin-bottom: 15px;
    }


}
@media screen and (max-width:649px) {
    .first{
        width: 75%;
    }
    .second{
        width: 20%;
    }
}
@media screen and (max-width:475px) {
    .first{
        width: 70%;
    }
    .second{
        width: 25%;
    }
}

</style>