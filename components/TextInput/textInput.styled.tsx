import styled from "styled-components/native";

const Container = styled.View`
  margin: 10px 0;
`;

const Section = styled.View`
  background-color: ${(props) => props.theme.purpledark};
  border-radius: 100px;
  padding: 7px 25px 7px 25px;

  flex-direction: column;
`;

const LeftSection = styled.View``;

const RightSection = styled.View``;

const TopSection = styled.View``;

const BottomSection = styled.View``;

const PlaceholderSection = styled.View``;

const PlaceholderText = styled.Text`
  font-size: 14px;
  font-family: "MontserratBold";
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
`;

const InputSection = styled.View`
  margin-top: 3px;
`;

const Input = styled.TextInput`
  font-family: "MontserratRegular";
  font-weight: normal;
  color: ${(props) => props.theme.white};
`;

const IconSection = styled.View``;

const ErrorMessageSection = styled.View`
  margin-top: 10px;
  padding-left: 25px;
`;

const ErrorMessageText = styled.Text`
  font-family: "MontserratBold";
  font-weight: normal;
  font-size: 13px;
  color: ${(props) => props.theme.green};
`;

export {
  Section,
  LeftSection,
  RightSection,
  PlaceholderSection,
  PlaceholderText,
  TopSection,
  BottomSection,
  InputSection,
  Input,
  IconSection,
  ErrorMessageSection,
  ErrorMessageText,
  Container,
};
