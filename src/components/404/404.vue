<template>
    <v-container fluid>
        <v-layout>
            <v-flex></v-flex>
        </v-layout>
    </v-container>
</template>


<script>
export default {
    data() {
        return {

        }
    },
    created() {
        this.redirect()
    },
    methods: {
        redirect(){
            location.href='https://www.webudding.com/'
        }
    }
}   
</script>