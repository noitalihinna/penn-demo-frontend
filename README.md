# Penn Demo Frontend

Vue3 + Element Plus 前端项目

## 技术栈

- **Vue 3** - 前端框架
- **Element Plus** - UI 组件库
- **Pinia** - 状态管理
- **Vue Router** - 路由管理
- **Axios** - HTTP 请求
- **Vite** - 构建工具

## 项目结构

```
penn-demo-frontend/
├── src/
│   ├── api/               # API 接口
│   │   ├── index.js      # Axios 配置
│   │   └── user.js       # 用户相关接口
│   ├── assets/           # 静态资源
│   │   └── styles/       # 样式文件
│   ├── components/       # 公共组件
│   ├── router/           # 路由配置
│   ├── store/            # Pinia 状态管理
│   ├── views/            # 页面组件
│   │   ├── Home.vue      # 首页
│   │   └── UserManagement.vue  # 用户管理
│   ├── App.vue           # 根组件
│   └── main.js           # 入口文件
├── .env                  # 开发环境配置
├── .env.production       # 生产环境配置
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

项目启动后访问：http://localhost:3000

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 功能特性

- ✅ 用户列表查询
- ✅ 用户分页
- ✅ 新增用户
- ✅ 编辑用户
- ✅ 删除用户
- ✅ 响应式布局

## 配套后端

后端项目地址：https://github.com/noitalihinna/penn-demo

## License

MIT
