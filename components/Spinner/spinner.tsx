import { FC } from "react";
import { ActivityIndicator } from "react-native";

import { Section, IndicatorSection } from "./spinner.styled";

const Spinner: FC = () => {
  return (
    <Section>
      <IndicatorSection>
        <ActivityIndicator size="large" color="#ffffff" />
      </IndicatorSection>
    </Section>
  );
};

export default Spinner;
