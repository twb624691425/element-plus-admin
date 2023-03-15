<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus'
import { ref } from 'vue'
const zIndex = ref(2000)
const size = ref('small')
</script>
