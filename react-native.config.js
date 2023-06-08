module.exports = {
  dependency: {
    platforms: {
      ios: { project: "lib/ios/react-native-baidumap-location-fg.podspec" },
      android: { sourceDir: "lib/android",
        packageImportPath:
            "import cn.fg.react.baidumap.BaiduLocationPackage;",
        packageInstance: "new BaiduLocationPackage()",}
    }
  },
  dependencies: {
    "react-native-baidumap-location-fg": {
      root: __dirname,
      platforms: {
        ios: { podspecPath: __dirname + "/lib/ios/react-native-baidumap-location-fg.podspec" },
      }
    }
  }
};
