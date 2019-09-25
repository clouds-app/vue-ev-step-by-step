module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage"
      }
    ]
  ],
  plugins: [
     //配置路由懒加载 添加这个
    '@babel/plugin-syntax-dynamic-import'
  ]
}
