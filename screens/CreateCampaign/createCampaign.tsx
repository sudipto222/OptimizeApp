import { FC } from "react";

import { Navbar } from "../../components/Navbar/index";
import { TextInput } from "../../components/TextInput/index";
import { ButtonIcon } from "../../components/ButtonIcon/index";
import { Spinner } from "../../components/Spinner/index";

import {
  SafeSection,
  Section,
  CardSection,
  InputsSection,
  ButtonSection,
} from "./createCampaign.styled";

import { CreateCampaignHook } from "./createCampaign.hook";

interface ICreateCampaignScreen {
  navigation: any;
}

const CreateCampaignScreen: FC<ICreateCampaignScreen> = ({ navigation }) => {
  const {
    adNameValue,
    objectiveValue,
    setAdNameValue,
    setObjectiveValue,
    adNameError,
    objectiveError,
    submitHandel,
    loading,
  } = CreateCampaignHook({ navigation });

  if (loading) {
    return <Spinner />;
  }

  return (
    <SafeSection>
      <Navbar navigation={navigation} activeScreen={1} adName="snap" />

      <Section>
        <CardSection>
          <InputsSection>
            <TextInput
              key={"ti-1"}
              placeholder={"ad name"}
              placeholderInput="Enter Your campaign' name"
              value={adNameValue}
              setValue={setAdNameValue}
              inputError={adNameError}
            />
            <TextInput
              key={"ti-2"}
              placeholder={"objective"}
              placeholderInput="Website Traffic"
              value={objectiveValue}
              setValue={setObjectiveValue}
              inputError={objectiveError}
            />
          </InputsSection>
          <ButtonSection>
            <ButtonIcon onClick={submitHandel} />
          </ButtonSection>
        </CardSection>
      </Section>
    </SafeSection>
  );
};

export default CreateCampaignScreen;
