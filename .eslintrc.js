module.exports = {
  root: true, //提高性能
  env: {
    node: true, //支持require
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    // 用来自定义一些符合个人或者团队的规则
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    //如：
    "prefer-const": 0, //去除未重复定义，建议使用const的提示
    "@typescript-eslint/no-explicit-any": 0,
    "no-extra-boolean-cast": 0, //双！转换为布尔值
    semi: [2, "always"], //分号结尾
    eqeqeq: 1, //要求使用===
    "@typescript-eslint/no-var-requires": 0, //支持require // 构造函数首字母大写
    "new-cap": [
      2,
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    "no-const-assign": 2, //禁止修改const声明的变量
    "no-var": 2, //禁止使用var
    "no-dupe-args": 2, //禁止function中出现重名函数
    quotes: [1, "single"], //使用单引号
    "no-trailing-spaces": 2, //一行结束后面不要有空格
  },
};
