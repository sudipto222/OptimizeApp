import styled from "styled-components/native";

const TouchableSection = styled.TouchableOpacity``;

const Container = styled.View`
  margin-top: 10px;
`;

const Section = styled.View`
  border-radius: 20px;
  margin-top: 10px;
  width: 100%;
  height: 450px;

  background-color: ${(props) => props.theme.light2Bluegem};
  overflow: hidden;
  position: relative;
`;

const ImageSection = styled.View`
  width: 100%;
  height: 100%;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.7;
`;

const ActionSection = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  align-items: center;
  justify-content: center;
`;

const ButtonSection = styled.View`
  height: 75px;
  width: 75px;
  border-radius: 100px;

  border: 4px solid #ff790a;

  align-items: center;
  justify-content: center;
`;

const IconSection = styled.View`
  align-items: center;
  justify-content: center;
`;

const HeadingSection = styled.View`
  margin-top: 10px;
`;

const HeadingText = styled.Text`
  color: ${(props) => props.theme.orange};
  text-transform: capitalize;
  font-family: "MontserratBold";
  font-size: 13px;
`;

const ErrorMessageSection = styled.View`
  margin-top: 15px;
  padding-left: 25px;
  padding-bottom: 5px;
`;

const ErrorMessageText = styled.Text`
  font-family: "MontserratBold";
  font-weight: normal;
  font-size: 13px;
  color: ${(props) => props.theme.green};
`;

export {
  Section,
  ImageSection,
  Image,
  ActionSection,
  ButtonSection,
  IconSection,
  HeadingSection,
  HeadingText,
  TouchableSection,
  Container,
  ErrorMessageSection,
  ErrorMessageText,
};
