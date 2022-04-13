import { FC } from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

import {
  BackButton,
  BackIconSection,
  ProgressSection,
  Section,
  InfoSection,
  InfoIconSection,
  InfoDetailsSection,
  InfoDetailsText,
  ProgressItem,
  ProgressItemText,
  ProgressItemDetails,
  ProgressItemDetailsText,
  ProgressItemSection,
  ProgressDisableItem,
  ProgressItemDisableDetails,
  ProgressItemDisableDetailsText,
  ProgressItemDisableSection,
  ProgressItemDisableText,
  TouchableSection,
} from "./navbar.styled";

interface INavbar {
  activeScreen: number;
  adName: string;
  navigation: any;
}

const Navbar: FC<INavbar> = ({ activeScreen, adName, navigation }) => {
  const screens = [
    {
      id: "ni-1",
      title: "details",
    },
    {
      id: "ni-1",
      title: "compose",
    },
  ];

  return (
    <Section
      style={{
        shadowColor: "#00000057",
        shadowOffset: {
          width: 0,
          height: 50,
        },
        shadowOpacity: 1,
        shadowRadius: 40,
        elevation: 5,
      }}
    >
      <TouchableSection
        activeOpacity={0.8}
        onPress={() => {
          return navigation && navigation?.goBack(null);
        }}
      >
        <BackButton>
          <BackIconSection>
            <FontAwesomeIcon name="angle-left" color="#5410BF" size={40} />
          </BackIconSection>
        </BackButton>
      </TouchableSection>

      <InfoSection>
        <InfoIconSection>
          <MaterialCommunityIcon name="snapchat" color="#000000" size={40} />
        </InfoIconSection>
        <InfoDetailsSection>
          <InfoDetailsText>{adName ? `${adName} ad` : "ad"}</InfoDetailsText>
        </InfoDetailsSection>
      </InfoSection>

      <ProgressSection>
        {screens?.map((item, i) => {
          return (
            <>
              {activeScreen === i + 1 ? (
                <ProgressItemSection key={`${item.id}-${i}`}>
                  <ProgressItem>
                    <ProgressItemText>{i + 1}</ProgressItemText>
                  </ProgressItem>
                  <ProgressItemDetails>
                    <ProgressItemDetailsText>
                      {item.title}
                    </ProgressItemDetailsText>
                  </ProgressItemDetails>
                </ProgressItemSection>
              ) : (
                <ProgressItemDisableSection key={`${item.id}-${i}`}>
                  <ProgressDisableItem>
                    <ProgressItemDisableText>{i + 1}</ProgressItemDisableText>
                  </ProgressDisableItem>
                  <ProgressItemDisableDetails>
                    <ProgressItemDisableDetailsText>
                      {item.title}
                    </ProgressItemDisableDetailsText>
                  </ProgressItemDisableDetails>
                </ProgressItemDisableSection>
              )}
            </>
          );
        })}
      </ProgressSection>
    </Section>
  );
};

export default Navbar;
