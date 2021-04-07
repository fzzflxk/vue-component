<template>
  <div class="app-warp">
    <header class="app-header">
      <div class="container">
        <img src="~images/logo.png" alt srcset />
        <h2>风速科技Vue组件库</h2>

      </div>
    </header>
    <div class="app-content">
      <nav class="app-aside">
        <el-scrollbar class="aside-scroll">
          <ul class="app-aside-inner">
            <li
              :class="['nav', { 'active-nav': activeNav === nav.routeName }]"
              v-for="nav in navs"
              :key="nav.routeName"
              @click="onNav(nav)"
            >
              <span class="name">{{nav.name}}</span>
              <span>{{nav.cname}}</span>
            </li>
          </ul>
        </el-scrollbar>
      </nav>
      <div class="app-page-warp">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      activeNav: this.$route.name,
      navs: [
        { name: 'FsButton', cname: '按钮', routeName: 'buttonDemo' }, // routeName: 跳转地址，和路由地址的name关联
        { name: 'Demo2', cname: '待增加的示例2', routeName: '' },
        { name: 'Demo3', cname: '待增加的示例3', routeName: '' },
        { name: 'Demo4', cname: '待增加的示例4', routeName: '' },
        { name: 'Demo5', cname: '待增加的示例5', routeName: '' },
        { name: 'Demo6', cname: '待增加的示例6', routeName: '' },
        { name: 'Demo7', cname: '待增加的示例7', routeName: '' },
        { name: 'Demo8', cname: '待增加的示例8', routeName: '' },
        { name: 'Demo2', cname: '待增加的示例2', routeName: '' },
        { name: 'Demo3', cname: '待增加的示例3', routeName: '' },
        { name: 'Demo4', cname: '待增加的示例4', routeName: '' },
        { name: 'Demo5', cname: '待增加的示例5', routeName: '' },
        { name: 'Demo6', cname: '待增加的示例6', routeName: '' },
        { name: 'Demo7', cname: '待增加的示例7', routeName: '' },
        { name: 'Demo8', cname: '待增加的示例8', routeName: '' },
        { name: 'Demo2', cname: '待增加的示例2', routeName: '' },
        { name: 'Demo3', cname: '待增加的示例3', routeName: '' },
        { name: 'Demo4', cname: '待增加的示例4', routeName: '' },
        { name: 'Demo5', cname: '待增加的示例5', routeName: '' },
        { name: 'Demo6', cname: '待增加的示例6', routeName: '' },
        { name: 'Demo7', cname: '待增加的示例7', routeName: '' },
        { name: 'Demo8', cname: '待增加的示例8', routeName: '' }
      ]
    }
  },

  methods: {
    onNav (nav) {
      if (!nav.routeName) {
        this.$message.error(
          '路由地址不存在，去项目的“src/router/index.js”配置地址的 name 属性'
        )
        return
      }
      this.activeNav = nav.routeName
      this.$router.push({
        name: nav.routeName
      })
    }
  }
}
</script>

<style lang="scss">
.app-warp {
  width: 100%;

  .app-header {
    width: 100%;
    height: 60px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1200;

    .container {
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      background-color: #fff;
      border-bottom: 1px solid $border-color-base;
      display: flex;
      align-items: center;

      h2 {
        margin-left: 16px;
        font-weight: 100;
        color: lin;
      }
    }
  }

  .app-content {
    width: 1200px;
    margin: 60px auto 0;
    background-color: #fff;

    .app-aside {
      width: 280px;
      position: fixed;
      top: 60px;
      bottom: 0;
      border-right: 1px solid $border-color-lighter;
    }

    .aside-scroll {
      height: 100%;

      .el-scrollbar__wrap {
        overflow: auto;
      }

      .el-scrollbar__view {
        height: 100%;
      }
    }
    .app-aside-inner {
      padding-bottom: 50px;
      padding-top: 20px;

      li.nav {
        height: 48px;
        line-height: 48px;
        cursor: pointer;

        &:hover {
          color: $color-primary;
        }

        .name {
          margin-right: 12px;
        }
      }

      li.active-nav {
        color: $color-primary;
      }
    }

    .app-page-warp {
      margin-left: 280px;
      padding: 30px;
    }
  }
}
</style>
