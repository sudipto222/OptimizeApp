import { FC } from "react";

import { Performance } from "../../components/Performance/index";
import { NavbarHeader } from "../../components/NavbarHeader/index";
import { AudienceCard } from "../../components/AudienceCard/index";
import { MediaAdCard } from "../../components/MediaAdCard/index";
import { CopyText } from "../../components/CopyText/index";
import { Spinner } from "../../components/Spinner/index";

import {
  SafeSection,
  Section,
  PerformanceSection,
  CardsSection,
  DestinationSection,
  HeadingSection,
  HeadingText,
  Card1Section,
  Card2Section,
  ProgressBarSection,
  CardSection,
  CopyInputSection,
} from "./campaignDetails.styled";

import { CampaignDetailsHook } from "./campaignDetails.hook";

interface ICampaignDetailsScreen {
  navigation: any;
}

const CampaignDetailsScreen: FC<ICampaignDetailsScreen> = ({ navigation }) => {
  const { loading, campaignData } = CampaignDetailsHook();

  if (loading) {
    return <Spinner />;
  }

  return (
    <SafeSection>
      <Section>
        <NavbarHeader
          navigation={navigation}
          props={{
            name: campaignData?.name,
            campaign_end: campaignData?.campaign_end === 1,
          }}
        />

        <PerformanceSection>
          <HeadingSection>
            <HeadingText>ad performance</HeadingText>
          </HeadingSection>

          <ProgressBarSection>
            <Performance
              props={{
                lifetime_budget:
                  campaignData?.campaign?.adsquads?.lifetime_budget,
                spend: campaignData?.campaign?.metrics?.spend,
              }}
            />
          </ProgressBarSection>
        </PerformanceSection>

        <CardsSection>
          <Card1Section>
            <HeadingSection>
              <HeadingText>media</HeadingText>

              <CardSection>
                <MediaAdCard
                  image_url={
                    campaignData?.campaign?.adsquads?.creatives?.media?.url
                  }
                />
              </CardSection>
            </HeadingSection>
          </Card1Section>

          <Card2Section>
            <HeadingSection>
              <HeadingText>audience</HeadingText>
            </HeadingSection>

            <CardSection>
              <AudienceCard
                age_range={
                  campaignData?.campaign?.adsquads?.targeting?.age_range
                }
                gender={campaignData?.campaign?.adsquads?.targeting?.gender}
                geos={campaignData?.campaign?.adsquads?.targeting?.geos}
                languages={
                  campaignData?.campaign?.adsquads?.targeting?.languages
                }
              />
            </CardSection>
          </Card2Section>
        </CardsSection>

        <DestinationSection>
          <HeadingSection>
            <HeadingText>ad destination</HeadingText>

            <CopyInputSection>
              <CopyText
                copyText={`${campaignData?.campaign?.adsquads?.creatives?.attachment?.url}`}
              />
            </CopyInputSection>
          </HeadingSection>
        </DestinationSection>
      </Section>
    </SafeSection>
  );
};

export default CampaignDetailsScreen;
