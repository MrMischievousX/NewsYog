import * as React from "react";
import { Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { enableFreeze } from "react-native-screens";
import { onBoarding } from "./assets";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Maps, Onboarding, News } from "./screens";
import { StatusBar } from "react-native";

enableFreeze(true);

function cacheImages(images: any[]) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts: any[]) {
  return fonts.map((font) => Font.loadAsync(font));
}

const Stack = createNativeStackNavigator();

function App() {
  const _loadAssetsAsync = async () => {
    await SplashScreen.preventAutoHideAsync();
    const imageAssets = cacheImages([onBoarding]);
    const fontAssets = cacheFonts([]);
    await Promise.all([...imageAssets, ...fontAssets]);
    SplashScreen.hideAsync();
  };

  React.useEffect(() => {
    _loadAssetsAsync();
    return () => {};
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="News" component={News} />
        </Stack.Group>
      </Stack.Navigator>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={"transparent"}
      />
    </NavigationContainer>
  );
}

export default App;
