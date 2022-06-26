import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Linking,
  ScrollView,
  Image,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { height, width } from "../constants/Layout";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  navigation: any;
  route: any;
}
interface SS {}
interface S {}

class News extends React.Component<Props, SS, S> {
  constructor(props: any) {
    super(props);
  }

  data = this.props.route.params.data;

  // "date": "Tue ,  06 Aug 2019 01 : 38 : 09 +0530",
  // "latitude": "26.901958",
  // "link": "https : //www.thehindu.com/news/cities/Delhi/jnu-student-raped-by-cabbie-says-police-refused-to-help-her/article28828625.ece",
  // "locationNER": "JNU : ORG , Delhi : GPE , Delhi : GPE , Delhi : GPE , FIR : ORG , IIT : GPE , JNU : ORG , Safdurjung Hospital : ORG , Delhi : GPE , Mandir Marg : ORG , Safdarjung Hospital : ORG , FIR : ORG , Mandir Marg : ORG",
  // "longitude": "75.745686",
  // "matched_lne": "mandir marg",
  // "news_number": "30",
  // "summary": "Victim wants legal action against police officers ,  accused; probe under way",
  // "title": "JNU student raped by cabbie says police refused to help her",

  render(): React.ReactNode {
    const date = new Date("Tue, 06 Aug 2019 01:38:09 ").toLocaleString();
    const link = this.data.link.replaceAll(" ", "");

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={width * 0.072}
            color="white"
            onPress={() => this.props.navigation.goBack()}
          />
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Ionicons
              name="bookmark-outline"
              size={width * 0.072}
              color="white"
            />
            <Ionicons
              name="share-social-outline"
              size={width * 0.072}
              color="white"
              style={{ marginLeft: width * 0.03 }}
            />
          </View>
        </View>
        <ScrollView
          style={{ flex: 1, marginTop: height * 0.03 }}
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: height * 0.16 }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-start",
              width: width * 0.9,
            }}
          >
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{
                uri: "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
              }}
            />
            <Text style={styles.title}>{this.data.title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.space} />
            <Text style={styles.summary}>
              {this.data.summary +
                this.data.summary +
                this.data.summary +
                this.data.summary}
            </Text>
          </View>
        </ScrollView>
        <View style={styles.btnContainer}>
          <LinearGradient
            colors={[
              "transparent",
              "rgba(38, 38, 44,0.6)",
              "rgba(38, 38, 44,0.7)",
              "rgba(38, 38, 44,0.8)",
              "rgba(38, 38, 44,0.9)",
              "rgba(38, 38, 44,1)",
              "black",
            ]}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <TouchableOpacity
              style={styles.btnStyle}
              onPress={() => Linking.openURL(link)}
            >
              <Text style={styles.read}>READ MORE</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26262C",
    alignItems: "center",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.9,
  },
  read: {
    fontSize: width * 0.044,
    fontWeight: "600",
    color: "white",
  },
  btnContainer: {
    position: "absolute",
    bottom: height * 0.0,
    width: width,
    height: height * 0.16,
    justifyContent: "center",
  },
  title: {
    fontSize: width * 0.072,
    marginTop: height * 0.03,
    color: "white",
    fontWeight: "600",
  },
  date: {
    fontSize: width * 0.038,
    color: "#7A7A7D",
    marginTop: height * 0.014,
  },
  summary: {
    fontSize: width * 0.038,
    color: "white",
    opacity: 0.7,
    fontWeight: "500",
    marginTop: height * 0.014,
    lineHeight: height * 0.028,
  },
  space: {
    width: width * 0.14,
    height: height * 0.0062,
    backgroundColor: "#7A7A7D",
    marginVertical: height * 0.022,
    borderRadius: width * 0.01,
    opacity: 0.6,
  },
  image: {
    width: "100%",
    height: height * 0.28,
    borderRadius: width * 0.04,
  },
  btnStyle: {
    width: width * 0.9,
    height: height * 0.072,
    backgroundColor: "#653FFE",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: width * 0.04,
  },
});

export default News;

{
  /* <
            <Text style={{ fontSize: width * 0.064, marginTop: 8 }}>
              NER: {this.data.locationNER}
            </Text>
            <Text
              style={{ fontSize: width * 0.064, marginTop: 8, color: "blue" }}
              onPress={() =>
                Linking.openURL(this.data.link.replaceAll(" ", ""))
              }
            >
              Link: {this.data.link.replaceAll(" ", "")}
            </Text>
            <Text style={{ fontSize: width * 0.064, marginTop: 8 }}>
              Matched Lane: {this.data.matched_lne}
            </Text>
            <Text style={{ fontSize: width * 0.064, marginTop: 8 }}>
              Summary: {this.data.summary}
            </Text>

            <TouchableOpacity
              style={{
                alignSelf: "center",
                marginTop: width * 0.064,
                width: 120,
                height: 36,
                backgroundColor: "red",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: width * 0.064,
              }}
              onPress={() => this.props.navigation.goBack()}
            >
              <Text
                style={{
                  fontSize: width * 0.064,
                  textAlign: "center",
                  color: "white",
                }}
              >
                Go Back
              </Text>
            </TouchableOpacity> */
}
