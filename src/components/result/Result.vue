<template>
    <v-container fluid class="result">
        <v-layout justify-center align-center class="result_layout">
            <v-flex xs12 sm8 md5 lg4 class="result_flex">
                <v-flex class="mb-10" style="text-align:center">
                    <img class="mt-5 hidden-sm-and-down" src="../splash/splash_icon.png" width="300" height="75" @click="moveHome" style="cursor:pointer">
                    <img class="mt-5 hidden-md-and-up" src="../splash/splash_icon.png" width="170" height="40" @click="moveHome" style="cursor:pointer">
                </v-flex>
                <v-flex class="mb-15">
                    <v-flex class="mbti_type mb-10">
                        <v-flex class="mb-10 hidden-sm-and-down" style="height:450px">
                        <img :src="resultTrip" width="100%" height="100%">
                    </v-flex>
                    <v-flex class="mb-10 hidden-md-and-up" style="height:311px">
                        <img :src="resultTrip" width="100%" height="100%">
                    </v-flex>
                    </v-flex>
                    <v-flex class="mx-8">
                        <v-flex class="mbti_type mb-3">{{type}}</v-flex>
                        <v-flex class="mbti_subtitle"> “{{subtitle}}”</v-flex>
                        <v-flex class="mt-5 mb-10" style="text-align:left">
                            <v-flex class="mbti_content2 mb-1" v-for="(text,index) in content" :key="index">
                                <v-layout>
                                    <span class="mr-2"><v-icon color="#000" size="12">mdi-checkbox-blank-circle</v-icon></span>
                                    <span>{{text}}</span>
                                </v-layout>
                            </v-flex>
                        </v-flex>
                        <v-flex style="text-align:left;font-size:20px">
                            <v-flex class="mb-3">환상 <span class="chemi pa-1">{{best}}</span></v-flex>
                            <v-flex>환장 <span class="chemi pa-1">{{worst}}</span></v-flex>
                        </v-flex>
                    </v-flex>    
                </v-flex>
                <v-flex class="result_info mx-8">
                    <v-flex class="result_text">그런 당신에게 추천하는 위버딩 서식!</v-flex>
                    <v-flex class="mb-10 hidden-sm-and-down" style="height:450px">
                        <img :src="resultImg" width="100%" height="100%">
                    </v-flex>
                    <v-flex class="mb-10 hidden-md-and-up" style="height:350px">
                        <img :src="resultImg" width="100%" height="100%">
                    </v-flex>
                    <v-flex class="mb-10">
                        <v-flex class="mb-3 py-3" style="background:#ff385c;font-weight:bold;font-size:18px;cursor:pointer;color:#fff" @click="redirectUrl">지금 만나러 가기</v-flex>
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
            subtitle:'',
            content:[],
            resultImg:'',
            resultTrip:'',
            resultUrl:'',

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
        moveHome(){
            localStorage.removeItem('result')
            this.$router.push({
                path:"/"
            })
        },
        resultHandler() {
            var data;
            resultArr.map(o=>{
                if(o.type===this.result) data = o
            })
            this.type=data.type
            this.subtitle=data.subtitle
            this.content=data.content.split(',')
            this.resultImg=data.resultImg
            this.resultTrip=data.resultTrip
            this.best=data.best
            this.worst=data.worst
            this.resultUrl=data.resultUrl
        },
        sendKaKao: function (){
            if (!Kakao.isInitialized()) {
                Kakao.init(config.kakao_key);
                Kakao.Link.sendDefault({
                    objectType: 'feed',
                    content: {
                        title: 'MBTI 별 여행지 추천',
                        description: '코로나19가 끝나고 갈 특별한 여행지를 추천 받아보세요! 숨겨진 위버딩 시크릿 쿠폰까지 함께 찾아 보세요! : )',
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
        },
        redirectUrl(){
            window.open(this.resultUrl)
        }
    }
}
</script>

<style>
    @import './result.css';
</style>