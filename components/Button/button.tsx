import { FC } from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import {
  Section,
  LeftSection,
  RightSection,
  IconSection,
  LabelSection,
  LabelText,
  TouchableSection,
} from "./button.styled";

interface IButton {
  hideIcon?: boolean;
  label: string;
  onClick: () => void;
}

const Button: FC<IButton> = ({ label, hideIcon, onClick }) => {
  return (
    <TouchableSection
      activeOpacity={0.8}
      onPress={() => {
        return onClick && onClick();
      }}
    >
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
          <LabelSection>
            <LabelText
              style={{
                shadowColor: "#ffffff",
                shadowOffset: {
                  height: 50,
                  width: 0,
                },
                shadowRadius: 20,
                shadowOpacity: 1,
                elevation: 10,
              }}
            >
              {label ? label : "button"}
            </LabelText>
          </LabelSection>
        </LeftSection>
        <RightSection>
          {!hideIcon && (
            <IconSection>
              <FontAwesomeIcon name="angle-right" color="#ffffff" size={27} />
            </IconSection>
          )}
        </RightSection>
      </Section>
    </TouchableSection>
  );
};

export default Button;
