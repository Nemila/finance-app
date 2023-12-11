import { Link } from "expo-router";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "./Themed";
import Colors from "../constants/Colors";

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.subtitle}>Hello Lamine,</Text>
        <Text style={styles.title}>Welcome Back</Text>
      </View>

      <Link href="/profile" asChild>
        <TouchableOpacity>
          <Image
            resizeMode="cover"
            source={{
              uri: "https://wallpapers-clan.com/wp-content/uploads/2022/07/sonic-pfp-1.jpg",
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: { fontSize: 18 },
  avatar: { borderRadius: 16, width: 64, height: 64 },
});

export default Header;
