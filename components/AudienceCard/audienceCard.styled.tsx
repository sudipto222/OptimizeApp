import styled from "styled-components/native";

const Section = styled.View`
  border-radius: 30px;
  padding: 20px 20px 30px 20px;

  background-color: ${(props) => props.theme.lightBluegem};

  height: 250px;
  width: 160px;
`;

const ItemSection = styled.View`
  flex-direction: row;
  margin: 5px 0;
`;

const LeftSeciton = styled.View``;

const RightSeciton = styled.View`
  margin-left: 10px;
`;

const IconSection = styled.View`
  align-items: center;
  justify-content: center;
`;

const HeadingSection = styled.View``;

const HeadingText = styled.Text`
  font-size: 14px;
  font-family: "MontserratBold";
  color: ${(props) => props.theme.white};
`;

const DetailsSection = styled.View`
  margin-top: 5px;
`;

const DetailsText = styled.Text`
  font-size: 12px;
  font-family: "MontserratRegular";
  color: ${(props) => props.theme.white};
`;

export {
  Section,
  ItemSection,
  LeftSeciton,
  RightSeciton,
  DetailsText,
  DetailsSection,
  HeadingSection,
  HeadingText,
  IconSection,
};
