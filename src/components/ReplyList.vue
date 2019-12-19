<template>
  <div>
    <p v-for="item in reply" :key="item.id">#{{item.id}}楼：{{item.name}}说：{{item.content}}</p>
  </div>
</template>

<script>
export default {
  props: ["reply"]
};
</script>

<style lang="scss" scoped>
</style>