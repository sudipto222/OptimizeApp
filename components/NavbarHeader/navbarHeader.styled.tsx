import styled from "styled-components/native";

const TouchableSection = styled.TouchableOpacity``;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 0 10px 10px;
`;

const LeftSection = styled.View``;

const RightSection = styled.View`
  margin-left: 20px;

  flex-direction: row;
  align-items: flex-start;
`;

const BackButton = styled.View``;

const BackIconSection = styled.View`
  align-items: center;
  justify-content: center;
`;

const NIconSection = styled.View`
  align-items: center;
  justify-content: center;
`;

const InfoSeciton = styled.View`
  margin-left: 10px;
`;

const HeadingSection = styled.View``;

const HeadingText = styled.Text`
  font-family: "MontserratBold";
  font-size: 14px;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
`;

const DetailsSection = styled.View`
  margin-top: 10px;

  flex-direction: row;
  align-items: center;
`;

const DetailsText = styled.Text`
  font-family: "MontserratBold";
  font-size: 12px;
  color: ${(props) => props.theme.red};
  text-transform: uppercase;
  margin-left: 5px;
`;

const Dot = styled.View`
  height: 5px;
  width: 5px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.red};
`;

export {
  Section,
  BackButton,
  BackIconSection,
  DetailsSection,
  DetailsText,
  HeadingSection,
  HeadingText,
  LeftSection,
  NIconSection,
  RightSection,
  InfoSeciton,
  Dot,
  TouchableSection,
};
