# 播客网站

使用 Astro 和 Tailwind CSS 构建的播客网站。支持音频播放、实时进度跟踪和可点击的文字稿。

[English](README.md) | [中文](README-CN.md)

## 功能特性

- **播客卡片**: 首页以卡片形式展示播客标题和摘要
- **多音轨支持**: 每个播客支持多个音轨（对话、词汇、复习）
- **音频播放器**: 自定义播放器，支持播放/暂停、进度条、音量控制
- **可点击文字稿**: 点击任意时间戳跳转到对应音频位置
- **实时高亮**: 播放时自动高亮当前文字稿片段
- **智能滚动**: 当前片段到达底部时自动滚动文字稿
- **进度记忆**: 音频进度保存到 localStorage，刷新页面后恢复
- **标签记忆**: 记住选中的音轨标签（dg/pb/rv），刷新页面后恢复
- **悬浮播放器**: 滚动时播放器固定在页面底部
- **搜索功能**: 按标题和词汇摘要搜索播客
- **情感颜色**: 文字稿片段按情感标记颜色（中性、开心、悲伤、愤怒）
- **自动播放下一音轨**: 当前音轨结束后自动播放下一个（dg → pb → rv）
- **自动播放下一集**: 最后一个音轨（rv）结束后，跳转到下一集并自动播放

## 项目结构

```
├── public/
│   └── resources/          # 播客数据（每个音轨包含 MP3 + JSON）
│       ├── 60/
│       │   ├── englishpod_C0060dg.mp3
│       │   ├── englishpod_C0060dg.json
│       │   └── ...
│       └── 78/
│           └── ...
├── src/
│   ├── components/
│   │   ├── AudioPlayer.astro
│   │   ├── PodcastCard.astro
│   │   └── TranscriptSegment.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── lib/
│   │   └── podcasts.ts      # 数据加载工具
│   ├── pages/
│   │   ├── index.astro      # 首页
│   │   └── podcast/
│   │       └── [id].astro   # 播客详情页
│   ├── types/
│   │   └── podcast.ts       # TypeScript 接口定义
│   └── styles/
│       └── global.css
└── specs/                   # 项目规格说明
```

## 数据格式

每个播客文件夹包含 MP3 文件和对应的 JSON 文字稿：

```json
{
  "summary": "播客内容描述",
  "segments": [
    {
      "speaker": "Speaker 1",
      "timestamp": "00:08",
      "content": "文字稿内容...",
      "language": "English",
      "language_code": "en",
      "translation": null,
      "emotion": "neutral"
    }
  ]
}
```

### 音轨类型

| 后缀 | 标签 | 说明 |
|:-----|:-----|:-----|
| `dg` | Dialogue | 主要对话内容 |
| `pb` | Vocabulary | 词汇讲解 |
| `rv` | Review | 复习总结 |

## 快速开始

### 环境要求

- Node.js 18+
- Yarn 或 npm

### 安装

```bash
# 安装依赖
yarn install

# 启动开发服务器
yarn dev
```

打开 http://localhost:4321 查看网站。

### 构建

```bash
# 生产环境构建
yarn build

# 预览生产构建
yarn preview
```

## 命令

| 命令 | 说明 |
|:-----|:-----|
| `yarn install` | 安装依赖 |
| `yarn dev` | 启动开发服务器 `localhost:4321` |
| `yarn build` | 构建生产版本到 `./dist/` |
| `yarn preview` | 本地预览构建结果 |

## 技术栈

- [Astro](https://astro.build) - 静态网站生成器
- [Tailwind CSS](https://tailwindcss.com) - 原子化 CSS 框架
- [TypeScript](https://www.typescriptlang.org) - 类型安全

## 许可证

MIT
