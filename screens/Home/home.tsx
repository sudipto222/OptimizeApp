import { FC, useEffect } from "react";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

import { Navbar } from "../../components/Navbar/index";
import { SelectObjectButton } from "../../components/SelectObjectButton/index";

import {
  SafeSection,
  Section,
  CardSection,
  IconSection,
  HeadingSection,
  HeadingText,
  HeaderSection,
  SelectObjectCards,
} from "./home.styled";

interface IHomeScreen {
  navigation: any;
}

const HomeScreen: FC<IHomeScreen> = ({ navigation }) => {
  return (
    <SafeSection>
      <Navbar activeScreen={1} adName="snap" navigation={navigation} />

      <Section>
        <CardSection
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
          <HeaderSection>
            <IconSection>
              <MaterialCommunityIcon name="close" color="#000000" size={30} />
            </IconSection>

            <HeadingSection>
              <HeadingText>select an objective</HeadingText>
            </HeadingSection>
          </HeaderSection>

          <SelectObjectCards>
            <SelectObjectButton
              key={"s-btn-1"}
              heading="website traffic"
              details="increase my website visits"
              icon={
                <MaterialCommunityIcon name="web" color="#C6C6C6" size={45} />
              }
              onClick={() => {
                return navigation?.navigate("CreateCampaignScreen");
              }}
            />

            <SelectObjectButton
              key={"s-btn-2"}
              textColor={"#EA514B"}
              heading="brand awareness"
              details="tell people about my brand"
              icon={
                <FontAwesome5Icon name="bullhorn" color="#EA514B" size={30} />
              }
              onClick={() => {
                return navigation?.navigate("CampaignScreen");
              }}
            />
          </SelectObjectCards>
        </CardSection>
      </Section>
    </SafeSection>
  );
};

export default HomeScreen;
