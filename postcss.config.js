import autoprefixer from "autoprefixer";
import postcssNesting from "postcss-nesting";
import tailwindNesting from "tailwindcss/nesting/index.js";
import tailwindcss from "tailwindcss";

export default {
  plugins: [
    tailwindNesting(postcssNesting),
    tailwindcss(),
    autoprefixer(),
  ],
};
