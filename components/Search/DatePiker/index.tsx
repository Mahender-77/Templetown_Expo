import { Text, TextInput, View ,StyleSheet,} from "react-native";

export default function () {
    return (
          <View style={styles.dateContainer}>
                  <View style={styles.dateBox}>
                    <Text style={styles.label}>Check In</Text>
                    <TextInput
                      style={styles.dateInput}
                      placeholder="Select Date"
                      placeholderTextColor="#666"
                    />
                    <TextInput
                      style={styles.timeInput}
                      placeholder="Time"
                      placeholderTextColor="#666"
                    />
                  </View>
        
                  <View style={styles.dateBox}>
                    <Text style={styles.label}>Check Out</Text>
                    <TextInput
                      style={styles.dateInput}
                      placeholder="Select Date"
                      placeholderTextColor="#666"
                    />
                    <TextInput
                      style={styles.timeInput}
                      placeholder="Time"
                      placeholderTextColor="#666"
                    />
                  </View>
                </View>
    )
}
const styles = StyleSheet.create({
    dateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        // marginBottom: 16,
        zIndex:-1
      },
      dateBox: {
        flex: 1,
        marginRight: 8,
      },
      label: {
        fontSize: 14,
        marginBottom: 4,
        color: "#333",
      },
      dateInput: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
      },
      timeInput: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
      },

})