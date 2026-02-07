<template>
  <el-config-provider :locale="locale">
    <div class="app-container">
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="220px" class="sidebar">
          <div class="logo">
            <h1>🎯 Penn Demo</h1>
          </div>
          <el-menu
            :default-active="activeMenu"
            router
            background-color="#304156"
            text-color="#bfcbd9"
            active-text-color="#409EFF"
          >
            <el-menu-item index="/">
              <el-icon><HomeFilled /></el-icon>
              <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/users">
              <el-icon><User /></el-icon>
              <span>用户管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <!-- 主内容区 -->
        <el-container>
          <el-header class="header">
            <div class="header-right">
              <el-tag type="success">前端已连接后端</el-tag>
            </div>
          </el-header>
          
          <el-main class="main-content">
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </el-config-provider>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const locale = zhCn
const route = useRoute()

const activeMenu = computed(() => route.path)
</script>

<style lang="scss">
.app-container {
  height: 100vh;
  
  .sidebar {
    background-color: #304156;
    
    .logo {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      h1 {
        color: #fff;
        font-size: 18px;
        margin: 0;
      }
    }
    
    .el-menu {
      border-right: none;
    }
  }
  
  .header {
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
  }
  
  .main-content {
    background: #f0f2f5;
    padding: 20px;
  }
}
</style>
