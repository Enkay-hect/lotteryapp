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
           
            <div  class="selectionDrum1">
                <div id="selectionDrum1" class="selectionDrum1" style="column-gap: 10px">
                    <div v-for="l in selection1" class="sd1"></div>
                </div>

                <!-- <div id="gplaceholder" style="display: flex; justify-content: space-between; column-gap: 10px">
                    
                </div> -->
            </div>


            <div class="selectionDivider" >
            </div>

            <div id="selectionDrum2" class="selectionDrum2" style="justify-content: ;">
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

function drum1Submit(e){
    const drum1val = e.target
    const drum1Text = e.target.innerHTML

    const selectionDrum1 = document.getElementById('selectionDrum1')
    const selectionDrum1Babies = selectionDrum1.children

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


    if(drum1arrayvalues.includes(drum1Text)){
        alert('already selected')

        }  else if(drum1arrayvalues.length == 5 ){
            alert('Drum1 max reached')
            
        }   else{
    
        for(const i = drum1arrayvalues.length; i<selectionDrum1Babies.length; i++){

            if(!drum1arrayvalues.includes(drum1Text) && drum1arrayvalues.length < 5 ){
                drum1arrayvalues.push(drum1Text)

                selectionDrum1Babies[i].innerHTML = drum1Text

                selectionDrum1Babies[i].style.backgroundColor = 'rgba(1, 115, 109, 1)'
                selectionDrum1Babies[i].style.color = 'white'
                selectionDrum1Babies[i].style.height = '33px'
                selectionDrum1Babies[i].style.borderRadius = '10px'
                selectionDrum1Babies[i].style.display = 'flex'
                selectionDrum1Babies[i].style.justifyContent = 'center'
                selectionDrum1Babies[i].style.alignItems = 'center'

                setNewDrum1Color() 

                selectionDrum1Babies[i].onclick = function(){
                    const arrayIndex = drum1arrayvalues.indexOf(selectionDrum1Babies[i].innerHTML)
                    selectionDrum1.removeChild(selectionDrum1Babies[i])
                    increment1()
                    defaultDrum1Color()
                    drum1arrayvalues.splice(arrayIndex, 1)
                }
            
            } 
            console.log(drum1arrayvalues);

        }
    }

}


function drum2Submit(e) {
    const drum2val = e.target
    const drum2Text = e.target.innerHTML


    const selectionDrum2 = document.getElementById('selectionDrum2')
    const selectionDrum2Babies = selectionDrum2.children


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

    if(drum2arrayvalues.includes(parseInt(drum2Text))){
        alert('already selected')

    }  else if(drum2arrayvalues.length == 2 ){
            alert('Drum2 max reached')
            
    } else{
    
        for(const i = drum2arrayvalues.length; i<selectionDrum2Babies.length; i++){

            if(!drum2arrayvalues.includes(drum2Text) && drum2arrayvalues.length < 2 ){
                drum2arrayvalues.push(drum2Text)

                selectionDrum2Babies[i].innerHTML = drum2Text

                selectionDrum2Babies[i].style.backgroundColor = 'rgba(0, 117, 255, 1)'
                selectionDrum2Babies[i].style.color = 'white'
                selectionDrum2Babies[i].style.height = '33px'
                selectionDrum2Babies[i].style.borderRadius = '10px'
                selectionDrum2Babies[i].style.display = 'flex'
                selectionDrum2Babies[i].style.justifyContent = 'center'
                selectionDrum2Babies[i].style.alignItems = 'center'

                setNewDrum2Color() 

                selectionDrum2Babies[i].onclick = function(){
                    const arrayIndex = drum2arrayvalues.indexOf(selectionDrum2Babies[i].innerHTML)
                    selectionDrum2.removeChild(selectionDrum2Babies[i])
                    increment2()
                    defaultDrum2Color()
                    drum2arrayvalues.splice(arrayIndex, 1)
                }
                
            } 
console.log(drum2arrayvalues)
        }
    }

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
        padding-top: 5%;
    }

    .payNplayLinks{
        color: white;
    }
    .payNplayLinksQP{
        color: white;
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
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .PayNplayContainer button{
        color: white;
        width: 95%;
        height: 60px;
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
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-direction: row;
        align-items: center;
    }

    .sd1{

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
        flex-direction: row;
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