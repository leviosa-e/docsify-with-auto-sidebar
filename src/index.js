const fs = require("fs");
const path = require("path");
const { program } = require("commander");

program
  .command("init")
  .argument("<dirname>")
  .action((dirname) => {
    // 定义新建博客项目的文件夹
    const dirPath = path.join(__dirname, dirname);
    // 新建项目文件夹
    fs.mkdirSync(dirPath);

    // 自动生成侧边栏的脚本源路径
    const autoGenerateSidebarScriptSourceFile = path.join(
      __dirname,
      "auto_generate_sidebar.js"
    );
    // 自动生成侧边栏的脚本目标路径
    const autoGenerateSidebarScriptTargetFile = path.join(
      dirPath,
      "auto_generate_sidebar.js"
    );
    // 复制脚本文件
    fs.copyFile(
      autoGenerateSidebarScriptSourceFile,
      autoGenerateSidebarScriptTargetFile,
      (err) => {
        if (err) {
          console.error(`复制文件失败: ${err.message}`);
        } else {
          console.log("文件复制成功");
        }
      }
    );
  });

program.parse();
