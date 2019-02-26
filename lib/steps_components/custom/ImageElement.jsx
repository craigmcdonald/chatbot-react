import styled from 'styled-components';
import defaultTheme from '../../theme';

const ImageElement = styled.img`
  width: 40%;
  display: inline-block;
`;

ImageElement.defaultProps = {
  theme: defaultTheme,
};

export default ImageElement;
