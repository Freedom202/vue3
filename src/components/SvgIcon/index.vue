<template>
  <!-- svg: 图标外层容器节点，内部需要与use标签结合使用 -->
  <svg :style="{ width, height }">
    <!-- xlink: href执行用哪一个图标，属性值务必用# icon-图标名 -->
    <!-- use标签fill属性可以设置图标颜色 -->
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script lang="ts" setup>
// 接收父组件传递过来得参数
defineProps({
  // xlink:href属性值前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 提供使用得图标名称
  name: String,
  // 接收父组件传递的颜色
  color: {
    type: String,
    default: '',
  },
  // 接收父组件传递的宽高
  width: {
    type: String,
    default: '50px',
  },
  height: {
    type: String,
    default: '50px',
  },
})
</script>
<style lang="scss" scoped></style>
