import * as React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { d, mStyle } from "../temp";

interface Props {
  navigation: any;
}
interface SS {
  loaded: boolean;
  currentNews: any;
  url: any;
  loading: boolean;
  coords: any;
}
interface S {}

class Maps extends React.Component<Props, SS, S> {
  mapRef: any = null;
  RBSheet: any = null;
  constructor(props: any) {
    super(props);
    this.state = {
      loaded: false,
      currentNews: null,
      url: null,
      loading: true,
      coords: {
        latitude: 20.5937,
        longitude: 78.9629,
        latitudeDelta: 20,
        longitudeDelta: 20,
      },
    };
  }

  onRegionChange = () => {
    const coords = {
      latitude: 26.894094,
      longitude: 75.79277,
      latitudeDelta: 0.3,
      longitudeDelta: 0.3,
    };
    setTimeout(() => {
      this.mapRef && this.mapRef.animateToRegion(coords, 3000);
      setTimeout(() => {
        this.setState({ loaded: true });
      }, 3000);
    }, 1500);
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ loading: false }, () => this.onRegionChange());
    }, 500);
  };

  render(): React.ReactNode {
    if (this.state.loading) return null;
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          customMapStyle={mStyle}
          initialRegion={this.state.coords}
          // onRegionChange={(e) => console.log(e)}
          // onRegionChangeComplete={(e) => console.log(e)}
          ref={(ref) => (this.mapRef = ref)}
          style={styles.map}
          showsMyLocationButton={true}
          showsUserLocation={true}
          moveOnMarkerPress={false}
        >
          {this.state.loaded &&
            d.map((item: any, index: any) => {
              return (
                <Marker
                  key={index}
                  onPress={() => {
                    this.props.navigation.navigate("News", { data: item });
                  }}
                  coordinate={{
                    latitude: parseFloat(item.latitude),
                    longitude: parseFloat(item.longitude),
                  }}
                />
              );
            })}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Maps;
