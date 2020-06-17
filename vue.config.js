module.exports = {
  devServer: {
    https: true,
    public: "https://localhost:8080/",
  },
  pwa: {
    themeColor: manifestJSON.theme_color,
    name: manifestJSON.short_name,
    msTileColor: manifestJSON.background_color,
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "./src/service-worker.js"
    }
  }
};
