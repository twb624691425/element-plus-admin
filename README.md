### 新建项目
1. yarn create vite my-vue-app --template vue
2. 


### 运行项目
1. yarn


### 协同规范
1. 统一使用yarn, 禁用npm 
-- 安装依赖 "use-yarn": "^2.4.0",
-- 在package.json中修改script  "preinstall": "use-yarn || ( npm install --no-scripts --no-save use-yarn && use-yarn )"