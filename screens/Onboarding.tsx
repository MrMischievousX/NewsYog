import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { height, scale, width } from "../constants/Layout";
import { onBoarding } from "../assets";

function Onboarding({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={onBoarding}
        style={styles.imgBackground}
        resizeMode="cover"
      >
        <LinearGradient
          colors={[
            "rgba(220, 51, 81,0.6)",
            "rgba(220, 51, 81,0.4)",
            "rgba(220, 51, 81,0.2)",
            "rgba(0, 0, 0,0.6)",
            "rgba(0, 0, 0,0.8)",
            "rgba(0, 0, 0,1)",
          ]}
          style={{ flex: 1 }}
        >
          <View style={styles.main}>
            <Text style={styles.mainText}>Welcome to NewsYog</Text>
            <Text style={styles.subText}>
              NewsYog is a news app which focuses on showing news as per users
              location.
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Maps")}
              style={styles.btn}
            >
              <Text
                style={{
                  fontSize: scale(18),
                  fontWeight: "600",
                  color: "white",
                }}
              >
                {"Lets Get Started".toUpperCase()}
              </Text>
            </TouchableOpacity>
            <Text style={styles.btnText}>
              Already have an account?{" "}
              <Text
                style={{
                  color: "white",
                  textDecorationLine: "underline",
                }}
              >
                Register
              </Text>
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  main: {
    position: "absolute",
    bottom: scale(42),
    paddingHorizontal: scale(16),
    alignSelf: "center",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scale(8),
    marginTop: scale(38),
    backgroundColor: "#dc3351",
    height: scale(44),
  },
  mainText: {
    fontSize: scale(28),
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },
  btnText: {
    fontSize: scale(14),
    color: "white",
    alignSelf: "center",
    marginTop: scale(18),
    opacity: 0.9,
  },
  subText: {
    fontSize: scale(16),
    color: "white",
    opacity: 0.7,
    marginTop: scale(8),
    textAlign: "center",
  },
});

export default Onboarding;
