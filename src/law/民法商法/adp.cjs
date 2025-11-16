const fs = require("fs");

function convertMdTitles(text) {
  const lines = text.split(/\r?\n/);

  const num = "[0-9一二三四五六七八九十百千万]+"; // 更准确的数字匹配

  const patterns = [
    { regex: new RegExp(`^第(${num})分编`), replace: (m) => `### ${m}` },
    { regex: new RegExp(`^第(${num})编`), replace: (m) => `## ${m}` },
    { regex: new RegExp(`^第(${num})章`), replace: (m) => `#### ${m}` },
    { regex: new RegExp(`^第(${num})节`), replace: (m) => `##### ${m}` },
  ];

  return lines
    .map((line) => {
      for (const { regex, replace } of patterns) {
        if (regex.test(line)) {
          return line.replace(regex, replace);
        }
      }
      return line;
    })
    .join("\n");
}

if (process.argv.length < 4) {
  console.log("用法: adp.cjs 输入.md 输出.md");
  process.exit(1);
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];

const content = fs.readFileSync(inputFile, "utf-8");
const result = convertMdTitles(content);
fs.writeFileSync(outputFile, result, "utf-8");

console.log("处理完成 ✔️");
