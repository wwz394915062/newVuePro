<template>
  <div class="navigation">
    <div>
      <el-menu
      :data="routerMenu"
      :collapse="foldFlag"
      :router="true"
      @close="handleClose"
      collapse-transition
      background-color="#385dae"
      active-text-color="#fff"
      text-color="#fff">
        <div v-if="routerMenu" v-for="item in routerMenu" :key="item.path">
          <div v-if="!item.children">
             <el-menu-item :index="item.path" :class="{'is-active': hasTrue}">
               <div class="homeNav">
                 <i class="el-icon-menu icon-sty"></i>
                 <span class="navRouterName">{{item.name}}</span>
               </div>
             </el-menu-item>
          </div>
          <div v-else>
            <el-submenu :index="item.path" popper-class="submenuClass">
              <template slot="title">
                <div class="">
                  <i class="el-icon-location icon-sty"></i>
                  <span slot="title" class="navRouterName">{{item.name}}</span>
                </div>
              </template>
              <el-menu-item-group>
                <div v-for="itemChild in item.children" :key="itemChild.path">
                  <el-menu-item :index="itemChild.path">{{itemChild.name}}</el-menu-item>
                </div>
              </el-menu-item-group>
            </el-submenu>
          </div>
        </div>
        <!-- <el-submenu index="3">
          <template slot="title">
            <div class="">
              <i class="el-icon-location"></i>
              <span slot="title">导航二</span>
            </div>
          </template>
          <div>
            <el-menu-item-group>
              <el-menu-item index="4-1">选项一</el-menu-item>
              <el-menu-item index="4-2">选项二</el-menu-item>
            </el-menu-item-group>
          </div>
          <el-submenu index="4-3">
            <span slot="title">选项三</span>
            <el-menu-item index="4-4">选项1</el-menu-item>
          </el-submenu>
        </el-submenu> -->
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      isCollapse: true,
      hasTrue: false,
      routerMenu: {
        type: Array
      }
    };
  },
  created() {
    this.routerMenu = this.$store.state.navigation.routes
    // console.log(this.routerMenu)
  },
  methods: {
    handleOpen (key, keyPath) {
        // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log('close')
    }
  },
  computed: {
    foldFlag () {
      console.log(this.$store.state.app.foldFlag)
      return this.$store.state.app.foldFlag
    }
  },
  components: {}
};
</script>

<style lang="scss">
  .navigation {
    .is-active {
      background-color: rgb(22, 6, 165) !important;
    }
    .el-menu {
      .el-submenu__title{
        display: flex;
      }
    }
    .el-menu-item-group__title {
      padding: 0 40px 0;
    }
    .el-menu {
      border: none;
    }
    .icon-sty {
      // margin-right: 10px;
    }
  }
  
</style>
<style scoped lang="scss">
  .homeNav {
    text-align: left;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
    min-height: 400px;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
