import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../common/Loading';
import ImageElement from './ImageElement';
import ImageGroupContainer from './ImageGroupContainer';

class ImageGroup extends Component {
  state = {
    loading: true,
  };

  onImageClick = ({ value }) => {
    const { triggerNextStep } = this.props;
    console.log(value);
    console.log('here');
    triggerNextStep( { value });
  }

  renderImage = (image) => {
    const { step } = this.props;
    const { user } = step;
    const { value, label, imgUrl } = image;

    return (
      <ImageElement
       className="n-image-el"
       user={user}
       src = {imgUrl}
       onClick={() => this.onImageClick({ value })}
      />
    );
  }

  componentDidMount() {
    const {
      speak,
      step,
      previousValue,
      triggerNextStep,
    } = this.props;
    const { delay, waitAction } = step;

    setTimeout(() => {
      this.setState({ loading: false }, () => {
        if (!waitAction && !step.rendered) {
          triggerNextStep();
        }
        speak(step, previousValue);
      });
    }, delay);
  }

  render() {
    const { loading } = this.state;
    const { style } = this.props;
    const { step } = this.props;
    const { images } = step;

    return (
      <ImageGroupContainer className="n-img-group-container" style={style}>
        { loading ? <Loading /> : Object.values(images).map(this.renderImage) }
      </ImageGroupContainer>
    );
  }
}

ImageGroup.propTypes = {
  previousStep: PropTypes.objectOf(PropTypes.any).isRequired,
  previousValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
  speak: PropTypes.func,
  step: PropTypes.objectOf(PropTypes.any).isRequired,
  steps: PropTypes.objectOf(PropTypes.any).isRequired,
  style: PropTypes.objectOf(PropTypes.any).isRequired,
  triggerNextStep: PropTypes.func.isRequired,
};
ImageGroup.defaultProps = {
  previousValue: '',
  speak: () => {},
};

export default ImageGroup;
