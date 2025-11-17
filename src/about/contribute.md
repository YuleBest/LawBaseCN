---
title: 贡献指南
icon: fluent:people-community-24-regular
---

维护本项目是一项很巨大的工作，我们欢迎您的贡献！

## 须知

### 法律分类目录

下面是本站的法律分类目录名称，及其对应的意义：

| 目录名称           | 意义               |
| ------------------ | ------------------ |
| `constitution/`    | 宪法系列           |
| `min-fa-shang-fa/` | 民法商法           |
| `xing-zheng/`      | 行政法             |
| `jing-ji/`         | 经济法             |
| `xing-fa/`         | 刑法               |
| `ceng-xu-fa/`      | 诉讼与非诉讼程序法 |

### 法律条目文件格式

1. 法律条目文件的格式是 Markdown，后缀名为 `.md`（小写）

2. 法律条目文件遵循以下命名规则：

   - 文件名由全小写字母和短横线 `-`、下划线 `_` 组成

   - 文件名不能包含空格或其他特殊字符

   - 文件名不能以短横线 `-`、下划线 `_` 开头或结尾

   - 文件名是以法律名称的拼音（免读音）来命名，每个字间使用短横线 `-` 连接
     - 若名称中出现“中华人民共和国”，以英文 "china" 代替，且后需使用下划线 `_` 连接其他部分。例如：“中华人民共和国劳动法”应命名为`china_lao-dong-fa`
     - 若名称中出现省、市、县、自治区、特别行政区等行政区划名称，以对应的英文名称代替，且后需使用下划线 `_` 连接其他部分。例如：“西安市节约用水条例”应命名为`xian_jie-yue-yong-shui-tiao-li`

## 新增条目

::: tip

至少需要：

- GitHub 账号

- 可访问 GitHub 的网络环境

:::

### Fork 项目

1. 访问本项目的 GitHub 页面：[https://github.com/YuleBest/LawBaseCN](https://github.com/HeWenJie/LawBaseCN)

2. 点击页面右上角的 "Fork" 按钮，将本项目 Fork 到您的 GitHub 账号下

您也可以使用此网页链接完成以上过程：[https://github.com/YuleBest/LawBaseCN/fork](https://github.com/YuleBest/LawBaseCN/fork)

### 新增文件

3. 您需要访问**您自己的 GitHub 账号**下名字为 `LawBaseCN` 的项目页面：链接为 `https://github.com/您的GitHub账号/LawBaseCN`

4. 在文件区域进入 `src/law/` 目录，这里是法律条目存放的目录

5. 进入您需要新增的[法律分类目录](#法律分类目录)

6. 点击 `Add file` 按钮

   - 如果您已经在本地准备好法律条目文件，直接点击 `Upload files` 按钮，选择您的文件，填写文件描述，点击 `Commit changes` 按钮

   - 如果您没有在本地准备好法律条目文件，点击 `Create new file` 按钮，填写文件路径和文件名，填写文件内容，填写文件描述，点击 `Commit changes` 按钮

   - 关于法律文件的格式，请查看[法律条目文件格式](#法律条目文件格式)，或者您也可以参考已有的法律条目文件

### 提交更改

7. 提交 Pull Request

   1. 访问您自己的 GitHub 账号下名字为 `LawBaseCN` 的项目页面：链接为 `https://github.com/您的GitHub账号/LawBaseCN`

   2. 点击页面右上角的 "New pull request" 按钮

   3. 填写 Pull Request 标题和描述，点击 "Create pull request" 按钮

   4. 等待项目维护者审核和合并您的 Pull Request，待项目维护者确认合并后，您的新增条目就会出现在本项目中了

## 修改条目

::: tip

至少需要：

- GitHub 账号

- 可访问 GitHub 的网络环境

:::

如果您发现了页面中的一些错误，并且想修复它们，您可以按照以下步骤进行操作：

1. 打开您需要修改的法律条目页面

2. 滑动至页面最底部，点击“编辑此页”按钮

3. 您会跳转至 GitHub，您会被要求先 Fork 本项目到您的 GitHub 账号下，点击 "Fork this repository" 按钮

4. 等待页面自动跳转后，修改页面内容，填写修改描述，点击 "Commit changes" 按钮

5. 提交 Pull Request，等待项目维护者审核和合并您的 Pull Request，待项目维护者确认合并后，您的修改就会出现在本项目中了
