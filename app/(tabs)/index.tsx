import { ScrollView } from "react-native";
import Cards from "../../components/Cards";
import FastTransfers from "../../components/FastTransfers";
import Header from "../../components/Header";
import RecentTransactions from "../../components/RecentTransactions";

export default function TabOneScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        padding: 16,
        gap: 32,
      }}
    >
      <Header />
      <Cards />
      <FastTransfers />
      <RecentTransactions />
    </ScrollView>
  );
}
