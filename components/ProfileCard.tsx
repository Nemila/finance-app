import { Link } from "expo-router";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "./Themed";

type Props = {
  item: {
    id: string;
    img: string;
    firstName: string;
    lastName: string;
    phone: string;
  };
};

const ProfileCard = ({ item }: Props) => {
  return (
    <Link
      href={{
        pathname: "/",
        params: { clientId: item.id || 0 },
      }}
      asChild
    >
      <TouchableOpacity style={styles.profileCard}>
        <Image source={{ uri: item.img }} style={styles.avatar} />
        <Text style={styles.name}>{item.firstName}</Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  name: { fontSize: 16 },
  profileCard: { justifyContent: "center", alignItems: "center", gap: 8 },
  avatar: { width: 100, height: 100, borderRadius: 32 },
});

export default ProfileCard;
