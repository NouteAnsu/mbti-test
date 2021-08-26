<template>
    <v-container fluid class="home">
        <v-layout align-center justify-center class="home_layout">
            <v-flex md8 lg6 class="home_flex">
                <v-flex class="mbti_question mb-10">{{question}}</v-flex>
                <v-stepper v-model="el" class="mb-10" flat>
                    <v-stepper-header>
                        <v-stepper-step color="#1AAB8A" :complete="el > 1" step="1"></v-stepper-step>
                        <v-stepper-step color="#1AAB8A" :complete="el > 2" step="2"></v-stepper-step>
                        <v-stepper-step color="#1AAB8A" :complete="el > 3" step="3"></v-stepper-step>
                        <v-stepper-step color="#1AAB8A" step="4"></v-stepper-step>
                    </v-stepper-header>
                </v-stepper>
                <v-flex class="mbti_answer mb-5 py-3" @click="nextHandler(1)">{{answer1}}</v-flex>
                <v-flex class="mbti_answer py-3" @click="nextHandler(-1)">{{answer2}}</v-flex>
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
                this.el=2
            }else if(this.questionStep===6){
                if(this.cnt>0) this.result[1]='S'
                else this.result[1]='N'
                this.cnt=0
                this.el=3
            }else if(this.questionStep===9){
                if(this.cnt>0) this.result[2]='T'
                else this.result[2]='F'
                this.cnt=0
                this.el=4
            }else if(this.questionStep===12){
                if(this.cnt>0) this.result[3]='J'
                else this.result[3]='P'
                this.result=this.result.join('')
                localStorage.setItem('result',this.result)
                this.$router.push({
                    path:'/mbti/splash',
                })
            }
            this.QnA()
        }
    }
}
</script>

<style>
    @import './home.css';
</style>