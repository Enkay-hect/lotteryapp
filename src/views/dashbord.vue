<template>
    <div class="main-container">
        <div class="section1">
            <p>{{text1}}</p>
            <h2>{{header}}</h2>
            <p>{{text2}}</p>
        </div>
        <div class="section2">
            <slot></slot>
        </div>
        
    </div>
</template>

<script lang="ts" setup>
    const {text1, header, text2} = defineProps(['text1','header','text2'])

</script>

<style scoped>
    @media (max-width: 768px) {
        .main-container{
            padding: 50px 0;
            box-sizing: border-box;
        }
        .section1{
            width: 100%;
            margin-bottom: 30px;
    
        }
        .section1 h2{
            font-size: 35px;
            font-weight:600;
        }
        .section1 p{
            font-size: 22px;
        }
        .section1 p,
        .section1 h2{
            text-align: center;
            color: white;
        }
        .section2{
            width: 80%;
            margin: auto;
            border-radius: 10px;
            background-color: white;
            padding: 30px 0;
            box-sizing: border-box;
        }
    }
    @media screen and (max-width:385px) {
        .section2{
            width: 90%;
        }
    }

</style>