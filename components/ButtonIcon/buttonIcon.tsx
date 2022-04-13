import { FC } from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import { Section, IconSeciton, TouchableSection } from "./buttonIcon.styled";

interface IButtonIcon {
  onClick: () => void;
}

const ButtonIcon: FC<IButtonIcon> = ({ onClick }) => {
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
        <IconSeciton
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
          <FontAwesomeIcon name="angle-right" color="#ffffff" size={45} />
        </IconSeciton>
      </Section>
    </TouchableSection>
  );
};

export default ButtonIcon;
