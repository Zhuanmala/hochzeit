const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "index.html");
const cssPath = path.join(root, "styles.css");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function countOccurrences(source, text) {
  return source.split(text).length - 1;
}

assert(fs.existsSync(indexPath), "website/index.html should exist");
assert(fs.existsSync(cssPath), "website/styles.css should exist");

const html = read(indexPath);
const css = read(cssPath);

[
  "婚礼筹备进度",
  "2026-09-05",
  "2026-09-06",
  "婚车方案",
  "黑色古斯特 + 5 辆黑色宾利",
  "黑色古斯特 + 5 辆黑色帕拉梅拉",
  "黑色古斯特 + 5 辆黑色奔驰 S",
  "古斯特 3000 元/天",
  "宾利 2500 元/天",
  "帕拉梅拉 2500 元/天",
  "奔驰 S 1000 元/天",
  "15500 元/天",
  "8000 元/天",
  "AI 生成效果图",
  "男方用品",
  "女方用品",
  "科技表演",
  "AI 数字人",
  "DJI 无人机送戒指",
  "人员与服装",
  "女方主持人已确认",
  "玖聆｜龙毅 & 吉祥国风",
  "玖聆龙毅",
  "ly8427****65",
  "化妆已确认",
  "婚纱已确认",
  "男方主持人选择武利平",
  "待预约回复",
  "武利平",
  "国家一级演员",
  "西服已定制",
  "8 月初试穿",
  "待确认事项",
].forEach((text) => {
  assert(html.includes(text), `index.html should include "${text}"`);
});

[
  "理想组合",
  "白色库里南",
  "小红书商家幻影",
  "阿斯顿马丁 DBX",
  "暂未找到车源",
].forEach((text) => {
  assert(!html.includes(text), `index.html should remove old car content "${text}"`);
});

[
  "assets/car-combo-ghost-bentley.png",
  "assets/car-combo-ghost-panamera.png",
  "assets/car-combo-ghost-mercedes-s.png",
  "assets/robot-price-list.jpg",
].forEach((asset) => {
  const assetPath = path.join(root, asset);
  assert(html.includes(asset), `index.html should reference ${asset}`);
  assert(fs.existsSync(assetPath), `${asset} should exist`);
});

assert(css.includes("@media"), "styles.css should include responsive rules");
assert(css.includes(".card"), "styles.css should define reusable card styling");
assert(
  countOccurrences(html, "15500 元/天") >= 2,
  "index.html should show 15500 元/天 for both Bentley and Panamera options",
);

console.log("Static wedding progress site verification passed.");
