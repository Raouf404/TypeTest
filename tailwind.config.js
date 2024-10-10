export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
      cutive: ['"Cutive Mono"', "monospace"],
    },
    colors: {
      beige: {
        DEFAULT: "#FAF7F0",
        hover: "#E4D8D1",
        active: "#D3CFC7",
      },
      brown: {
        DEFAULT: "#B17457",
        hover: "#A15F44",
        active: "#8C4D34",
      },
      taupe: "#D8D2C2",
      darkGray: "#4A4947",
      darkGray75: "rgba(74, 73, 71, 0.75)",
    },
    boxShadow: {
      custom:
        "0px 0px 4px 0px rgba(0, 0, 0, 0.04), 0px 4px 8px 0px rgba(0, 0, 0, 0.06)",
    },
  },
};
export const plugins = [];
