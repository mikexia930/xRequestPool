import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue'

// 插件
const libraryConfig = defineConfig({
  build: {
    lib: {
      entry: 'packages/XRequestPool/src/index.ts',
      name: 'XRequestPool',
      formats: ['es', 'umd', 'cjs'],
      fileName: (format) => `xrequestpool.${format}.js`
    },
    rollupOptions: {
      external: [],
      output: {}
    },
    outDir: 'lib'
  },
  plugins: [dts()]
});

// demo 应用配置
const demoConfig = defineConfig({
  plugins: [
    vue(),
    // ...其他插件
  ],
  base: './', // 设置为相对路径
  build: {
    outDir: 'docs'
  }
});

// 根据环境变量确定使用哪个配置
export default ({ mode }) => {
  if (mode === 'library') {
    return libraryConfig;
  } else {
    return demoConfig;
  }
};
