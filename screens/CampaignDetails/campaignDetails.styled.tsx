import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const SafeSection = styled(SafeAreaView)`
  height: 100%;
  width: 100%;

  background-color: ${(props) => props.theme.bluegem};
`;

const Section = styled.ScrollView`
  height: 100%;
  width: 100%;
  padding: 0 15px;

  background-color: ${(props) => props.theme.bluegem};
`;

const HeadingSection = styled.View``;

const HeadingText = styled.Text`
  font-family: "MontserratBold";
  font-size: 14px;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
`;

const PerformanceSection = styled.View`
  margin-top: 20px;

  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

const ProgressBarSection = styled.View`
  margin-top: 20px;
  width: 100%;

  align-items: center;
  justify-content: center;
`;

const CardsSection = styled.View`
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
`;

const Card1Section = styled.View``;

const Card2Section = styled.View``;

const CardSection = styled.View`
  margin-top: 15px;
`;

const DestinationSection = styled.View`
  margin-top: 30px;
`;

const CopyInputSection = styled.View`
  margin-top: 10px;
`;

export {
  SafeSection,
  Section,
  CardsSection,
  DestinationSection,
  HeadingSection,
  HeadingText,
  PerformanceSection,
  Card1Section,
  Card2Section,
  ProgressBarSection,
  CardSection,
  CopyInputSection,
};
