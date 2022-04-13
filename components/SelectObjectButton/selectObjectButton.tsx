import { FC, useEffect, useState } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import {
  Section,
  LeftSection,
  RightSection,
  IconSection,
  DetailsSection,
  DetailsText,
  HeadingSection,
  HeadingText,
  TouchableSection,
} from "./selectObjectButton.styled";

interface ISelectObjectButton {
  textColor?: string;
  icon: JSX.Element;
  heading: string;
  details: string;
  onClick: () => void;
}

const SelectObjectButton: FC<ISelectObjectButton> = ({
  textColor,
  icon,
  heading,
  details,
  onClick,
}) => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        return setActive(false);
      }, 100);
    }
  }, [active]);

  const clickHandel = () => {
    setActive(!active);
    return onClick && onClick();
  };

  return (
    <TouchableSection activeOpacity={0.8} onPress={clickHandel}>
      <Section
        active={active}
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
            {icon ? (
              icon
            ) : (
              <MaterialIcon name="error" color="#c65563" size={30} />
            )}
          </IconSection>
        </LeftSection>
        <RightSection>
          <HeadingSection>
            <HeadingText
              style={[
                textColor
                  ? {
                      color: textColor,
                    }
                  : {},
              ]}
            >
              {heading ? heading : "content not loaded"}
            </HeadingText>
          </HeadingSection>

          <DetailsSection>
            <DetailsText
              style={[
                textColor
                  ? {
                      color: textColor,
                    }
                  : {},
              ]}
            >
              {details ? details : "content not loaded"}
            </DetailsText>
          </DetailsSection>
        </RightSection>
      </Section>
    </TouchableSection>
  );
};

export default SelectObjectButton;
