import { FC } from "react";
import CircularProgress from "react-native-circular-progress-indicator";

import { ProgressBar } from "../ProgressBar/index";

import { Section, ProgressBarSection, InfoSection } from "./performance.styled";

interface IPerformance {
  props: {
    lifetime_budget: number;
    spend: number;
  };
}

const Performance: FC<IPerformance> = ({ props }) => {
  return (
    <Section>
      <ProgressBarSection>
        <ProgressBar props={props} />
      </ProgressBarSection>

      <InfoSection></InfoSection>
    </Section>
  );
};

export default Performance;
