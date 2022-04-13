import styled from "styled-components/native";

const TouchableSection = styled.TouchableOpacity``;

const Section = styled.View`
  height: 60px;
  width: 200px;

  border-radius: 100px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.orange};
  border-radius: 100px;
`;

const LeftSection = styled.View``;

const RightSection = styled.View`
  margin-left: 10px;
`;

const LabelSection = styled.View``;

const LabelText = styled.Text`
  font-size: 16px;
  font-family: "MontserratBold";
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
`;

const IconSection = styled.View``;

export {
  Section,
  LeftSection,
  RightSection,
  IconSection,
  LabelSection,
  LabelText,
  TouchableSection,
};
