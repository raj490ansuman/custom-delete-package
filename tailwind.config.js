module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
      extend: {
        colors: {
          primary: "#99CA29",
          "custom-gray": "#d9d9d9",
        },
        zIndex: {
          "-1": "-1",
        },
        scale: {
          flip: "-1",
        },
        lineHeight: {
          0: "0",
        },
        fontSize: {
          xxs: ".70rem",
        },
        height: {
          18: "4.5rem",
        },
      },
      fontFamily: {
        sans: [
          "Noto Sans JP",
          "游ゴシック",
          "游ゴシック体",
          "YuGothic",
          "Yu Gothic",
          "メイリオ",
          "Meiryo",
          "ＭＳ ゴシック",
          "MS Gothic",
          "HiraKakuProN-W3",
          "TakaoExゴシック",
          "TakaoExGothic",
          "MotoyaLCedar",
          "Droid Sans Japanese",
          "sans-serif",
        ],
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        secondary: "linen",
        dark: "#280000",
        line: "#06c755",
        notCompatible: "#e57373",
        cancelled: "#b0bec5",
        confirming: "#ffb74d",
        handling: "#64b5f6",
        completed: "#9bcc21",
      }),
      textColor: (theme) => ({
        ...theme("colors"),
        secondary: "#6E6E6E",
        dark: "#280000",
        notCompatible: "#ffffff",
        cancelled: "#ff7a45",
        confirming: "#40a9ff",
        handling: "#ffc53d",
        completed: "#9bcc21",
      }),
      borderColor: (theme) => ({
        ...theme("colors"),
        secondary: "linen",
        dark: "#280000",
        notCompatible: "#e57373",
        cancelled: "#b0bec5",
        confirming: "#ffb74d",
        handling: "#64b5f6",
        completed: "#9bcc21",
        "custom-gray": "#d9d9d9",
      }),
    },
    variants: {
      extend: {
        backgroundColor: ["active"],
        color: ["active"],
      },
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
    ],
    corePlugins: {
      fontFamily: false,
      preflight: false,
    },
    important: true,
  }
  