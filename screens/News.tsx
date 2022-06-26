import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Linking,
  ScrollView,
  SafeAreaView,
} from "react-native";

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
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ flex: 1 }} bounces={false}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-start",
              paddingHorizontal: 24,
            }}
          >
            <Text style={{ fontSize: 24, marginTop: 8 }}>
              Title: {this.data.title}
            </Text>
            <Text style={{ fontSize: 24, marginTop: 8 }}>
              Date: {this.data.date}
            </Text>
            <Text style={{ fontSize: 24, marginTop: 8 }}>
              NER: {this.data.locationNER}
            </Text>
            <Text
              style={{ fontSize: 24, marginTop: 8, color: "blue" }}
              onPress={() =>
                Linking.openURL(this.data.link.replaceAll(" ", ""))
              }
            >
              Link: {this.data.link.replaceAll(" ", "")}
            </Text>
            <Text style={{ fontSize: 24, marginTop: 8 }}>
              Matched Lane: {this.data.matched_lne}
            </Text>
            <Text style={{ fontSize: 24, marginTop: 8 }}>
              Summary: {this.data.summary}
            </Text>

            <TouchableOpacity
              style={{
                alignSelf: "center",
                marginTop: 24,
                width: 120,
                height: 36,
                backgroundColor: "red",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 24,
              }}
              onPress={() => this.props.navigation.goBack()}
            >
              <Text
                style={{ fontSize: 24, textAlign: "center", color: "white" }}
              >
                Go Back
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
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

export default News;
