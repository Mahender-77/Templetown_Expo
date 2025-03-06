import { Image, StyleSheet, Platform, Text, View,Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import templeLogo from "@/assets/images/temple.png";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { searchHeadings } from "@/constants/search";
import SearchLocation from "@/components/Search/SearchLocation";
import DatePiker from "@/components/Search/DatePiker";
import RoomFilter from "@/components/Search/RoomFilter";

export default function HomeScreen() {
  const [activeContent, setActiveContent] = useState(1);
  const [showeSearch, setShowSearch] = useState(false);

  const handlePress=()=>{
    setShowSearch(true)
    console.log("pressed")
  }

  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <LinearGradient
        colors={["rgba(246, 166, 166, 0.3)", "rgba(166, 217, 246, 0.3)"]}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.logo}>
        <Image style={styles.img} source={templeLogo} />
      </View>
      <View style={styles.headingContainer}>
        {searchHeadings.map((heading, index) => (
          <Text
            key={index}
            onPress={() => setActiveContent(index + 1)}
            style={[
              styles.heading,
              activeContent === index + 1 && styles.activeHeading,
            ]}
          >
            {heading.name}
          </Text>
        ))}
      </View>
      <Pressable style={showeSearch ? styles.contentContainer1 :styles.contentContainer} >
        <SearchLocation activeContent={activeContent} onPress={handlePress}  />
        <DatePiker/>
        <RoomFilter/>

      </Pressable>
        {/* {activeContent === 1 && (
            <Text style={styles.content}>About Us content here...</Text>
          )}
          {activeContent === 2 && (
            <Text style={styles.content}>Services content here...</Text>
          )}
          {activeContent === 3 && (
            <Text style={styles.content}>Products content here...</Text>
          )}
          {activeContent === 4 && (
            <Text style={styles.content}>Contact content here...</Text>
          )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  logo: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  img: {
    width: 130,
    height: 100,
    resizeMode: "contain",
  },
  headingContainer: {
    flexDirection: "row",
    marginTop: 140,
    gap: 35,
    // borderColor:"red",
    justifyContent: "center",
    // borderWidth:1
  },
  heading: {
    fontSize: 18,
    marginVertical: 10,
    color: "#666",
    // borderColor: '#ccc',
    // borderWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 3,
    // borderRadius:50
  },
  activeHeading: {
    color: "#000",
    fontWeight: "bold",
    borderBottomColor: "#000",
    borderBottomWidth: 2,
  },
  contentContainer1: {
    // borderColor: "#ccc",
    // borderWidth: 1,
    // height: "40%",
    overflow: "hidden",
    gap: 10,
    marginTop: 20,
    padding: 20,
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 10,
  },
  contentContainer: {
    // borderColor: "#ccc",
    // borderWidth: 1,
    height: "5.5%",
    overflow: "hidden",
    marginTop: 20,
    // padding: 20,
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 10,
  },
  content: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
});
