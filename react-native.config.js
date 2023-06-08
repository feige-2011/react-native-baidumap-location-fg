module.exports = {
  dependency: {
    platforms: {
      ios: { project: "ios/RCTBaiduLocation.xcodeproj" },
      android: { sourceDir: "android",
        packageImportPath:
            "import com.example.rctbaidulocation.baidumap.BaiduLocationPackage;",
        packageInstance: "new BaiduLocationPackage()",}
    }
  },
  dependencies: {
    "react-native-baidumap-location-fg": {
      root: __dirname,
      platforms: {
        ios: { podspecPath: __dirname + "/ios/RCTBaiduLocation.xcodeproj" },
      }
    }
  }
};
