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
      const parsed = matter(content);

      let finalPermalink = "";

      // 1. 处理索引页 README.md
      if (item.toLowerCase() === "readme.md") {
        const relativeDir = path.relative(targetDir, dir);
        finalPermalink = relativeDir
          ? `/law/${relativeDir.replace(/\\/g, "/")}/`
          : "/law/";
      }
      // 2. 处理普通法律条文页面
      else {
        const dateMatch = item.match(/(\d{8})/);
        const dateStr = dateMatch ? dateMatch[1] : "00000000";

        if (!dateCounter[dateStr]) {
          dateCounter[dateStr] = 1;
        } else {
          dateCounter[dateStr]++;
        }

        // 核心修改：绝对不带 .html
        finalPermalink = `/law/${dateStr}-${dateCounter[dateStr]}`;
      }

      // 强制覆盖旧的 permalink，确保全站统一
      parsed.data.permalink = finalPermalink;

      const newContent = matter.stringify(parsed.content, parsed.data);
      fs.writeFileSync(fullPath, newContent);
      console.log(`🧹 Overwritten: ${item} -> ${finalPermalink}`);
    }
  });
}

console.log("🚀 Starting to re-process ALL permalinks (Clean URL Mode)...");
processFiles(targetDir);
console.log("✨ Clean-up complete!");
