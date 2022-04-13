import styled from "styled-components/native";

const TouchableSection = styled.TouchableOpacity``;

const Section = styled.View`
  background-color: ${(props) => props.theme.purpledark};
  border-radius: 100px;
  padding: 7px 20px 7px 30px;
  margin: 10px 0;
  height: 60px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LeftSection = styled.View``;

const RightSection = styled.View``;

const DetailsSection = styled.View``;

const DetailsText = styled.Text`
  font-size: 13px;
  font-family: "MontserratRegular";
  color: ${(props) => props.theme.white};
`;

const IconSection = styled.View`
  align-items: center;
  justify-content: center;
`;

export {
  Section,
  RightSection,
  LeftSection,
  DetailsSection,
  DetailsText,
  IconSection,
  TouchableSection,
};
