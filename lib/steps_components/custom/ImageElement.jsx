import styled from 'styled-components';
import defaultTheme from '../../theme';

const ImageElement = styled.img`
  max-width: 100px;
  max-height: 120px;
  padding:10px;
  background-color: #D3D3D3;
  margin: 0 4px 4px 4px;
  display: inline-block;
  cursor: pointer;

  &:hover { opacity: .7; }
`;

ImageElement.defaultProps = {
  theme: defaultTheme,
};

export default ImageElement;
