import { FC } from "react";

import {
  Section,
  MediaSection,
  MediaImage,
  AddButtonSection,
  AddButton,
  IconSection,
  LabelSection,
  LabelText,
} from "./addMedia.styled";

const AddMedia: FC = () => {
  return (
    <Section>
      <MediaSection>
        <MediaImage
          source={{
            uri: "",
          }}
        />
      </MediaSection>
      <AddButtonSection>
        <AddButton>
          <IconSection></IconSection>
        </AddButton>
        <LabelSection>
          <LabelText></LabelText>
        </LabelSection>
      </AddButtonSection>
    </Section>
  );
};

export default AddMedia;
