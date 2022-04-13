import styled from "styled-components/native";

const TouchableSection = styled.TouchableOpacity``;

const Section = styled.View`
  height: 75px;
  width: 75px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.orange};

  align-items: center;
  justify-content: center;
`;

const IconSeciton = styled.View`
  align-items: center;
  justify-content: center;
`;

export { Section, IconSeciton, TouchableSection };
