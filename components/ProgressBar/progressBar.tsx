import { FC } from "react";
import { CircularProgress } from "@computools/react-native-circular-progress";
import FoundationIcon from "react-native-vector-icons/Foundation";

import {
  Section,
  InfoSection,
  InfoLeftSection,
  InfoRightSection,
  HeadingSection,
  IconSection,
  HeadingText,
  RemainSection,
  RemainText,
  TotoalSection,
  TotalText,
} from "./ProgressBar.styled";

interface IProgressBar {
  props: {
    lifetime_budget: number;
    spend: number;
  };
}

const ProgressBar: FC<IProgressBar> = ({ props }) => {
  const percentRatio = 100;
  const totalSpend = props?.spend ? props.spend : 0;
  const totalBudget = props?.lifetime_budget ? props.lifetime_budget : 0;

  return (
    <Section>
      <CircularProgress
        size={150}
        width={12}
        fill={Math.round((totalSpend / totalBudget) * percentRatio)}
        tintColor={"#FF790A"}
        dangerTintColor={"#FF790A"}
        dangerValue={50}
        lineCap="round"
        backgroundColor={"#3f0c8d"}
      >
        {() => (
          <InfoSection>
            <InfoLeftSection>
              <IconSection>
                <FoundationIcon name="dollar" color={"#ffffff"} size={35} />
              </IconSection>
            </InfoLeftSection>
            <InfoRightSection>
              <HeadingSection>
                <HeadingText>spend</HeadingText>
              </HeadingSection>

              <RemainSection>
                <RemainText>{`$${totalSpend}`}</RemainText>
              </RemainSection>

              <TotoalSection>
                <TotalText>out of {`$${totalBudget}`}</TotalText>
              </TotoalSection>
            </InfoRightSection>
          </InfoSection>
        )}
      </CircularProgress>
    </Section>
  );
};

export default ProgressBar;
