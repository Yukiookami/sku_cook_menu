# 个人菜单 app

## 项目简介

主要用于记录个人的一些菜单，方便查看。

## 项目功能

- 菜单展示首页
- 菜单详情
- 菜单添加
- 菜单删除
- 菜单修改
- 菜单搜索
- 食材搜索

## 设计图

设计图[https://mastergo.com/files/team/155120033997778]

## 项目技术

### 前端

- Vue3
- vant4
- axios
- vue-router
- pinia
- tailwindcss
- capacitor 用于跨平台打包

### 后端

- node
- koa2
- mongodb

## 搭建与打包手顺

✅ 步骤一：创建 Vue3 + Vite 项目
打开终端执行：

```
npm create vite@latest my-app -- --template vue
cd my-app
npm install
```

✅ 步骤二：安装 Capacitor

在项目根目录执行：

```
npm install @capacitor/core @capacitor/cli
npx cap init
```

初始化时，Capacitor 会要求你输入：

- 应用名称（如：MyApp）
- 应用包名（如：com.example.myapp）
- Capacitor 将生成配置文件：
  `capacitor.config.json`

✅ 步骤三：配置 Vite 项目以支持 Capacitor（打包路径）

修改 vite.config.js：

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
plugins: [vue()],
base: '', // Capacitor 必须将 base 设置为空字符串，确保资源路径正确
})
```

---

✅ 步骤四：构建项目并添加平台（iOS/Android）

（1）构建前端项目：

```
npm run build
```

会生成一个 dist 文件夹。

（2）添加移动端平台：

🔸 Android 平台：

```
npm install @capacitor/android
npx cap add android
```

🔹 iOS 平台（MacOS）：

```
npm install @capacitor/ios
npx cap add ios
```

执行成功后，项目结构新增：

```
my-app
├── android（安卓项目）
├── ios（iOS 项目）
├── dist（前端打包内容）
└── capacitor.config.json
```

✅ 步骤五：同步代码并运行移动端项目

每次前端代码更新后，都需执行：

```
npm run build
npx cap sync
```

如果只是 JavaScript/HTML/CSS 改动，可使用：

```
npx cap copy
```

🔸 运行 Android 项目：

```
npx cap open android
```

在 Android Studio 中即可运行到模拟器或真机。

🔹 运行 iOS 项目（Mac）：

```
npx cap open ios
```

在 Xcode 中即可运行到模拟器或真机。

```bash
<VirtualHost *:80>
    ServerName your.domain.com

    # —— 1. 全局开启需要的模块指令 ——
    ProxyPreserveHost On
    SSLProxyEngine On
    SSLProxyVerify none
    SSLProxyCheckPeerCN off

    # —— 2. 专门给 /api/ 用 Location 块做反代 ——
    <Location /api/>
        # 如果你还想前端能拿到 CORS 头：
        Header always set Access-Control-Allow-Origin  "*"
        Header always set Access-Control-Allow-Methods "GET,POST,OPTIONS,PUT,DELETE"
        Header always set Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept, Authorization"

        # 真正的后端 API 地址
        ProxyPass        https://api.example.com/ retry=0 timeout=60
        ProxyPassReverse https://api.example.com/
    </Location>

    # —— 3. 静态文件根目录 ——
    DocumentRoot /home/youruser/apps/react-app/build
    <Directory /home/youruser/apps/react-app/build>
        Options +FollowSymLinks
        AllowOverride None
        Require all granted

        # 用 rewrite 排除 /api/ 其余都回到 index.html
        RewriteEngine On
        RewriteCond %{REQUEST_URI} !^/api/
        RewriteRule ^ /index.html [L]
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/react-app_error.log
    CustomLog ${APACHE_LOG_DIR}/react-app_access.log combined
</VirtualHost>
```
