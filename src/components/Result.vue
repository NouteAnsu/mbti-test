<template>
    <v-container fluid>
        <v-layout>
            <v-flex>
                <v-flex>{{type}}({{name}})</v-flex>
                <v-layout>
                    <v-flex>해외:{{location1}}</v-flex>
                    <v-flex>국내:{{location2}}</v-flex>
                </v-layout>
                <v-flex>{{content}}</v-flex>
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
            content:''
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
        }
    }
}
</script>