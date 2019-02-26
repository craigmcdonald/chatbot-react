import styled from 'styled-components';
import defaultTheme from '../../theme';

const ImageElement = styled.img`
  width: 40%;
  margin: 0 4px 0 4px;
  display: inline-block;
  cursor: pointer;

  &:hover { opacity: .7; }
`;

ImageElement.defaultProps = {
  theme: defaultTheme,
};

export default ImageElement;
