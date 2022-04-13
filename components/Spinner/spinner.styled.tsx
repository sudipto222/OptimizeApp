import styled from "styled-components/native";

const Section = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.bluegem};

  align-items: center;
  justify-content: center;
`;

const IndicatorSection = styled.View`
  align-items: center;
  justify-content: center;
`;

export { Section, IndicatorSection };
