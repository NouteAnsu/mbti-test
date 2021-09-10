<template>
    <v-container fluid class="home">
        <v-layout justify-center class="home_layout">
            <v-flex xs12 sm10 md8 lg6>
                <v-flex style="height:50px"></v-flex>
                <v-flex>
                    <v-progress-linear color="#ff385c" v-model="rate" :value="question.length"></v-progress-linear>
                </v-flex>
                <v-layout align-center style="height:100%">
                    <v-flex class="home_flex mx-7 mb-10">
                        <v-flex class="order">Q{{q}}</v-flex>
                        <v-flex class="mbti_question my-8">{{question}}</v-flex>
                        <v-flex class="mbti_answer mb-5 pa-3" @click="nextHandler(1)">{{answer1}}</v-flex>
                        <v-flex class="mbti_answer pa-3" @click="nextHandler(-1)">{{answer2}}</v-flex>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import questionArr from '../../data/question'
import answerArr from '../../data/answer'
export default {
    data() {
        return {
            //step
            el:1,
            q:1,
            rate:0,
            //질문
            questionStep:0,
            question:'',
            cnt:0,

            answerStep:0,
            answer1:'',
            answer2:'',

            result:[],
        }
    },
    created(){
        this.QnA()
    },
    computed:{

    },
    methods:{
        QnA(){
            this.question=questionArr[this.questionStep]
            this.answer1=answerArr[this.answerStep].answer
            this.answer2=answerArr[this.answerStep+1].answer
        },
        nextHandler(val){
            this.questionStep++
            this.answerStep+=2
            this.cnt+=val
            if(this.questionStep===3){
                if(this.cnt>0) this.result[0]='E'
                else this.result[0]='I'
                this.cnt=0
            }else if(this.questionStep===6){
                if(this.cnt>0) this.result[1]='S'
                else this.result[1]='N'
                this.cnt=0
            }else if(this.questionStep===9){
                if(this.cnt>0) this.result[2]='T'
                else this.result[2]='F'
                this.cnt=0
            }else if(this.questionStep===12){
                if(this.cnt>0) this.result[3]='J'
                else this.result[3]='P'
                this.result=this.result.join('')
                localStorage.setItem('result',this.result)
                this.$router.push({
                    path:'/splash',
                })
            }
            this.q++
            this.rate+=8.33
            this.QnA()
        }
    }
}
</script>

<style>
    @import './home.css';
</style>