import { FC, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import {
  Section,
  Image,
  ActionSection,
  ButtonSection,
  IconSection,
  HeadingSection,
  HeadingText,
  ImageSection,
  TouchableSection,
  Container,
  ErrorMessageSection,
  ErrorMessageText,
} from "./mediaCard.styled";

interface IMediaCard {
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  inputError: string | null;
}

const MediaCard: FC<IMediaCard> = ({ image, setImage, inputError }) => {
  // pick image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    if (!result?.cancelled) {
      setImage(result?.uri);
    }
  };

  return (
    <Container>
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
        {image && (
          <ImageSection>
            <Image
              source={{
                uri: image,
              }}
              resizeMode="stretch"
            />
          </ImageSection>
        )}

        <ActionSection>
          <TouchableSection activeOpacity={0.8} onPress={pickImage}>
            <ButtonSection>
              <IconSection>
                <FontAwesomeIcon name="camera" color="#FF790A" size={30} />
              </IconSection>
            </ButtonSection>
          </TouchableSection>

          <HeadingSection>
            <HeadingText>{image ? "edit media" : "add media"}</HeadingText>
          </HeadingSection>
        </ActionSection>
      </Section>

      {inputError && (
        <ErrorMessageSection>
          <ErrorMessageText>{inputError}</ErrorMessageText>
        </ErrorMessageSection>
      )}
    </Container>
  );
};

export default MediaCard;
