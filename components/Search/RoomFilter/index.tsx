import { Text, TextInput, TouchableOpacity, View ,  StyleSheet,} from "react-native";

export default function RoomFilter(){
    return(
           <View style={styles.filterContainer}>
                  <View style={styles.filterBox}>
                    <Text style={styles.label}>Rooms</Text>
                    <TextInput
                      style={styles.numberInput}
                      placeholder="0"
                      keyboardType="numeric"
                      placeholderTextColor="#666"
                    />
                  </View>
        
                  <View style={styles.filterBox}>
                    <Text style={styles.label}>Room Type</Text>
                    <View style={styles.typeSelector}>
                      <TouchableOpacity style={styles.typeButton}>
                        <Text style={styles.typeText}>AC</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.typeButton}>
                        <Text style={styles.typeText}>Non-AC</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
    )
}
const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        marginBottom: 4,
        color: "#333",
      },
    filterContainer: {
        zIndex:-1,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      filterBox: {
        flex: 1,
        marginRight: 8,
      },
      numberInput: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
        textAlign: "center",
      },
      typeSelector: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
      typeButton: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
        marginRight: 4,
        alignItems: "center",
      },
      typeText: {
        fontSize: 14,
        color: "#333",
      },
})