import styled from "styled-components/native";

const Section = styled.View`
  width: 160px;
  height: 250px;
  background-color: ${(props) => props.theme.lightBluegem};
  border-radius: 30px;
  overflow: hidden;
`;

const MediaSection = styled.View`
  height: 100%;
  width: 100%;
`;

const MediaImage = styled.Image`
  height: 100%;
  width: 100%;
`;

export { MediaImage, MediaSection, Section };
