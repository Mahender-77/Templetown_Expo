import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import AntDesig from "@expo/vector-icons/AntDesign";
import DatePiker from "../DatePiker";

export default function Search({ activeContent ,onPress }: { activeContent: number ,onPress:()=>void}) {
  const [showLocationBox, setShowLocationBox] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const locations = [
    "Srisailam",
    "Thirupati",
    "Yadagirigutta",
    "Thiruvannamalai",
  ];
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TouchableOpacity
            style={styles.touchBox}
            onPress={() => {
                onPress()
              setShowLocationBox(!showLocationBox);
            }}
          >
            <TextInput
              style={styles.input}
              placeholder="Select Location"
              placeholderTextColor="#666"
              editable={false}
              value={selectedLocation}
            />
            {showLocationBox ? (
              <AntDesig name="caretup" size={15} color="#666" />
            ) : (
              <AntDesign name="caretdown" size={15} color="#666" />
            )}
          </TouchableOpacity>
          {showLocationBox && (
            <View style={styles.locationBox}>
              {locations.map((location, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setShowLocationBox(false);
                    setSelectedLocation(location);
                  }}
                >
                  <Text style={styles.locationOption}>{location}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

      

     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    
  },
  searchBar: {
    // marginBottom: 16,
  },
  locationBox: {
    width: "100%",
    paddingHorizontal: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    position: "absolute",
    top: 45,
    backgroundColor: "white",
    zIndex: 100,
    borderRadius: 8,
  },
  touchBox: {
    borderColor: "#ddd",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 8,
  },
  locationOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  input: {
    fontSize: 16,
  },
  
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: "#333",
  },
  
  
  
});
