import { View } from "react-native";

import { Header } from "@/components/Header";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Title } from "@/components/Title";

export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 50 }}>
      <Header>
        <Title>Home</Title>
        <ButtonIcon name="add-circle"></ButtonIcon>
      </Header>
    </View>
  );
}
