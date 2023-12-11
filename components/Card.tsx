import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "./Themed";
import Colors from "../constants/Colors";

const Card = ({
  name,
  balance,
  onPress,
}: {
  name: string;
  balance: number;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.subtitle} numberOfLines={1}>
        {name}
      </Text>
      <Text style={styles.title} numberOfLines={1}>
        {balance} XOF
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    padding: 24,
    flex: 1,
    height: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  subtitle: { fontSize: 16, color: "black" },
});

export default Card;
