# tsup

特别适合用于 **TypeScript库** 的打包，不需要进行额外的配置。

[tsup](https://tsup.egoist.dev/) 使用 [esbuild](https://github.com/evanw/esbuild) 进行打包，速度极快。  

它可以将 Node.js 原生支持的任何内容，如 `.js`, `.json`, `.mjs`，以及 TypeScript `.ts`, `.tsx` 进行打包。

## 安装

```bash
npm i tsup -D
# Or Yarn
yarn add tsup -D
# Or Pnpm
pnpm add tsup -D
```

## 使用配置文件

新建 `tsup.config.ts`，也可以是 `.js`, `.cjs`, `.json`

```js
// tsup.config.ts
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],  // 入口文件
  format: ['cjs', 'esm'], // 导出 commonjs 和 esmodules 格式的文件，若 package.json 的 type 是 module, 则 dist/index.js 是esm格式，否则是cjs格式
  sourcemap: true,  // 开启sourcemap
  dts: true,  // 输出声明文件，会为每一个输出格式输出一份声明文件
  clean: true // 清除上次打包
})


/*
// 如果需要通过 cli 标志来修改输出
export default defineConfig((options) => {
  return {}
})
*/

```

## 添加 `script` 指令

在 `package.json` 的 `scripts` 中添加 开发指令 和 打包指令

```json
{
  "scripts": {
    "dev": "tsup --watch",
    "build": "tsup"
  },
}
```

## 示例库

[vite-plugin-vue-css-module](https://github.com/HJinPeng/vite-plugin-vue-css-module/tree/master) 的 `master` 分支