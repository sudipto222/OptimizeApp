import styled from "styled-components/native";

const Section = styled.View``;

const InfoSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

const InfoLeftSection = styled.View``;

const InfoRightSection = styled.View`
  margin-left: 10px;

  align-items: center;
  justify-content: center;
`;

const IconSection = styled.View`
  align-items: center;
  justify-content: center;
`;

const HeadingSection = styled.View``;

const HeadingText = styled.Text`
  font-family: "MontserratBold";
  font-size: 12px;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
`;

const RemainSection = styled.View`
  margin-top: 2px;
`;

const RemainText = styled.Text`
  font-family: "MontserratRegular";
  font-size: 12px;
  color: ${(props) => props.theme.orange};
`;

const TotoalSection = styled.View`
  margin-top: 2px;
`;

const TotalText = styled.Text`
  font-family: "MontserratRegular";
  font-size: 12px;
  color: ${(props) => props.theme.white};
`;

export {
  Section,
  HeadingSection,
  HeadingText,
  IconSection,
  InfoLeftSection,
  InfoRightSection,
  InfoSection,
  RemainSection,
  RemainText,
  TotalText,
  TotoalSection,
};
