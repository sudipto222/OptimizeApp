import styled from "styled-components/native";

const TouchableSection = styled.TouchableOpacity``;

const Section = styled.View`
  padding: 20px 25px 25px 25px;
  border-radius: 20px;
  z-index: 1;

  background-color: ${(props) => props.theme.white};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.View``;

const BackIconSection = styled.View``;

const InfoSection = styled.View`
  flex-direction: column;
  align-items: center;
`;

const InfoIconSection = styled.View``;

const InfoDetailsSection = styled.View``;

const InfoDetailsText = styled.Text`
  font-family: "MontserratBold";
  font-size: 13px;
  color: ${(props) => props.theme.purple};
  text-transform: uppercase;
`;

const ProgressSection = styled.View`
  flex-direction: row;
`;

// active

const ProgressItemSection = styled.View`
  flex-direction: column;
  align-items: center;
`;

const ProgressItem = styled.View`
  height: 37px;
  width: 37px;
  border-radius: 100px;
  margin: 0 10px;

  background-color: ${(props) => props.theme.purple};

  align-items: center;
  justify-content: center;
`;

const ProgressItemText = styled.Text`
  font-size: 14px;
  font-family: "MontserratBold";
  color: ${(props) => props.theme.white};
`;

const ProgressItemDetails = styled.View`
  margin-top: 3px;
`;

const ProgressItemDetailsText = styled.Text`
  font-size: 11.5px;
  font-family: "MontserratBold";
  color: ${(props) => props.theme.purple};
  text-transform: capitalize;
`;

// disable

const ProgressItemDisableSection = styled.View`
  flex-direction: column;
  align-items: center;
`;

const ProgressDisableItem = styled.View`
  height: 30px;
  width: 30px;
  border-radius: 100px;
  margin: 0 10px;

  border: 1.5px solid ${(props) => props.theme.lightGray};

  align-items: center;
  justify-content: center;
`;

const ProgressItemDisableText = styled.Text`
  font-size: 14px;
  font-family: "MontserratRegular";
  color: ${(props) => props.theme.lightGray};
  text-transform: capitalize;
`;

const ProgressItemDisableDetails = styled.View`
  margin-top: 3px;
`;

const ProgressItemDisableDetailsText = styled.Text`
  font-size: 10px;
  font-family: "MontserratRegular";
  color: ${(props) => props.theme.lightGray};
`;

export {
  BackButton,
  BackIconSection,
  ProgressSection,
  Section,
  InfoSection,
  InfoIconSection,
  InfoDetailsSection,
  InfoDetailsText,
  ProgressItem,
  ProgressItemText,
  ProgressItemDetails,
  ProgressItemDetailsText,
  ProgressItemSection,
  ProgressDisableItem,
  ProgressItemDisableDetails,
  ProgressItemDisableDetailsText,
  ProgressItemDisableSection,
  ProgressItemDisableText,
  TouchableSection,
};
