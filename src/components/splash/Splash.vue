<template>
    <v-container fluid class="splash">
        <v-layout align-center justify-center class="splash_layout">
            <v-flex xs12 sm10 class="splash_flex">
                <v-progress-linear
                    indeterminate
                    color="green"
                    class="mb-5"
                ></v-progress-linear>
                <v-flex class="splash_text">MBTI 유형을 분석 중입니다 ~ !</v-flex>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
export default {
    data() {
        return {

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