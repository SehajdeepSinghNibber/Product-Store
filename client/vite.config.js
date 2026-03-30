export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://product-store-1z2y.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});