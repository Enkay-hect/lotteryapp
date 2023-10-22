<template>
    <div class="sub-details">
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
        <p>Draw Number</p>
        <div id="draw-number" class="same">
            <ul class="same-list-item first">
                <li class="same-first" v-for="item in drawNumber" :key="item">
                    {{ item }}
                </li>
            </ul>
            <div class="line"></div>
            <ul class="same-list-item second ">
                <li class="same-second" v-for="item in subSecond" :key="item">
                    {{ item }}
                </li>
            </ul>
        </div>
        <p>Win Number</p>
        <div id="win-number" class="same">
            <ul class="same-list-item first win-a">
                <li v-for="item in winNumber" :key="item">
                    {{ item }}
                </li>
            </ul>
            <div class="line"></div>
            <ul class="same-list-item second win-b">
                <li v-for="item in subThird" :key="item">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
    <button class="claim-btn">
        Claim
        <span>500</span>
    </button>
    <div class="backward-forward">
        <button class="bf-btn btn1" id="backward-btn">Backward</button>
        <button class="bf-btn btn2" id="forward-btn">Forward</button>
    </div>
</template>

<script>
    export default {
        name: 'SubDetail',
        data(){
            return{
                poloNumber: [12,18,30,34,60],
                subFirst:[2,15],
                drawNumber: [2,3,30,31,47],
                subSecond:[2,6],
                winNumber:[12,18,30,34,60],
                subThird: [2, 15]
            }
        }
    }
</script>

<style scoped>
    @media screen and (max-width:768px) {
        .sub-details{
            width: 89%;
            margin: 20px auto;
        }
        .sub-details p{
            margin-bottom: 5px;
            font-weight: 600;
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
        .claim-btn{
            width: 90%;
            border-radius: 10px;
            margin-inline: 5%;
            border: 1px solid;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            background: radial-gradient(113.52% 101.53% at 100% 100%, #29A283 0%, #2FAA86 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
            color: #fff;
            font-size: 20px;
            margin-bottom: 20px;
        }
        .claim-btn span{
            width: 75%;
            text-align: left;
            font-size: 30px;
            font-weight: 600;
        }
        .backward-forward{
            width: 90%;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .bf-btn{
            width: 45%;
            border-radius: 5px;
            padding: 20px;
            border: 1px solid;
        }
        #forward-btn{
            background: linear-gradient(91.44deg, #FF7D05 0%, #F2B006 100%);
            color: #fff;
            border: 1px solid currentColor;
        }
        #backward-btn{
            border: 1px solid #B8850540;
        }
        .win-a li:nth-child(1),
        .win-a li:nth-child(2),
        .win-a li:nth-child(4),
        .win-a li:nth-child(5),
        .win-b li:nth-child(2){
            background: linear-gradient(91.75deg, #FF0000 1.49%, #FF4343 99.01%);
            color: #fff;
        }
        .win-a li:nth-child(3),
        .win-b li:nth-child(1){
            color: #fff;
            background: linear-gradient(91.44deg, #FF7D05 0%, #F2B006 100%);
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