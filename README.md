# DNF 攻略站

一个纯静态的多页面小站，通过 GitHub Pages 托管。

## 页面

- `index.html` — 首页
- `guides.html` — 新手指南
- `tools.html` — 实用工具（附魔速查 + 强化成本模拟器）
- `game/index.html` — **在线玩**（DNF 横版动作游戏，单文件零依赖）

## 在线玩

游戏是一个完全自包含的单 HTML 文件（无 CDN、无外链资源、无构建步骤），
直接把 `dnf-单文件版.html` 覆盖到 `game/index.html` 即可更新线上版本：

```bash
cp ~/Downloads/dnf-单文件版.html game/index.html
git add -A && git commit -m "更新游戏" && git push
```

## 本地预览

直接双击 `index.html`，或启动本地服务：

```bash
cd dnf
python3 -m http.server 8000
# 访问 http://localhost:8000
```

## 线上地址

- 站点首页：https://dte2mdj.github.io/dnf/
- 游戏入口：https://dte2mdj.github.io/dnf/game/
