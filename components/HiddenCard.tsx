import { TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { Text, View } from "./Themed";
import { Eye } from "./Icons";

const HiddenCard = ({
  name,
  onPress,
}: {
  name: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: Colors.dark.tint,
        justifyContent: "center",
        borderStyle: "dashed",
        alignItems: "center",
        borderRadius: 16,
        borderWidth: 1,
        height: 100,
        padding: 24,
        flex: 1,
        gap: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Eye fill={Colors.dark.tint} width={20} height={20} />
      </View>

      <Text style={{ fontSize: 16, color: Colors.dark.tint }}>{name}</Text>
    </TouchableOpacity>
  );
};

export default HiddenCard;
