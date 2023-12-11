import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BankNotes, Bolt, Phone } from "./Icons";
import Colors from "../constants/Colors";

type Props = {
  transaction: {
    id: number;
    type: string;
    amount: string;
    title: string;
  };
};

const Transaction = ({ transaction }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
        }}
      >
        <View style={styles.iconContainer}>
          {transaction.type === "bill" && (
            <Bolt fill={Colors.dark.text} width={32} height={32} />
          )}

          {transaction.type === "money" && (
            <BankNotes fill={Colors.dark.text} width={32} height={32} />
          )}

          {transaction.type === "credit" && (
            <Phone fill={Colors.dark.text} width={32} height={32} />
          )}
        </View>

        <View style={{ gap: 4 }}>
          <Text style={{ color: Colors.dark.text }}>{transaction.title}</Text>
          <Text style={{ color: "gray" }}>03 Aug 2023</Text>
          {/* <Text style={styles.amount}>{transaction.amount}</Text> */}
        </View>
      </View>

      <Text style={styles.amount}>{transaction.amount}</Text>
      {/* <TouchableOpacity>
        <Text style={globalStyles.text}>Details</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 64,
    height: 64,
    backgroundColor: "#1E1E1E",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  amount: {
    color: Colors.dark.tint,
    fontSize: 16,
  },
});

export default Transaction;
