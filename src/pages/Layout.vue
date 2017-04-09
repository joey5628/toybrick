<template lang="html">
  <div class="layout-app">
    <commonhead></commonhead>
    <router-view class="layout-container"></router-view>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader'
export default {
  components: {
    commonhead: CommonHeader
  }
}
</script>
