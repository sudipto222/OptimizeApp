import { FC, useState } from "react";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import * as Clipboard from "expo-clipboard";
import { useToast } from "react-native-toast-notifications";

import {
  Section,
  RightSection,
  LeftSection,
  DetailsSection,
  DetailsText,
  IconSection,
  TouchableSection,
} from "./copyText.styled";

interface ICopyText {
  copyText: string;
}

const CopyText: FC<ICopyText> = ({ copyText }) => {
  const toast = useToast();

  const copyToClipboard = async () => {
    Clipboard.setString(`${copyText}`);

    toast.show("copy url successfully", {
      type: "success",
      placement: "bottom",
      duration: 4000,
      animationType: "slide-in",
    });
  };

  return (
    <Section>
      <RightSection>
        <DetailsSection>
          <DetailsText>{copyText ? copyText : "Failed to load"}</DetailsText>
        </DetailsSection>
      </RightSection>
      <LeftSection>
        {copyText && (
          <TouchableSection activeOpacity={0.8} onPress={copyToClipboard}>
            <IconSection>
              <AntDesignIcon name="copy1" color="#ffffff" size={25} />
            </IconSection>
          </TouchableSection>
        )}
      </LeftSection>
    </Section>
  );
};

export default CopyText;
