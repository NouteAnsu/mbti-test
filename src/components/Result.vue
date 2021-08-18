<template>
    <v-container fluid class="container">
        <v-layout justify-center>
            <v-flex xs10 class="text-align">
                <v-flex>
                    <v-flex>{{type}}({{name}})</v-flex>
                    <v-layout>
                        <v-flex>해외:{{location1}}</v-flex>
                        <v-flex>국내:{{location2}}</v-flex>
                    </v-layout>
                    <v-flex>{{content}}</v-flex>
                </v-flex>
                <!-- <v-flex v-else>
                    <v-flex>???</v-flex>
                    <v-flex>결과를 알고싶다면</v-flex>
                </v-flex> -->
                <v-layout>
                    <v-flex>카카오톡 공유하기</v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
import resultArr from '../data/result'
export default {
    data() {
        return {
            result:'',

            type:'',
            name:'',
            location1:'',
            location2:'',
            content:'',

            open:false,
        }
    },
    created() {
        this.result=localStorage.getItem('result')
        this.resultHandler()
    },
    methods : {
        resultHandler() {
            var data;
            resultArr.map(o=>{
                if(o.type===this.result) data = o
            })
            this.type=data.type
            this.name=data.name
            var location=data.location.split('/')
            this.location1=location[0]
            this.location2=location[1]
            this.content=data.content
        },
        shareSocail(){

        }
    }
}
</script>

<style>
    @import '../assets/css/style.css'
</style>