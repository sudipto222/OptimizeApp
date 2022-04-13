import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const SafeSection = styled(SafeAreaView)`
  height: 100%;
  width: 100%;

  background-color: ${(props) => props.theme.white};
`;

const Section = styled.ScrollView`
  height: 100%;
  width: 100%;
  margin-top: -50px;
  padding: 0 15px 0 15px;

  background-color: ${(props) => props.theme.bluegem};
`;

const CardSection = styled.View`
  margin-top: 75px;
  border-radius: 30px;
  padding: 20px 15px;

  min-height: auto;

  background-color: ${(props) => props.theme.lightBluegem};
`;

const ButtonSection = styled.View`
  margin-top: 20px;

  align-items: center;
  justify-content: center;
`;

const BlankView = styled.View`
  height: 200px;
  width: 100%;
`;

export { SafeSection, Section, CardSection, ButtonSection, BlankView };
