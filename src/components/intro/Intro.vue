<template>
    <v-container fluid class="intro" style="padding:0">
        <v-layout justify-center class="intro_layout">
            <v-flex xs12 sm10 md8 lg6  class="intro_flex" v-bind:class="{fade:show===true}">
                <v-flex class="mx-3">
                    <img class="pa-5" src="./intro_main.png" width="100%" height="100%">
                </v-flex>
                <v-flex class="pa-8">
                    <v-flex @click="moveHome">
                        <span class="py-3 px-8 start_btn" style="border-radius:50px">START</span>
                    </v-flex>
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