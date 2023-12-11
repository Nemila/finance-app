import { useState } from "react";
import Card from "./Card";
import HiddenCard from "./HiddenCard";
import { View } from "./Themed";

const Cards = () => {
  const [moneyHidden, setMoneyHidden] = useState(true);
  const [creditHidden, setCreditHidden] = useState(true);
  return (
    <View style={{ flexDirection: "row", gap: 16 }}>
      {creditHidden ? (
        <HiddenCard
          name="Credit Balance"
          onPress={() => setCreditHidden(false)}
        />
      ) : (
        <Card
          balance={9000.05}
          name="Credit Balance"
          onPress={() => setCreditHidden(true)}
        />
      )}

      {moneyHidden ? (
        <HiddenCard name="Orange Money" onPress={() => setMoneyHidden(false)} />
      ) : (
        <Card
          balance={5025}
          name="Orange Money"
          onPress={() => setMoneyHidden(true)}
        />
      )}
    </View>
  );
};

export default Cards;
