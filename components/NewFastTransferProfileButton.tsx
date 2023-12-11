import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "./Themed";
import { Plus } from "./Icons";
import Colors from "../constants/Colors";

const NewFastTransferProfileButton = () => {
  return (
    <TouchableOpacity
      onPress={() => alert("Work in progress...")}
      style={styles.container}
    >
      <View style={styles.wrapper} darkColor={Colors.dark.secondary}>
        <Plus width={32} height={32} fill={Colors.dark.tint} />
      </View>

      <Text style={styles.text}>Add New</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", gap: 8 },
  wrapper: {
    width: 100,
    height: 100,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});

export default NewFastTransferProfileButton;
