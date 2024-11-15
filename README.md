## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

目录结构
/app：包含应用程序的所有路由、组件和逻辑，
/app/lib：包含应用程序中使用的函数，例如可重用的实用函数和数据获取函数。
/app/ui：包含应用程序的所有 UI 组件，例如卡片、表格和表单。为了节省时间，我们为您预先设计了这些组件的样式。
/public：包含应用程序的所有静态资源，例如图像。
配置文件:如 next.config.js。大多数这些文件是在您使用 create-next-app 启动新项目时创建和预配置的。

样式（框架）
Tailwind 是一个 CSS 框架，允许您直接在 TSX 标记中快速编写实用程序类，从而加快开发过程。 例如，添加类“text-blue-500”会将 <h1> 文本变为蓝色
也可以使用css modeled   ui/home.model.css

字体图像
在 /app/ui/fonts.ts文件夹中导入lnter字体，最后，将字体添加到 /app/layout.tsx 中的 <body> 元素：

创建布局和页面
/app/dashboard/page.tsx
/app/dashboard/customers/page.tsx
/app/dashboard/invoices/page.tsx
/app/dashboard/layout.tsx 控制面板具有在多个页面之间共享的某种导航,可以使用特殊的 layout.tsx 文件创建在多个页面之间共享的 UI

页面导航
/app/ui/dashboard/nav-links.tsx



