<template>
    <v-container fluid>
        <Header/>
        <v-layout>
            <v-flex>
                <v-flex>
                    <v-flex>{{question}}</v-flex>
                    <v-flex @click="nextHandler(1)">
                        {{answer1}}
                    </v-flex>
                    <v-flex @click="nextHandler(-1)">
                        {{answer2}}
                    </v-flex>
                </v-flex>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Header from '@/components/Header'
import questionArr from '../data/question'
import answerArr from '../data/answer'
export default {
    components:{
        Header
    },
    data() {
        return { 
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
                    path:'/result',
                })
            }
            this.QnA()
        }
    }
}
</script>

<style>
    @import '../assets/css/style.css'
</style>