<template>
    <div>
        <dashbord 
            text1="Price Enquiry"
            header="Logo"
            text2="Lucky Numbers"
        >

            <GameDetail
                text1="Game Number"
                text2="Ticket Number"
                text3="Date"
                chart1="123-23"
                chart2="1135619"
                chart3="120523"
            ></GameDetail>
            <SubDetail></SubDetail>
        </dashbord>


    </div>
</template>

<script lang="ts" setup>
    import dashbord from '../views/dashbord.vue'
    import GameDetail from '../Component/GameDetail.vue'
    import SubDetail from '../Component/SubDetail.vue'
</script>

<style lang="" scoped>

</style>