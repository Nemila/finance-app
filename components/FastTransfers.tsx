import { FlatList } from "react-native";
import peopleData from "../data/peopleData.json";
import NewFastTransferProfileButton from "./NewFastTransferProfileButton";
import ProfileCard from "./ProfileCard";
import { Text, View } from "./Themed";

const FastTransfers = () => {
  return (
    <View style={{ gap: 16 }}>
      <Text style={{ fontWeight: "bold", fontSize: 22 }}>Fast Transfer</Text>

      <FlatList
        horizontal
        data={peopleData}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <NewFastTransferProfileButton />}
        renderItem={({ item }) => <ProfileCard item={item} />}
        contentContainerStyle={{ gap: 16 }}
      />
    </View>
  );
};

export default FastTransfers;
