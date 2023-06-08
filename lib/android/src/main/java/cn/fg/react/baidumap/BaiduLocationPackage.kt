package cn.fg.react.baidumap

import cn.fg.react.baidumap.modules.BaiduMapLocationModule
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager

class BaiduLocationPackage : ReactPackage {
    override fun createNativeModules(context: ReactApplicationContext): List<NativeModule> {
        return listOf(
                BaiduMapLocationModule(context),
        )
    }

    override fun createViewManagers(context: ReactApplicationContext): List<ViewManager<*, *>> {
        return listOf(
               
        )
    }
}
