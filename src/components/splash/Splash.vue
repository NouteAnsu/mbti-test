<template>
    <v-container fluid class="splash">
        <v-layout>
            <v-flex style="text-align:center">
                <img class="mt-5 hidden-sm-and-down" src="./splash_icon.png" width="300" height="80">
                <img class="mt-5 hidden-md-and-up" src="./splash_icon.png" width="170" height="40">
            </v-flex>
        </v-layout>
        <v-layout align-center justify-center class="splash_layout">
            <v-flex xs11 sm10 class="splash_flex mb-15">
                <!-- <v-flex class="mb-15" style="text-align:center">
                    <img src="./splash_icon.png" width="150" height="150">
                </v-flex>
                <v-flex>
                    <v-flex class="splash_text">여행지 찾는 중 <span>{{text}}</span></v-flex>
                </v-flex> -->
                <v-progress-circular
                indeterminate
                color="#ff385c"
                size="200"
                class="mb-15"
                >
                <v-flex class="splash_text">여행지 찾는 중 . .</v-flex>
                </v-progress-circular>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
export default {
    data() {
        return {
            text:'. . .'
        }
    },
    created() {
        setInterval(() =>{
            this.$router.push({
                path:'/result'
            })
        },3000)
    },
}
</script>

<style>
    @import './splash.css'
</style>