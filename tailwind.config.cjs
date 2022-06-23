const plugin = require("tailwindcss/plugin");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        playball: ["Playball", "cursive"],
        nautigal: ["The Nautigal", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        darkGray: "#1E1E1C",
        lightGray: "#27272A",
      },
    },
  },

  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
module.exports = config;
