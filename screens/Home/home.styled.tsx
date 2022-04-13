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
  margin-top: 75px;
  border-radius: 30px;
  padding: 10px 15px;

  min-height: 70%;

  background-color: ${(props) => props.theme.white};
`;

const HeaderSection = styled.View`
  margin-top: 10px;

  flex-direction: row;
  align-items: center;
`;

const IconSection = styled.View``;

const HeadingSection = styled.View`
  margin-left: 5px;
`;

const HeadingText = styled.Text`
  font-family: "MontserratBold";
  font-size: 15px;
  color: ${(props) => props.theme.black};
  text-transform: uppercase;
`;

const SelectObjectCards = styled.View`
  margin-top: 10px;
`;

export {
  SafeSection,
  Section,
  CardSection,
  IconSection,
  HeadingSection,
  HeadingText,
  HeaderSection,
  SelectObjectCards,
};
