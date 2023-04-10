const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@components": path.resolve(__dirname, "src/components"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routers": path.resolve(__dirname, "src/routers"),
      "@services": path.resolve(__dirname, "src/services"),
      "@store": path.resolve(__dirname, "src/store"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
};
