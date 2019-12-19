<template>
    <button @click="addStar">⭐</button>
</template>

<script>
    export default {
        methods:{
            addStar(){
                this.$emit("addStar")
            }
        }
    }
</script>

<style lang="scss" scoped>
button{
    padding: 0;
    margin: auto;
    font-size: 120%;
}
</style>