import React, { useEffect } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";

const YOUR_MAP_KEY = "03e3f2240df0d57896fc2a33e617c6c1";
const YOUR_SAFE_KEY = "3c3f7dbc9d87d07a57e193fb0b880c7e";

const MapComp = () => {
  let map = null;

  const initializeMap = async () => {
    (window as any)._AMapSecurityConfig = { securityJsCode: YOUR_SAFE_KEY };

    try {
      const AMap = await AMapLoader.load({
        key: YOUR_MAP_KEY,
        version: "2.0",
        plugins: ["AMap.Scale", "AMap.DistrictSearch", "AMap.ToolBar"],
      });

      map = new AMap.Map("container", {
        zoom: 5,
        center: [108.939645, 34.343207],
        viewMode: "2D",
        features: ["road", "point"],
        zooms: [3, 18],
        showIndoorMap: false,
        showBuildingBlock: false,
        showLabel: true,
        resizeEnable: true,
        expandZoomRange: true,
        zoomEnable: true,
        dragEnable: true,
        doubleClickZoom: true,
        keyboardEnable: true,
        touchZoom: true,
        scrollWheel: true,
        rotateEnable: false,
        pitchEnable: false,
      });

      const toolbar = new AMap.ToolBar();
      map.addControl(toolbar);

      const scale = new AMap.Scale();
      map.addControl(scale);

      const visitedProvinces = [
        "北京市",
        "上海市",
        "浙江省",
        "江苏省",
        "辽宁省",
        "安徽省",
        "福建省",
        "山东省",
        "河南省",
        "江西省",
        "四川省",
        "青海省",
        "甘肃省",
      ];

      const districtSearch = new AMap.DistrictSearch({
        level: "province",
        extensions: "all",
      });

      const searchWithRetry = (province, retries = 10) => {
        return new Promise<void>((resolve, reject) => {
          if (!districtSearch) {
            console.error("districtSearch 未初始化");
            reject(new Error("districtSearch 未初始化"));
            return;
          }

          let callbackExecuted = false;

          const searchCallback = (status, result) => {
            callbackExecuted = true;
            if (status === "complete" && result.districtList.length > 0) {
              const bounds = result.districtList[0].boundaries;
              if (bounds && bounds.length > 0) {
                bounds.forEach((boundary) => {
                  const polygon = new AMap.Polygon({
                    path: boundary,
                    strokeColor: "#FF33FF",
                    strokeWeight: 1,
                    fillOpacity: 0.5,
                    fillColor: "#1791fc",
                    zIndex: 50,
                    bubble: true,
                    cursor: "pointer",
                  });
                  map.add(polygon);
                });
              } else {
                console.warn(`未找到 ${province} 的边界数据`);
              }
              resolve();
            } else {
              if (retries > 0) {
                console.log(
                  `正在重试获取 ${province} 的数据，剩余重试次数: ${retries}`
                );
                setTimeout(() => searchWithRetry(province, retries - 1), 1000);
              } else {
                console.warn(`多次重试后仍无法获取 ${province} 的数据`);
              }
            }
          };

          districtSearch.search(province, searchCallback);

          // 如果在一定时间内回调没有执行，则重试
          setTimeout(() => {
            if (!callbackExecuted) {
              console.log(`回调未执行，正在重试获取 ${province} 的数据...`);
              if (retries > 0) {
                searchWithRetry(province, retries - 1);
              } else {
                console.log(`${province} 获取失败`);
              }
            }
          }, 1000); // 超时时间设为500毫秒
        });
      };

      const searchPromises = visitedProvinces.map((province) =>
        searchWithRetry(province)
      );

      Promise.all(searchPromises)
        .then(() => {
          console.log("所有省份数据加载成功。");
        })
        .catch((error) => {
          console.error("加载省份数据时出错:", error);
        });
    } catch (e) {
      console.error("AMapLoader 加载出错:", e);
    }
  };

  useEffect(() => {
    initializeMap();

    return () => {
      map?.destroy();
    };
  }, []);

  return <div id="container" style={{ height: "100%", width: "100%" }}></div>;
};

export default MapComp;
