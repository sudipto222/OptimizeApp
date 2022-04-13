import { FC } from "react";

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
} from "./textInput.styled";

interface ITextInput {
  placeholder: string;
  placeholderInput: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  inputError: string | null;
}

const TextInput: FC<ITextInput> = ({
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
                placeholderTextColor={"#F8F8F8"}
                value={value}
                onChangeText={setValue}
              />
            </InputSection>
          </BottomSection>
        </LeftSection>

        <RightSection>
          <IconSection></IconSection>
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

export default TextInput;
