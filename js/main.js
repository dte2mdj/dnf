// 移动端菜单开关
(function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }
})();

// 强化成本模拟器
// 规则（示例）：从 cur 强化到 target，每次尝试成功率 90% - level*4%，
// 失败不掉级；期望尝试次数 = 1 / 成功率。
(function () {
  var btn = document.getElementById("calcBtn");
  if (!btn) return;

  btn.addEventListener("click", function () {
    var cur = parseInt(document.getElementById("curLevel").value, 10) || 0;
    var target = parseInt(document.getElementById("targetLevel").value, 10) || 0;
    var cost = parseFloat(document.getElementById("cost").value) || 0;
    var out = document.getElementById("calcResult");

    if (target <= cur) {
      out.textContent = "目标等级需要大于当前等级哦";
      return;
    }

    var expectedCost = 0;
    var detail = [];
    for (var lv = cur; lv < target; lv++) {
      var rate = 0.9 - lv * 0.04;
      if (rate < 0.1) rate = 0.1;
      var tries = 1 / rate;
      expectedCost += tries * cost;
      detail.push(lv + 1 + "→" + Math.round(rate * 100) + "%");
    }

    out.textContent =
      "预计消耗约 " + Math.round(expectedCost) + " 万金币（成功率：" + detail.join("，") + "）";
  });
})();
