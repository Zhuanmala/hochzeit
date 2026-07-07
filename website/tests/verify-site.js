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

assert(fs.existsSync(indexPath), "website/index.html should exist");
assert(fs.existsSync(cssPath), "website/styles.css should exist");

const html = read(indexPath);
const css = read(cssPath);

[
  "婚礼筹备进度",
  "2026-09-05",
  "2026-09-06",
  "婚车方案",
  "幻影",
  "库里南",
  "宾利飞驰",
  "男方用品",
  "女方用品",
  "科技表演",
  "AI 数字人",
  "DJI 无人机送戒指",
  "待确认事项",
].forEach((text) => {
  assert(html.includes(text), `index.html should include "${text}"`);
});

[
  "assets/car-phantom.jpg",
  "assets/car-cullinan.jpg",
  "assets/car-bentley-flying-spur.jpg",
  "assets/robot-price-list.jpg",
].forEach((asset) => {
  const assetPath = path.join(root, asset);
  assert(html.includes(asset), `index.html should reference ${asset}`);
  assert(fs.existsSync(assetPath), `${asset} should exist`);
});

assert(css.includes("@media"), "styles.css should include responsive rules");
assert(css.includes(".card"), "styles.css should define reusable card styling");

console.log("Static wedding progress site verification passed.");
