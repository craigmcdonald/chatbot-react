import styled from 'styled-components';
import defaultTheme from '../../theme';

const ImagePairElement = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

ImageElement.defaultProps = {
  theme: defaultTheme,
};

export default ImageElement;
