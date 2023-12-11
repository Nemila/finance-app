import { Text, View } from "./Themed";
import { TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import recentTransactions from "../data/recentTransactions.json";
import Transaction from "./Transaction";

const RecentTransactions = () => {
  return (
    <View style={{ gap: 16 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>
          Recent Transaction
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: Colors.dark.tint,
            }}
          >
            Show all
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ gap: 16 }}>
        {recentTransactions.map((item) => (
          <View key={item.id} style={{ gap: 16 }}>
            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: Colors.dark.secondary,
              }}
            />
            <Transaction transaction={item} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default RecentTransactions;
