<template lang="html">
  <div v-loading.body.fullscreen="loading" element-loading-text="拼命加载中">
    <header class="page-header designer-header">
      <el-row class="inner-row" type="flex" justify="space-between">
        <el-col :span="9" class="title">
          网页标题
        </el-col>
        <el-col :span="9" class="text-right">
          <el-button type="danger" icon="arrow-left">返回</el-button>
          <el-button type="info" icon="document">预览</el-button>
          <el-button type="primary" icon="check">保存</el-button>
        </el-col>
      </el-row>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less">
  .designer-header {
    padding: 10px 30px;
    margin-bottom: 20px;
    .title {
      font-size: 24px;
      line-height: 36px;
      color: #9B9B9B;
    }
  }
</style>
