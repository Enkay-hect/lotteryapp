<template>
    <div>
        <dashbord 
            text1="Price Enquiry"
            header="Logo"
            text2="Lucky Numbers"
        >

            <GameDetail></GameDetail>
            <SubDetail></SubDetail>
        </dashbord>


    </div>
</template>

<script lang="ts" setup>
    import dashbord from '../views/dashbord.vue'
    import GameDetail from '../Component/GameDetail.vue'
    import SubDetail from '../Component/SubDetail.vue'
</script>

<style lang="css" scoped>

</style>