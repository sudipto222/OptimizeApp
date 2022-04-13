import { FC } from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconIcon from "react-native-vector-icons/Ionicons";

import {
  Section,
  ItemSection,
  LeftSeciton,
  RightSeciton,
  IconSection,
  DetailsSection,
  DetailsText,
  HeadingSection,
  HeadingText,
} from "./audienceCard.styled";

interface IAudienceCard {
  age_range: {
    min_age: number;
    max_age: number;
  };
  gender: {
    gender_id?: number;
    id?: number;
    name: string;
  };
  geos: Array<{
    country: {
      id: number;
      iso_alpha_2: string;
      name: string;
    };
  }>;
  languages: Array<{
    id: number;
    language_id: string;
    name: string;
  }>;
}

const AudienceCard: FC<IAudienceCard> = ({
  gender,
  age_range,
  geos,
  languages,
}) => {
  return (
    <Section>
      <ItemSection>
        <LeftSeciton>
          <IconSection>
            <FontAwesomeIcon name="venus-mars" color="#FF790A" size={30} />
          </IconSection>
        </LeftSeciton>
        <RightSeciton>
          <HeadingSection>
            <HeadingText>Gender</HeadingText>
          </HeadingSection>
          <DetailsSection>
            <DetailsText>{gender?.name ?? "-"}</DetailsText>
          </DetailsSection>
        </RightSeciton>
      </ItemSection>

      <ItemSection>
        <LeftSeciton>
          <IconSection>
            <MaterialCommunityIcon
              name="human-male-girl"
              color="#FF790A"
              size={30}
            />
          </IconSection>
        </LeftSeciton>
        <RightSeciton>
          <HeadingSection>
            <HeadingText>Age range</HeadingText>
          </HeadingSection>
          <DetailsSection>
            <DetailsText>
              {`${age_range?.min_age ? age_range?.min_age : "-"} - ${
                age_range?.max_age ? age_range?.max_age : "-"
              }`}
            </DetailsText>
          </DetailsSection>
        </RightSeciton>
      </ItemSection>

      <ItemSection>
        <LeftSeciton>
          <IconSection>
            <FontAwesomeIcon name="language" color="#FF790A" size={30} />
          </IconSection>
        </LeftSeciton>
        <RightSeciton>
          <HeadingSection>
            <HeadingText>Language</HeadingText>
          </HeadingSection>
          <DetailsSection>
            <DetailsText>
              {languages?.length >= 1
                ? languages?.map((item, i) => {
                    return `${item?.name}${
                      languages.length !== i + 1 ? "," : ""
                    }`;
                  })
                : "-"}
            </DetailsText>
          </DetailsSection>
        </RightSeciton>
      </ItemSection>

      <ItemSection>
        <LeftSeciton>
          <IconSection>
            <IoniconIcon name="location-sharp" color="#FF790A" size={30} />
          </IconSection>
        </LeftSeciton>
        <RightSeciton>
          <HeadingSection>
            <HeadingText>Location</HeadingText>
          </HeadingSection>
          <DetailsSection>
            <DetailsText>
              {geos?.length >= 1
                ? geos?.map((item, i) => {
                    return `${item?.country?.name}${
                      geos.length !== i + 1 ? "," : ""
                    }`;
                  })
                : "-"}
            </DetailsText>
          </DetailsSection>
        </RightSeciton>
      </ItemSection>
    </Section>
  );
};

export default AudienceCard;
