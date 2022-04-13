import styled from "styled-components/native";

interface ISection {
  active: boolean;
}

const TouchableSection = styled.TouchableOpacity``;

const Section = styled.View<ISection>`
  margin: 10px 0;
  border-radius: 30px;
  padding: 0 15px;
  height: 80px;

  border: 3px solid
    ${(props) => (props.active ? props.theme.bluegem : props.theme.white)};

  background-color: ${(props) => props.theme.white};

  flex-direction: row;
  align-items: center;
`;

const LeftSection = styled.View``;

const RightSection = styled.View`
  margin-left: 10px;
`;

const IconSection = styled.View``;

const HeadingSection = styled.View``;

const HeadingText = styled.Text`
  font-size: 14px;
  font-family: "MontserratBold";
  color: ${(props) => props.theme.mist};
  text-transform: capitalize;
`;

const DetailsSection = styled.View`
  margin-top: 3px;
`;

const DetailsText = styled.Text`
  font-size: 11px;
  font-family: "MontserratBold";
  color: ${(props) => props.theme.mist};
  text-transform: uppercase;
`;

export {
  Section,
  LeftSection,
  RightSection,
  IconSection,
  DetailsSection,
  DetailsText,
  HeadingSection,
  HeadingText,
  TouchableSection,
};
