import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const targetDir = "./src/law";
const dateCounter: Record<string, number> = {};

function processFiles(dir: string) {
  if (!fs.existsSync(dir)) return;

  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);

    if (fs.statSync(fullPath).isDirectory()) {
      processFiles(fullPath);
    } else if (item.endsWith(".md")) {
      const content = fs.readFileSync(fullPath, "utf8");

      // gray-matter 处理
      const parsed = matter(content);

      // 如果已经有 permalink 了，跳过，保证 ID 的永久性
      if (parsed.data.permalink) return;

      // 从文件名提取日期，假设格式为 _20181229.md
      const dateMatch = item.match(/(\d{8})/);
      const dateStr = dateMatch ? dateMatch[1] : "00000000";

      if (!dateCounter[dateStr]) {
        dateCounter[dateStr] = 1;
      } else {
        dateCounter[dateStr]++;
      }

      // 注入新属性
      parsed.data.permalink = `/law/${dateStr}-${dateCounter[dateStr]}.html`;

      // 写回文件
      const newContent = matter.stringify(parsed.content, parsed.data);
      fs.writeFileSync(fullPath, newContent);
      console.log(`✅ Updated: ${item} -> ${parsed.data.permalink}`);
    }
  });
}

console.log("🚀 Starting to inject permalinks...");
processFiles(targetDir);
console.log("✨ All done!");
