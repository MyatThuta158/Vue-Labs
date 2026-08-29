<template>
    <footer>
        Created by MTT &copy; {{year}}
    </footer>
</template>

<script setup>
 import {ref} from 'vue'
 const year = ref(new Date().getFullYear())
</script>

<style lang="scss" scoped>

</style>