import styled from "styled-components/native";

const Container = styled.View`
  margin: 10px 0;
`;

const Section = styled.View`
  background-color: ${(props) => props.theme.darkBluegem};
  border-radius: 100px;
  padding: 7px 0 7px 20px;
  margin: 7px 0;

  flex-direction: row;
`;

const LeftSection = styled.View`
  align-items: center;
  justify-content: center;
`;

const RightSection = styled.View`
  margin-left: 12px;
  flex: 1;
`;

const TopSection = styled.View``;

const BottomSection = styled.View``;

const PlaceholderSection = styled.View``;

const PlaceholderText = styled.Text`
  font-size: 12.5px;
  font-family: "MontserratRegular";
  color: ${(props) => props.theme.white};
  text-transform: capitalize;
`;

const InputSection = styled.View`
  margin-top: 3px;
  width: 90%;
`;

const Input = styled.TextInput`
  font-family: "MontserratBold";
  font-weight: normal;
  color: ${(props) => props.theme.white};
  width: 100%;
`;

const IconSection = styled.View`
  align-items: center;
  justify-content: center;
`;

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
