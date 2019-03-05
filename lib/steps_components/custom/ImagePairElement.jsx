import styled from 'styled-components';
import defaultTheme from '../../theme';

const ImagePairElement = styled.div`
  display: flex;
  justify-content: center;
`;

ImagePairElement.defaultProps = {
  theme: defaultTheme,
};

export default ImagePairElement;
