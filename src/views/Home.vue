<template>
  <div class="home-container">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="stat-card">
          <template #header>
            <div class="card-header">
              <span>📊 统计数据</span>
            </div>
          </template>
          <div class="stat-content">
            <div class="stat-item">
              <el-icon size="40" color="#409EFF"><User /></el-icon>
              <div class="stat-info">
                <span class="stat-value">{{ userCount }}</span>
                <span class="stat-label">用户总数</span>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      
      <el-col :span="8">
        <el-card class="stat-card">
          <template #header>
            <div class="card-header">
              <span>🚀 系统状态</span>
            </div>
          </template>
          <div class="stat-content">
            <el-tag type="success">后端服务运行中</el-tag>
            <p style="margin-top: 10px; color: #909399;">
              访问地址: http://localhost:8080
            </p>
          </div>
        </el-card>
      </el-col>
      
      <el-col :span="8">
        <el-card class="stat-card">
          <template #header>
            <div class="card-header">
              <span>📋 快速操作</span>
            </div>
          </template>
          <div class="stat-content">
            <el-button type="primary" @click="$router.push('/users')">
              进入用户管理
            </el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    
    <el-card class="info-card" style="margin-top: 20px;">
      <template #header>
        <span>📖 项目说明</span>
      </template>
      <div class="info-content">
        <p><strong>后端技术栈：</strong>Spring Boot 3 + MyBatis-Plus + MySQL</p>
        <p><strong>前端技术栈：</strong>Vue 3 + Element Plus + Axios</p>
        <p><strong>项目仓库：</strong>https://github.com/noitalihinna/penn-demo</p>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getUserList } from '@/api/user'

const userCount = ref(0)

onMounted(async () => {
  try {
    const res = await getUserList()
    userCount.value = res.data?.length || 0
  } catch (e) {
    console.error('获取用户数据失败', e)
  }
})
</script>

<style lang="scss" scoped>
.home-container {
  .stat-card {
    .card-header {
      font-weight: bold;
    }
    
    .stat-content {
      display: flex;
      justify-content: center;
      align-items: center;
      
      .stat-item {
        display: flex;
        align-items: center;
        gap: 20px;
        
        .stat-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          
          .stat-value {
            font-size: 32px;
            font-weight: bold;
            color: #409EFF;
          }
          
          .stat-label {
            color: #909399;
            font-size: 14px;
          }
        }
      }
    }
  }
  
  .info-card {
    .info-content {
      p {
        margin: 8px 0;
        color: #606266;
      }
    }
  }
}
</style>
