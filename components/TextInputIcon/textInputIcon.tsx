import { FC } from "react";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

import {
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
} from "./textInputIcon.styled";

interface ITextInput {
  placeholder: string;
  placeholderInput: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  inputError: string | null;
}

const TextInputIcon: FC<ITextInput> = ({
  placeholder,
  placeholderInput,
  value,
  setValue,
  inputError,
}) => {
  return (
    <Container>
      <Section
        style={{
          shadowColor: "#0000008d",
          shadowOffset: {
            height: 50,
            width: 50,
          },
          shadowRadius: 10,
          shadowOpacity: 1,
          elevation: 10,
        }}
      >
        <LeftSection>
          <IconSection>
            <MaterialCommunityIcon
              name="pencil-outline"
              color="#ffffff"
              size={25}
            />
          </IconSection>
        </LeftSection>

        <RightSection>
          <TopSection>
            <PlaceholderSection>
              <PlaceholderText>
                {placeholder ? placeholder : "placeholder"}
              </PlaceholderText>
            </PlaceholderSection>
          </TopSection>
          <BottomSection>
            <InputSection>
              <Input
                placeholder={`${placeholderInput ? placeholderInput : "Enter"}`}
                placeholderTextColor={"#d9cece"}
                value={value}
                onChangeText={setValue}
              />
            </InputSection>
          </BottomSection>
        </RightSection>
      </Section>
      {inputError && (
        <ErrorMessageSection>
          <ErrorMessageText>{inputError}</ErrorMessageText>
        </ErrorMessageSection>
      )}
    </Container>
  );
};

export default TextInputIcon;
