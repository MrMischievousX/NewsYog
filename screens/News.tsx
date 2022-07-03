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
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { height, scale, width } from "../constants/Layout";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  navigation: any;
  route: any;
}
interface SS {
  isPressed: boolean;
}
interface S {}

class News extends React.Component<Props, SS, S> {
  data: any = null;
  constructor(props: any) {
    super(props);
    this.state = {
      isPressed: false,
    };
    this.data = this.props.route.params.data;
  }

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
    const link = this.data.link.replace(/ +/g, "");
    // const link =
    //   "https://www.thehindu.com/news/cities/Delhi/jnu-student-raped-by-cabbie-says-police-refused-to-help-her/article28828625.ece";

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={scale(24)}
            activeOpacity={0}
            style={{ backgroundColor: "transparent" }}
            color="white"
            onPress={() => this.props.navigation.goBack()}
          />
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Ionicons
              name={this.state.isPressed ? "bookmark" : "bookmark-outline"}
              size={scale(24)}
              style={{ backgroundColor: "transparent" }}
              color="white"
              onPress={() =>
                this.setState({ isPressed: !this.state.isPressed })
              }
            />
            <Ionicons
              name="share-social-outline"
              size={scale(24)}
              color="white"
              style={{ marginLeft: scale(12) }}
            />
          </View>
        </View>
        <ScrollView
          style={{ flex: 1, marginTop: scale(24) }}
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: scale(82) }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-start",
              width: width - scale(28),
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
              "rgba(38, 38, 44,0.1)",
              "rgba(38, 38, 44,0.3)",
              "rgba(38, 38, 44,0.8)",
              "rgba(38, 38, 44,0.9)",
              "rgba(38, 38, 44,1)",
              "rgba(38, 38, 44, 1)",
              "rgba(38, 38, 44, 1)",
              "rgba(38, 38, 44, 1)",
            ]}
            // locations={[0.1, 0.15, 0.3, 0.4]}
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
    // paddingTop: scale(8),
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width - scale(28),
  },
  read: {
    fontSize: scale(16),
    fontWeight: "600",
    color: "white",
  },
  btnContainer: {
    position: "absolute",
    bottom: scale(0),
    width: width,
    height: scale(82),
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  title: {
    fontSize: scale(24),
    marginTop: scale(24),
    color: "white",
    fontWeight: "600",
  },
  date: {
    fontSize: scale(13),
    color: "#7A7A7D",
    marginTop: scale(8),
  },
  summary: {
    fontSize: scale(13),
    color: "white",
    opacity: 0.7,
    fontWeight: "500",
    marginTop: scale(4),
    lineHeight: scale(22),
  },
  space: {
    width: scale(40),
    height: scale(4),
    marginVertical: scale(18),
    borderRadius: scale(16),
    opacity: 0.6,
    backgroundColor: "#7A7A7D",
  },
  image: {
    width: "100%",
    height: scale(200),
    borderRadius: scale(16),
  },
  btnStyle: {
    width: width - scale(28),
    height: scale(48),
    borderRadius: scale(12),
    backgroundColor: "#653FFE",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
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
