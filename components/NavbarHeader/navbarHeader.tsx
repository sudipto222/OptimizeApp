import { FC } from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import {
  Section,
  BackButton,
  BackIconSection,
  HeadingSection,
  HeadingText,
  DetailsSection,
  DetailsText,
  LeftSection,
  NIconSection,
  RightSection,
  InfoSeciton,
  Dot,
  TouchableSection,
} from "./navbarHeader.styled";

interface IHavbarHeader {
  navigation: any;
  props: {
    campaign_end: boolean;
    name: string;
  };
}

const HavbarHeader: FC<IHavbarHeader> = ({ navigation, props }) => {
  return (
    <Section>
      <LeftSection>
        <TouchableSection
          activeOpacity={0.8}
          onPress={() => {
            return navigation && navigation.navigate("HomeScreen");
          }}
        >
          <BackButton>
            <BackIconSection>
              <FontAwesomeIcon name="angle-left" color="#ffffff" size={45} />
            </BackIconSection>
          </BackButton>
        </TouchableSection>
      </LeftSection>

      <RightSection>
        <NIconSection>
          <FontAwesomeIcon name="snapchat-ghost" color="#ffffff" size={30} />
        </NIconSection>
        <InfoSeciton>
          <HeadingSection>
            <HeadingText>{`${
              props?.name ? props.name : "campaign name"
            }`}</HeadingText>
          </HeadingSection>

          <DetailsSection>
            <Dot />
            <DetailsText>
              campaign {`${props?.campaign_end ? "ended" : "active"}`}
            </DetailsText>
          </DetailsSection>
        </InfoSeciton>
      </RightSection>
    </Section>
  );
};

export default HavbarHeader;
