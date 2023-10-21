<template>
    <div>
        <dashbord
            text1="Good Luck"
            header="Logo"
        >
        <p class="text1">Lucky Number</p>
        <GameDetail
            text1="Game Number"
            text2="Date"
            text3="Cost"
            chart1="123-23"
            chart2="12 Sept 2023"
            chart3="N 120"
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
        <div class="pay">
            <div id="pay">
                <p>Pay</p>
                <input type="text" name="" id="">
            </div>
            <div id="repeat">
                <p>Repeat Game</p>
                <select name="" id="">
                    <option value="X1">X1</option>
                    <option value="X2">X2</option>
                    <option value="X3">X3</option>
                    <option value="X4">X4</option>
                </select>
            </div>

        </div>
        <div class="p2p">
            <button id="p2p-btn">Procced To Payment</button>
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
        width: 40px;
        height: 40px;
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
    .pay{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 88%;
        margin: 20px auto;
    }
    #pay{
        width: 30%;
    }
    #pay input{
        border: 1px solid #fff;
        color: #fff;
        font-weight: 800;
        background: radial-gradient(101.53% 101.53% at 88.3% 100%, #01736D 0%, #39B68C 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        text-align: center;
        width: 100%;
        font-size: 20px;
        outline: none;
        padding: 10px;
        border-radius:5px ;
    }
    #repeat{
        width: 65%;
    }
    #repeat select{
        width: 100%;
        border-radius:5px ;
        background: #E8E4E4;
        padding: 10px;
        outline: none;
        border: 1px transparent;
    }
    .p2p{
        width: 90%;
        margin: auto;
    }
    #p2p-btn{
        width: 100%;
        padding: 10px;
        background: linear-gradient(91.44deg, #FF7D05 0%, #F2B006 100%);
        color: #fff;
        border-radius:5px ;
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
</style>