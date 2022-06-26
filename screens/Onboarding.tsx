import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { height, width } from "../constants/Layout";

function Onboarding({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/onboarding.jpg")}
        style={{
          flex: 1,
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        blurRadius={1}
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
          <View
            style={{
              position: "absolute",
              bottom: height * 0.1,
              paddingHorizontal: width * 0.02,
            }}
          >
            <Text
              style={{
                fontSize: width * 0.06,
                color: "white",
              }}
            >
              Welcome to NewsYog
            </Text>
            <Text
              style={{
                fontSize: width * 0.04,
                color: "white",
                opacity: 0.7,
                marginTop: height * 0.01,
              }}
            >
              NewsYog is a news app which focuses on showing news as per users
              location.
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Maps")}
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderRadius: width * 0.01,
                marginTop: height * 0.06,
                backgroundColor: "#dc3351",
                height: height * 0.06,
              }}
            >
              <Text
                style={{
                  fontSize: width * 0.05,
                  fontWeight: "500",
                  color: "white",
                }}
              >
                {"Lets Get Started".toUpperCase()}
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: width * 0.036,
                color: "white",
                alignSelf: "center",
                marginTop: height * 0.026,
              }}
            >
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

export default Onboarding;
