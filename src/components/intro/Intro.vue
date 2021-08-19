<template>
    <v-container fluid class="intro">
        <v-layout justify-center align-center class="intro_layout">
            <v-flex class="intro_flex" v-bind:class="{fade:show===true}">
                <v-flex class="intro_desc mb-5">MBTI 별 여행지를 추천해드려요!</v-flex>
                <v-flex class="start" @click="moveHome">
                    <span>S</span>
                    <span>T</span>
                    <span>A</span>
                    <span>R</span>
                    <span>T</span>
                    <span>!</span>
                    <span>!</span>
                </v-flex>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
export default {
    data() {
        return {
            show:false
        }
    },
    created(){
        setTimeout(()=>{
            this.show=true
        },600)
    },
    methods:{
        moveHome(){
            this.$router.push({
                path:'/home'
            })
        }
    }
}
</script>


<style>
    @import './intro.css';
</style>