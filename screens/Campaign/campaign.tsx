import { FC } from "react";

import { Navbar } from "../../components/Navbar/index";
import { TextInputIcon } from "../../components/TextInputIcon/index";
import { MediaCard } from "../../components/MediaCard/index";
import { Button } from "../../components/Button/index";
import { Spinner } from "../../components/Spinner/index";

import {
  SafeSection,
  Section,
  CardSection,
  ButtonSection,
  BlankView,
} from "./campaign.styled";

import { CampaignHook } from "./campaign.hook";

interface ICampaignScreen {
  navigation: any;
}

const CampaignScreen: FC<ICampaignScreen> = ({ navigation }) => {
  const {
    campaignNameValue,
    websiteValue,
    setCampaignNameValue,
    setWebsiteValue,
    image,
    setImage,
    campaignNameError,
    websiteError,
    submitHandel,
    imageError,
    loading,
  } = CampaignHook({ navigation });

  if (loading) {
    return <Spinner />;
  }

  return (
    <SafeSection>
      <Navbar navigation={navigation} activeScreen={2} adName="compose" />

      <Section
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <CardSection>
          <TextInputIcon
            key={"tic-1"}
            placeholder={"campaign name"}
            placeholderInput="Campaign name here"
            value={campaignNameValue}
            setValue={setCampaignNameValue}
            inputError={campaignNameError}
          />
          <TextInputIcon
            key={"tic-2"}
            placeholder={"website"}
            placeholderInput="Website url here"
            value={websiteValue}
            setValue={setWebsiteValue}
            inputError={websiteError}
          />
          <MediaCard
            image={image}
            setImage={setImage}
            inputError={imageError}
          />
        </CardSection>

        <ButtonSection>
          <Button label="next" onClick={submitHandel} />
        </ButtonSection>

        <BlankView />
      </Section>
    </SafeSection>
  );
};

export default CampaignScreen;
