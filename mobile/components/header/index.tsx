import { View, StyleSheet, Pressable, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../constants/colors";

export function Header() {
  return (
    <View style={styles.container}>
      <Text>Resposta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
    marginBottom: 14,
  },
});
