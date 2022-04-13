import { FC } from "react";

import { Section, MediaImage, MediaSection } from "./mediaAdCard.styled";

interface IMediaAdCard {
  image_url: string;
}

const MediaAdCard: FC<IMediaAdCard> = ({ image_url }) => {
  return (
    <Section>
      <MediaSection>
        <MediaImage
          source={{
            uri: image_url,
          }}
          resizeMode="cover"
        />
      </MediaSection>
    </Section>
  );
};

export default MediaAdCard;
