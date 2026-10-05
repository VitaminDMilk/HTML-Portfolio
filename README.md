# Wei (David) Dai — Portfolio

面向工程岗位招聘的静态作品集：原生 HTML、CSS、JavaScript，无需构建或安装依赖。内容依据 `Codex_Personal_Website_Content_Brief.txt` 更新，支持完整中英文、三种主题、响应式布局与项目媒体展示。

## 本地预览与部署

当前完整源码已经位于 `C:\Users\david\Desktop\HTML-Portfolio`，直接在这个 Git 仓库内维护，无需下载、解压或复制替换。直接打开 `index.html` 可预览，也可以使用本地静态服务器。网站运行需要以下文件：

- `index.html`
- `style.css`
- `script.js`
- `content.js`（新增，存放中英文内容和媒体配置）
- `petal.png`（沿用原文件）
- `demos/vdm-ledger/`（Ledger 免登录交互演示的完整目录）

线上地址：[Wei (David) Dai — Portfolio](https://vitamindmilk.github.io/HTML-Portfolio/)。GitHub Pages 已配置从 `main` 分支根目录发布；提交并推送到该分支会触发站点更新。部署后确认 Pages 构建成功，以及线上 HTML、CSS、JavaScript 和图片与本地源码一致。

旧会话使用的 `Apply-Portfolio.ps1` 不在当前仓库中，也不再需要。

## 内容编辑

`content.js` 是内容源；`en` 与 `zh` 的结构相同。保留实际公司、日期、职位与项目状态，不将计划写成已完成成果。中文名字沿用原网站“戴维”，主标题保留英文姓名以便招聘者识别。`index.html` 也保留了完整英文静态内容，禁用 JavaScript 时仍能浏览；以后修改内容时，同时更新对应的英文静态内容。

- COSCO 放在经历首位，其余经历按时间倒序排列。
- PFW 写作计算机工程本科课程学习，避免暗示已在 PFW 获得学位。
- `15,000+` 表示所服务的校园群体，不表示亲自解决了 15,000 个工单。
- COSCO 的生产状态依据本次说明文件；如果实际状态有变化，应同步更新中英文。
- LinkedIn 留待之后；项目仓库与 demo 只填写已确认且适合访客访问的真实地址。原有 GitHub、邮箱、美国电话、导航锚点保留。
- 不显示旧 TOEFL 分数；兴趣移到页脚折叠区域。

## 给项目添加真实截图、视频和 demo

每个项目使用一个稳定 ID：`ai-workspace`、`vdm-ledger`、`smart-locker`。

Ledger 的免登录交互 demo 已上线：[打开演示](https://vdm-ledger.vercel.app/demo)。项目卡片的“在线演示”直接打开此网址；仓库中的 `demos/vdm-ledger/index.html` 保留为本地预览副本。它根据 Ledger 的实际源码和原有模拟数据集制作，展示仪表盘、交易筛选、分类/备注编辑、信用卡还款、月度报表以及 CSV 下载。中英文、日间/夜间主题和移动端均可使用。数据账期固定为 2026 年 6–8 月，不代表用户真实财务数据；账户名和尾号已替换为明确的模拟标签。编辑仅在当前标签页内生效，刷新或“重置演示”恢复原始数据。

demo 是可运行的功能子集，不是完整生产应用。它不调用银行、Plaid、Supabase 或生产 API。下载为真实 CSV 文件，可用 Excel 打开；没有把 CSV 伪装成 XLSX。原应用 `https://vdm-ledger.vercel.app/dashboard` 保留在 demo 页底部，标注仅限所有者登录。Ledger 本机仓库为私有仓库，未作为公开代码入口展示。2026 年 10 月 5 日已将同一演示加入 Ledger 私有仓库，提交 `92c838f` 并推送，部署至原有 Vercel 项目的 `/demo`。匿名访问已验证，原 `/dashboard` 和财务 API 继续要求身份认证。作品集卡片通过此公开地址连接演示，Ledger 页面的返回链接指向现有 GitHub Pages 作品集网址。

完整 demo 文件位于 `demos/vdm-ledger/`，无需安装依赖或构建。`data.js` 为已核实的模拟数据，`model.js` 为统计和导出规则，`demo.js` 为界面交互，`demo.css` 为样式，`ledger-mark.png` 沿用原项目标识。自动化计算检查可在仓库根目录运行 `node --test tests/ledger-demo.test.cjs`。

1. 在仓库中新建 `assets/projects/<项目 ID>/`。
2. 放入实际图片或视频。
3. 在 `content.js` 顶部对应的 `PORTFOLIO_CONFIG.projects` 项中填写真实 URL 与媒体路径。

例如，在已经放入以下两个文件后，可以把 `vdm-ledger` 的配置改为：

```javascript
'vdm-ledger': {
  github: '', // 填写真实的公开仓库 URL；没有就保持空白。
  demo: '',   // 填写真实 demo URL；没有就保持空白。
  media: [
    {
      type: 'image',
      src: 'assets/projects/vdm-ledger/dashboard.webp',
      alt: { en: 'Financial dashboard with synthetic demo data', zh: '使用模拟演示数据的财务仪表盘' },
      caption: { en: 'Dashboard overview', zh: '仪表盘概览' }
    },
    {
      type: 'video',
      src: 'assets/projects/vdm-ledger/walkthrough.mp4',
      alt: { en: 'Transaction syncing and reporting walkthrough', zh: '交易同步与报表功能演示' },
      caption: { en: 'Application walkthrough', zh: '应用操作演示' }
    }
  ]
}
```

首个媒体作为项目封面。点击封面或媒体按钮打开弹窗，支持翻页、视频播放、左右方向键与 Escape 关闭。已经到达首项或末项时，继续按方向键会保留当前媒体，不会重新加载或打断视频。未填写链接或媒体时，对应入口不显示；默认封面是项目主题排版，不是虚构产品截图。

路径不要以 `/` 开头，否则在 `github.io/HTML-Portfolio/` 下容易定位到错误目录。视频使用浏览器支持的 MP4（H.264）或 WebM；图片优先 WebP/JPEG，建议宽度约 1600px。图片和视频保持适当体积，移动端更容易打开。

### 各项目推荐展示材料

| 项目 | 图片 | 视频 / demo |
| --- | --- | --- |
| VDM Ledger（你提到的 Pocket Ledger） | 使用模拟数据的真实界面截图 | 已接入免登录交互 demo；之后可补 20–40 秒操作视频 |
| AI Workspace | 真实 Qt 界面、检索结果、测试运行结果 | 文档导入 → 检索 → 结果展示的短视频；界面未实现时不要用设计稿假装成品 |
| Personal Smart Locker | 实物总览、键盘与舵机连接 | 正确 PIN 解锁、错误 PIN 保持上锁、断电保存密码的验证视频 |

Ledger 展示使用模拟账户和交易数据。不要在公开截图中露出真实余额、账户信息、访问令牌或 API 密钥。个人作品集仍部署在 GitHub Pages；Ledger 应用继续使用其现有 Vercel 部署，作品集链接过去即可。

## 简历

原代码链接到不存在的 `resume.pdf`。添加实际 PDF 到仓库根目录后，将配置设为：

```javascript
resumeHref: 'resume.pdf'
```

该字段为空时不显示下载按钮，避免给招聘者一个失效链接。

## 网址建议

当前网址可以继续使用，内容质量比网址长短更重要。如果想免费缩短，GitHub 的用户主页仓库名应为 `VitaminDMilk.github.io`，对应 `https://vitamindmilk.github.io/`。这一规则已对照 [GitHub Pages 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) 核实。已有用户主页时不要覆盖；迁移前保留旧站入口，避免简历链接失效。

以姓名命名的自有域名更适合长期使用，但本次没有查询可用性、购买域名、重命名仓库或修改 DNS。

## 实现与验证

无 ScrollReveal 或 Google Fonts 网络依赖。主题与语言偏好保存在浏览器；存储受限时仍可切换。媒体弹窗使用原生 `dialog`，提供键盘操作与焦点返回。

2026 年 10 月 5 日恢复了原网站的动态背景：日间 80 个蓝色漂浮气泡、夜间 200 个闪烁星点、樱花主题 100 个使用原 `petal.png` 的旋转飘落花瓣，并恢复三种原版渐变底色。画布位于页面底色之上、正文之下，避免被底色遮挡。

右上角 `Ⅱ / ▶` 按钮控制暂停与播放。默认遵循系统“减少动态效果”设置；暂停时保留当前背景画面，继续播放不会重新随机摆放粒子。点击播放可主动开启动画，该选择会保存。页面隐藏时暂停动画，重新显示后从原画面继续；切换主题或调整窗口尺寸时重新建立对应背景。使用一张共享花瓣图片并限制像素比例，避免重复加载和不必要的渲染负担。

新增首页分段入场、内容滚动渐显、技术面板浮动、项目封面扫描纹理与圆环、鼠标光晕和轻微立体视差、按钮扫光，以及顶部阅读进度和当前导航标记。桌面鼠标提供卡片交互，手机保持正常触摸操作。右上角开关同时控制背景和新增动画；系统“减少动态效果”会关闭新增效果，正文不会因停用动画或缺少 JavaScript 而隐藏。

实际验证结果见 `VALIDATION.md`。作品集在桌面原仓库中维护，通过现有 GitHub Pages 配置发布，网址保留不变。Ledger 仓库的公开 demo 已单独提交、推送并部署。
