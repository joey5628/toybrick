<template lang="html">
  <header class="layout-header">
    <el-row class="inner-row">
      <el-col :span="3">
        <h1 class="logo">积木盒</h1>
      </el-col>
      <el-col :span="17">
        <el-menu theme="dark" :default-active="current"
          mode="horizontal" router>
          <el-menu-item v-for="(item, index) in menus" :key="index" :index="item.route.name" :route="item.route">
            {{item.title}}
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4" class="text-right">
        <el-dropdown>
          <div class="user-box">
            <img src="../assets/img/sun.jpeg" alt="" class="user-photo">
            <span class="user-setting">
              {{auth.username}} <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="login">
                注销
              </router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </header>
</template>

<script>
export default {
  data () {
    return {
      menus : [
        {
          "title": "首页",
          "route": {
            "name": "home"
          }
        },
        {
          "title": "活动列表",
          "route": {
            "name": "pages"
          }
        },
        {
          "title": "操作日志",
          "route": {
            "name": "changelog"
          }
        },
        {
          "title": "用户",
          "route": {
            "name": "users"
          }
        }
      ],
      auth: {
        username: 'zhangyi5628',
        userPhoto: '../assets/img/sun.jpeg'
      }
    }
  },

  computed: {
    current () {
      return this.$route.name
    }
  },

  methods : {

  }
}
</script>

<style lang="less">
@import '../assets/css/base.less';
@import '../assets/css/variable.less';
  .layout-header {
    background: @header-bg-color;
    color: @header-color;
    .logo {
      height: 40px;
      line-height: 40px;
      margin: 12px 0 0 0;
      font-size: 34px;
      color: #fff;
    }
    /*.logo {
      text-indent: 100px;
      color: #fff;
      font-size: 18px;
      height: 40px;
      line-height: 44px;
      margin: 12px 0 0 0;
      background: url(../assets/logo.png) no-repeat;
    }*/
    .el-menu--dark {
      .el-menu-item {
        height: 65px;
        line-height: 65px;
      }
      .is-active {
        border-bottom: 5px solid @menu-active-color;
      }
    }
    .user-box {
      cursor: pointer;
      .user-photo {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        float: left;
        margin: 12px 10px;
      }
      .user-setting {
        color: #eee;
        line-height: 60px;
      }
    }
  }
</style>
