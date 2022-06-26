// In App.js in a new project

import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Maps from "./screens/Maps";
import News from "./screens/News";

const { width, height } = Dimensions.get("screen");

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageBackground
        source={require("./assets/onboarding.jpg")}
        style={{
          flex: 1,
          width: width,
          height: height,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Maps")}
          style={{
            backgroundColor: "white",
            marginTop: height * 0.6,
            paddingVertical: width * 0.02,
            paddingHorizontal: width * 0.028,
            borderRadius: width * 0.06,
          }}
        >
          <Text
            style={{
              fontSize: width * 0.06,
              color: "black",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="News" component={News} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// import React, {Component} from 'react';
// import MapView, {
//   PROVIDER_DEFAULT,
//   PROVIDER_GOOGLE,
//   Marker,
// } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
// import {
//   View,
//   Alert,
//   Text,
//   StyleSheet,
//   Dimensions,
//   Linking,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   SafeAreaView,
//   ActivityIndicator,
// } from 'react-native';
// import {WebView} from 'react-native-webview';
// import Geolocation from '@react-native-community/geolocation';
// // import {data} from './data.js';
// import {d} from './temp.js';
// import RBSheet from 'react-native-raw-bottom-sheet';
// const {width, height} = Dimensions.get('screen');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: width,
//     height: height,
//     alignSelf: 'center',
//   },
// });

// class App extends Component {
// mapRef = null;
// RBSheet = null;
// currentNews = null;
// constructor(props) {
//   super(props);
//   this.state = {
//     loaded: false,
//     currentNews: null,
//     url: null,
//     loading: false,
//     coords: {
//       latitude: 20.5937,
//       longitude: 78.9629,
//       latitudeDelta: 20,
//       longitudeDelta: 20,
//     },
//   };
// }

// onRegionChange = () => {
//   // const coords = {
//   //   latitude: 26.894094,
//   //   longitude: 75.79277,
//   //   latitudeDelta: 0.015,
//   //   longitudeDelta: 0.0121,
//   // };
//   // this.mapRef.animateToRegion(coords, 2000);
//   Geolocation.getCurrentPosition(
//     info => {
//       this.setState(
//         {
//           coords: {
//             latitude: info.coords.latitude,
//             longitude: info.coords.longitude,
//             latitudeDelta: 0.4,
//             longitudeDelta: 0.4,
//           },
//         },
//         () => {
//           this.mapRef.animateToRegion(this.state.coords, 3000);
//           setTimeout(() => {
//             this.setState({loaded: true});
//           }, 3000);
//         },
//       );
//     },
//     error => Alert.alert(error.message),
//     {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000},
//   );
// };

// componentDidMount = () => {
//   this.onRegionChange();
//   // this.RBSheet.open();
// };

//   render() {
//     return (
//       <View style={styles.container}>
// <MapView
//   onPress={() => this.setState({currentNews: null})}
//   zoomTapEnabled={false}
//   // zoomEnabled={false}
//   ref={ref => (this.mapRef = ref)}
//   style={styles.map}
//   showsMyLocationButton={true}
//   showsCompass={true}
//   moveOnMarkerPress={true}
//   onMarkerPress={() => this.setState({currentNews: this.currentNews})}
//   showsUserLocation={true}>
//           {this.state.loaded &&
//             d.splice(0, 10).map((item, index) => {
//               return (
// <Marker
//   key={index}
//   coordinate={{
//     latitude: parseFloat(item.latitude),
//     longitude: parseFloat(item.longitude),
//   }}
//   style={{}}>
//   <TouchableOpacity onPress={() => (this.currentNews = item)}>
//     <Image
//       source={require('./assests/map_marker.png')}
//       style={{
//         width: width * 0.08,
//         height: width * 0.08,
//         position: 'relative',
//         bottom: width * 0.04,
//       }}
//     />
//   </TouchableOpacity>
// </Marker>
//               );
//             })}
//         </MapView>
//         {this.state.currentNews && (
//           <View
//             style={{
//               position: 'absolute',
//               width: width * 0.9,
//               height: 'auto',
//               alignSelf: 'center',
//               bottom: height * 0.04,
//               backgroundColor: 'white',
//               borderRadius: width * 0.04,
//               padding: width * 0.04,
//               justifyContent: 'space-evenly',
//             }}>
//             <Text style={{fontSize: width * 0.04, fontWeight: '500'}}>
//               {this.state.currentNews?.title}
//             </Text>
//             <Text
//               style={{
//                 fontSize: width * 0.04,
//                 fontWeight: '500',
//                 marginTop: height * 0.01,
//               }}>
//               {this.state.currentNews?.matched_lne}
//             </Text>
//             <Text
//               style={{
//                 fontSize: width * 0.04,
//                 fontWeight: '500',
//                 marginTop: height * 0.01,
//               }}>
//               {this.state.currentNews?.summary}
//             </Text>
//             <Text
//               style={{
//                 fontSize: width * 0.04,
//                 fontWeight: '500',
//                 marginTop: height * 0.01,
//               }}
//               onPress={() => {
//                 this.setState(
//                   {
//                     url: this.state.currentNews?.link.replaceAll(' ', ''),
//                   },
//                   () => this.RBSheet && this.RBSheet.open(),
//                 );
//               }}>
//               {this.state.currentNews?.link.replaceAll(' ', '')}
//             </Text>
//             <Text
//               style={{
//                 fontSize: width * 0.04,
//                 fontWeight: '500',
//                 marginTop: height * 0.01,
//               }}>
//               {this.state.currentNews?.date}
//             </Text>
//           </View>
//         )}
//         <RBSheet
//           ref={ref => {
//             this.RBSheet = ref;
//           }}
//           // closeOnDragDown
//           closeOnPressMask
//           closeOnPressBack
//           onClose={() => this.setState({uri: null})}
//           height={height * 0.9}
//           openDuration={250}
//           customStyles={{
//             container: {
//               borderTopStartRadius: width * 0.04,
//               borderTopEndRadius: width * 0.04,
//             },
//           }}>
//           {this.state.loading && (
//             <ActivityIndicator
//               size={'large'}
//               color="green"
//               style={{alignSelf: 'center', marginTop: height * 0.4}}
//             />
//           )}
//           <WebView
//             bounces={false}
//             onError={() => this.setState({loading: false})}
//             onLoadEnd={() => this.setState({loading: false})}
//             onLoadStart={() => this.setState({loading: true})}
//             source={{
//               uri: this.state.url,
//             }}
//           />
//         </RBSheet>
//       </View>
//     );
//   }
// }

// export default App;

// {
//   /* <MapView
//         // provider={PROVIDER_GOOGLE}
//         ref={mapViewRef}
//         style={styles.map}
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}>
//         {items.map(item => {
//           return (
//             <Marker key={`test-${item.id}`} coordinate={item.coordinate} />
//           );
//         })}
//       </MapView> */
// }

// // loadingIndicatorColor="#666666"
// // loadingBackgroundColor="#eeeeee"
// // moveOnMarkerPress={true}
// // showsUserLocation={true}
// // showsCompass={true}
// // showsPointsOfInterest={true}
// // region={{
// //   latitude: 26.894,
// //   longitude: 75.792,
// //   latitudeDelta: 0.015,
// //   longitudeDelta: 0.0121,
// // }}

// // data.splice(0, 100).map((item, index) => {
// //   return (
// // <Marker
// //   key={index}
// //   coordinate={{
// //     latitude: parseFloat(item.latitude),
// //     longitude: parseFloat(item.longitude),
// //   }}
// //   style={{}}>
// //   <TouchableOpacity onPress={() => (this.currentNews = item)}>
// //     <Image
// //       source={require('./assests/map_marker.png')}
// //       style={{
// //         width: width * 0.08,
// //         height: width * 0.08,
// //         position: 'relative',
// //         bottom: width * 0.04,
// //       }}
// //     />
// //   </TouchableOpacity>
// // </Marker>
// //   );
// // })
