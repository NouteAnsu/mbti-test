<template>
    <v-container fluid class="result">
        <v-layout justify-center align-center class="result_layout">
            <v-flex xs10 class="result_flex">
                <v-flex>
                    <v-flex class="mbti_type mb-15">
                        <v-flex>{{type}}</v-flex>
                        <v-flex>( {{name}} )</v-flex>
                    </v-flex>
                    <v-flex class="mbti_location mb-10">해외: {{location1}}  /  국내: {{location2}}</v-flex>
                    <v-flex class="mb-10">
                        <v-flex class="mbti_content1">{{content1}},</v-flex>
                        <v-flex class="mbti_content2">{{content2}}</v-flex>
                    </v-flex>
                </v-flex>
                <!-- <v-flex v-else>
                    <v-flex>???</v-flex>
                    <v-flex>결과를 알고싶다면</v-flex>
                </v-flex> -->
                <v-flex>
                    <img class="mbti_share" src="./kakao.png" width="300" height="70" @click="sendKaKao">
                </v-flex>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
<script>
import resultArr from '../../data/result'
import config from '../../config'
export default {
    data() {
        return {
            result:'',

            type:'',
            name:'',
            location1:'',
            location2:'',
            content1:'',
            content2:'',

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
            var content=data.content.split(',')
            this.content1=content[0]
            this.content2=content[1]
        },
        sendKaKao: function (){
            console.log(config.kakao_key)
            Kakao.init(config.kakao_key);
            Kakao.Link.sendDefault({
                objectType: 'feed',
                content: {
                    title: 'MBTI유형 검사',
                    description: 'MBTI 유형 검사',
                    imageUrl: '',
                    link: {
                        mobileWebUrl: 'http://localhost:8080',
                        webUrl:'http://localhost:8080'
                    },
                }
            })
        }
    }
}
</script>

<style>
    @import './result.css'
</style>