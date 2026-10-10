# DNF 攻略站 · 维护计划

## 一、目标站点结构

```
dnf/
├── index.html      # 首页（含「游戏试玩」入口卡片）
├── guides.html     # 新手指南（每日/每周清单 + 职业推荐表）
├── tools.html      # 实用工具（附魔速查 + 强化成本模拟器）
├── game.html       # 游戏试玩（单文件版，来源 ~/Downloads/dnf-单文件版.html）
├── css/main.css
├── js/main.js
├── docs/
│   └── MAINTENANCE.md   # 本文件
└── tests/          # 游戏自动化测试（Node vm 沙箱，不依赖浏览器）
```

> 部署 `game.html` 时同步做三件事：① 复制文件进仓库；② 首页加入口卡片；③ 顶部导航加「游戏试玩」链接。

## 二、日常更新流程

```bash
cd /Users/xwg/Documents/XwgProjects/dnf
# 1. 替换/修改游戏
cp ~/Downloads/dnf-单文件版.html game.html
# 2. 跑测试（见下）
node tests/game.test.js
# 3. 部署（push 后 GitHub 自动构建，约 1~2 分钟生效）
git add -A && git commit -m "更新说明" && git push
```

线上地址：https://dte2mdj.github.io/dnf/

## 三、测试方案

游戏逻辑用 Node `vm` 沙箱加载，不依赖浏览器，可反复跑回归：

- 冒烟测试：4 个职业各开一局，断言能正常开始游戏、无 JS 报错
- 行为测试：模拟 N 秒战斗，断言能造成击杀（防止职业/技能改挂）
- 注意：游戏内 `render()` 会消耗随机数种子流，测试里调不调 `render()` 会影响随机序列，对比结果时需保持一致

## 四、待办清单

- [ ] 查清狂战（berserk）在连续测试中 0 击杀的原因（疑似 RNG 状态残留）
- [ ] 击退效果：区分不同技能，不同技能触发不同击退力度/方向
- [ ] 验证「选择人物」对职业属性真实生效
- [ ] 部署 game.html，首页 + 导航加入口
