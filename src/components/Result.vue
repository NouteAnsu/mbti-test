<template>
    <div>
        {{result}}
    </div>
</template>


<script>
export default {
    data() {
        return {
            result:''
        }
    },
    created() {
        this.result=localStorage.getItem('result')
    },
    methods : {

    }
}
</script>