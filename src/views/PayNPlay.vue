<template>
    <!-- <div ref="input" @click="submit">Lorem ipsum dolor sit amet.</div> -->
    <div class="PayNplayContainer">
        <div class="header">
            <h1  class="payNplayLinks" style="font-weight: bold;">Drum 1</h1>
            <h2 class="payNplayLinks">Select 5</h2>
            <h2 class="payNplayLinksQP" style="background: linear-gradient(91.44deg, #FF7D05 0%, #F2B006 100%);">QP</h2>
        </div>

     
        <div class="totNum">
                        <li 
                            ref="drum1"
                            type="input"
                            class="w-7 h-7 numList" 
                            style="border-radius: 10px; cursor: pointer"
                            @click="drum1Submit($event)"
                            v-for="drum1 in 69"
                            :key="drum1"
                        >
                            {{ drum1}}
                        </li>                   
        </div>

        <div class="selection">
            <div id="selectionDrum1" class="selectionDrum1">
                <div v-for="l in selection1" class="sd1"></div>
            </div>

            <div class="selectionDivider">
            </div>

            <div id="selectionDrum2" class="selectionDrum2">
            <div v-for="l in selection2" class="sd1"></div>
            </div>
        </div>

        <div class="header">
            <h2 class="payNplayLinks" style="font-weight: bold;">Drum 2</h2>
            <h2 class="payNplayLinks">Select 2</h2>
            <h2 class="payNplayLinksQP" style="background: rgba(0, 117, 255, 1);">QP</h2>
        </div>

        <div class="totNum">
                    <!-- <ul v-for="l in length" > -->
                        <li 
                            type="text"
                            id="illist"
                            class="w-7 h-7 numList2" 
                            style="border-radius: 10px; cursor: pointer"
                            @click="drum2Submit($event)"
                            v-for="drum2 in 26"
                            :key="drum2"
                        >
                            {{ drum2}}
                        </li>
                    <!-- </ul> -->
                   
        </div>

        <button >ok</button>
    </div>
</template>

<script setup>
import {ref, reactive} from 'vue'

const length = 69
const totNum = 1



const drum1selection = 0
const drum2selection = 0
const drum1Select = 0

const  drum1arrayvalues = []
const  drum2arrayvalues = []

const selection1 = ref(5)
const selection2 = ref(2)

function decrement1(){
    if(selection1.value == 0 ){
        return
    } else{
        selection1.value--
    }
}

function increment1(){
        selection1.value++
}


function decrement2(){
    if(selection2.value == 0 ){
        return
    } else{
        selection2.value--
    }
}

function increment2(){
        selection2.value++
}



   function drum1Submit(e) {
        const drum1val = e.target
        const drum1Text = e.target.innerHTML

        const drum1bbb = document.getElementById('selectionDrum1')
        const  drum1ccc = drum1bbb.getElementsByTagName('div').length


        drum1bbb.style.cursor = 'pointer'

            function defaultDrum1Color(){
                drum1val.style.color = 'rgba(1, 115, 109, 1)'
                drum1val.style.backgroundColor='white';
                drum1val.style.border= 'rgba(1, 115, 109, 1)';
            }

            function setNewDrum1Color(){
                drum1val.style.color = 'white'
                drum1val.style.backgroundColor='rgba(1, 115, 109, 1)';
                drum1val.style.border= '2px solid white';
            }

            setNewDrum1Color()   
             
            const drum1Select = `${drum1selection + parseInt(drum1Text)}`
            const drum1aaa = document.createElement('div')
            drum1aaa.style.backgroundColor = 'rgba(1, 115, 109, 1)'
            drum1aaa.style.color = 'white'
            drum1aaa.style.width = '30px'
            drum1aaa.style.height = '33px'
            drum1aaa.style.borderRadius = '10px'
            drum1aaa.style.display = 'flex'
            drum1aaa.style.justifyContent = 'center'
            drum1aaa.style.alignItems = 'center'

            // drum1bbb.removeChild(drum1bbb.firstElementChild);

            // drum1bbb.lastElementChild.remove()

            if(drum1arrayvalues.includes(drum1Select)){
                    alert('Number chosen already')
                    return
                    
            } else if(drum1arrayvalues.length == 5){
                alert('Drum1 max reach')
                defaultDrum1Color()

            }
            else{

                decrement1()
                drum1aaa.innerHTML = drum1Select

                if(!drum1arrayvalues.includes(drum1Select)){
                    drum1arrayvalues.push(drum1Select)
                    drum1bbb.appendChild(drum1aaa) 
                }

                drum1aaa.onclick = function(){
                    increment1()
                    drum1aaa.remove()
                    defaultDrum1Color()
                    const arrayIndex = drum1arrayvalues.indexOf(drum1Select)
                    drum1arrayvalues.splice(arrayIndex, 1)
                }
            }

            console.log(drum1arrayvalues);

        }


    function drum2Submit(e) {
        const drum2val = e.target
        const drum2Text = e.target.innerHTML


        const drum2bbb = document.getElementById('selectionDrum2')
        const  drum2ccc = drum2bbb.getElementsByTagName('div').length

        drum2bbb.style.cursor = 'pointer'

        function defaultDrum2Color(){
                drum2val.style.color = 'rgba(1, 115, 109, 1)'
                drum2val.style.backgroundColor='white';
                drum2val.style.border= 'rgba(1, 115, 109, 1)';
            }

            function setNewDrum2Color(){
                drum2val.style.color = 'white'
                drum2val.style.backgroundColor='rgba(0, 117, 255, 1)';
                drum2val.style.border= '2px solid white';
            }

            setNewDrum2Color()  
            
            const drum2Select = `${drum2selection + parseInt(drum2Text)}`
            const drum2aaa = document.createElement('div')
            drum2aaa.style.backgroundColor = 'rgba(0, 117, 255, 1)'
            drum2aaa.style.color = 'white'
            // drum2aaa.style.width = '20%'
            drum2aaa.style.width = '30px'
            drum2aaa.style.height = '30px'
            drum2aaa.style.borderRadius = '10px'
            drum2aaa.style.textAlign = 'center'
            drum2aaa.style.display = 'flex'
            drum2aaa.style.justifyContent = 'center'
            drum2aaa.style.alignItems = 'center'


            if(drum2arrayvalues.includes(drum2Select)){
                    alert('Number chosen already')
                    
            } else if(drum2arrayvalues.length == 2){
                alert('Drum2 max reach')
                defaultDrum2Color()

            } else {
                decrement2()
                drum2aaa.innerHTML = drum2Select

                if(!drum2arrayvalues.includes(drum2Select)){
                    drum2arrayvalues.push(drum2Select)
                    drum2bbb.appendChild(drum2aaa) 
                }

                drum2aaa.onclick = function(){
                    increment2()
                    drum2aaa.remove()
                    defaultDrum2Color()
                    const arrayIndex = drum2arrayvalues.indexOf(drum2Select)
                    drum2arrayvalues.splice(arrayIndex, 1)
                }
            }
            console.log(drum2arrayvalues);

    }



  
</script>



<style scoped>

@media (max-width: 768px) {
    .PayNplayContainer{
        margin: 0px;
        padding: 0px;
    }

    h2,h1{
        margin: 0px;
        padding: 0px;
    }
    .header{
        display: flex;
        width: 85%;
        margin: auto;
        flex-direction: row;
        justify-content: space-between;
        /* margin-top: 15%; */
        padding-top: 5%;
    }

    .payNplayLinks{
        color: white;
    }
    .payNplayLinksQP{
        color: white;
        /* background: linear-gradient(91.44deg, #FF7D05 0%, #F2B006 100%); */
        width: 15%;
        text-align: center;
        display: flex;
        justify-content: center;
        border-radius: 10px;
    }

    .totNum{
        display: flex;
        flex-flow: row wrap;
        row-gap: 8px;
        column-gap: 16px;
        width: 90%;
        box-sizing: border-box;
        /* margin-top: 5%;  */
        margin: 5% auto;
        justify-content: center;
    }

    .numList{
        background-color: white;
        color: rgba(1, 115, 109, 1);
        align-items: center;
        display: flex;
        justify-content: center;
        list-style: none;
    }

    .numListSelect{
        background-color: rgba(1, 115, 109, 1);
        color: white;
        border: 3px solid white;
        /* list-style: none;
        width: 10px;
        height: 10px; */
    }
    .numList2{
        background-color: white;
        color: rgba(1, 115, 109, 1);
        align-items: center;
        display: flex;
        justify-content: center;
        list-style: none;
    }

    .selection{
        
        width: 100%;
        height: 70px;
        background-color: aliceblue;
        margin-top: 10%;
        /* margin-left: -19px; */
        /* margin-right: -19px; */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .PayNplayContainer button{
        color: white;
        width: 95%;
        height: 60px;
        /* margin-top: 20%; */
        /* margin-bottom: 0; */
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10% auto;
        background: linear-gradient(91.44deg, #FF7D05 0%, #F2B006 100%);;
        border-radius: 6px;
    }

    .selectionDivider{
        border: 2px solid rgba(0, 117, 255, 1);
    }

    .selectionDrum1{
        width: 67%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-direction: row-reverse;
        align-items: center;
        /* column-gap: 6%; */
        /* margin-left: -10%;
        margin-right: -10%; */
    }

    .sd1{

        /* drum1aaa.style.backgroundColor = 'rgba(1, 115, 109, 1)'
            drum1aaa.style.color = 'white'
            drum1aaa.style.width = '30px'
            drum1aaa.style.height = '30px'
            drum1aaa.style.borderRadius = '10px'
            drum1aaa.style.textAlign = 'center' */

            background-color: rgba(169, 165, 165, 0.49);
            width: 30px;
            height: 30px;
            border-radius: 10px;

    }

    .selectionDrum2{
        width: 33%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-direction: row-reverse;
        align-items: center;
        column-gap: 6%;
    }

    .sdrum{
        background-color: gray;
        color: rgba(1, 115, 109, 1);
        text-align: center;
        display: flex;
        justify-content: center;
        padding-top: 0;
        width: 300%;
    }
}
</style>