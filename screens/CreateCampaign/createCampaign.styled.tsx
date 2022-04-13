import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const SafeSection = styled(SafeAreaView)`
  height: 100%;
  width: 100%;

  background-color: ${(props) => props.theme.white};
`;

const Section = styled.View`
  height: 100%;
  width: 100%;
  margin-top: -50px;
  padding: 0 15px;

  background-color: ${(props) => props.theme.bluegem};
`;

const CardSection = styled.View`
  margin-top: 100px;
`;

const InputsSection = styled.View``;

const ButtonSection = styled.View`
  margin-top: 40px;

  align-items: center;
  justify-content: center;
`;

export { SafeSection, Section, CardSection, InputsSection, ButtonSection };
