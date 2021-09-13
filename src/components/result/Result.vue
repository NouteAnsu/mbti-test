<template>
    <v-container fluid class="result">
        <v-layout justify-center align-center class="result_layout">
            <v-flex xs11 sm8 md5 lg4 class="result_flex mx-8">
                <v-flex class="mb-10" style="text-align:center">
                    <img class="mt-5 hidden-sm-and-down" src="../splash/splash_icon.png" width="300" height="75a">
                    <img class="mt-5 hidden-md-and-up" src="../splash/splash_icon.png" width="170" height="40">
                </v-flex>
                <v-flex class="mb-15">
                    <v-flex class="mbti_type mb-10">
                        <v-flex class="mb-10 hidden-sm-and-down" style="height:450px">
                        <img :src="resultTrip" width="100%" height="100%">
                    </v-flex>
                    <v-flex class="mb-10 hidden-md-and-up" style="height:350px">
                        <img :src="resultTrip" width="100%" height="100%">
                    </v-flex>
                    </v-flex>
                    <v-flex class="mbti_type">{{type}}</v-flex>
                    <v-flex class="my-5" style="text-align:left">
                        <v-flex class="mbti_content2 mb-2" v-for="(text,index) in content" :key="index">{{text}}</v-flex>
                    </v-flex>
                    <v-flex style="text-align:left;font-size:20px">
                        <v-flex class="mb-3">환상 <span class="chemi pa-1">{{best}}</span></v-flex>
                        <v-flex>환장 <span class="chemi pa-1">{{worst}}</span></v-flex>
                    </v-flex>
                </v-flex>
                <v-flex class="result_info">
                    <v-flex class="result_text">그런 당신에게 추천하는 위버딩 서식!</v-flex>
                    <v-flex class="mb-10 hidden-sm-and-down" style="height:450px">
                        <img :src="resultImg" width="100%" height="100%">
                    </v-flex>
                    <v-flex class="mb-10 hidden-md-and-up" style="height:350px">
                        <img :src="resultImg" width="100%" height="100%">
                    </v-flex>
                    <v-flex class="mb-10">
                        <v-flex class="mb-3 py-3" style="background:#ff385c;font-weight:bold;font-size:18px;cursor:pointer;color:#fff">지금 만나러 가기</v-flex>
                        <v-flex class="py-3" style="background:#fef01b;font-weight:bold;font-size:18px;cursor:pointer" @click="sendKaKao">카카오톡 공유하기</v-flex>
                    </v-flex>
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
            content:[],
            resultImg:'',
            resultTrip:'',

            best:'',
            worst:'',

            share_url:'https://webudding.net'

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
            this.content=data.content.split(',')
            this.resultImg=data.resultImg
            this.resultTrip=data.resultTrip
            this.best=data.best
            this.worst=data.worst
        },
        sendKaKao: function (){
            if (!Kakao.isInitialized()) {
                Kakao.init(config.kakao_key);
                Kakao.Link.sendDefault({
                    objectType: 'feed',
                    content: {
                        title: 'MBTI유형 검사',
                        description: 'MBTI 유형 검사',
                        imageUrl:'https://www.webudding.net/image.png',
                        link: {
                            mobileWebUrl: this.share_url,
                            webUrl:this.share_url
                        },
                    },
                    buttons: [ 
                        {
                            title:'테스트 하기',
                            link: {
                                mobileWebUrl: this.share_url,
                                webUrl:this.share_url
                            }
                        },
                    ],
                    //카카오톡 미설치 시 카카오톡 설치 경로이동
                    installTalk: true,
                })
            } else{
                alert('다시 공유하기를 클릭해주세요')
                location.reload()
            }
        }
    }
}
</script>

<style>
    @import './result.css';
</style>