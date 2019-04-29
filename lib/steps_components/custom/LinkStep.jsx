import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../common/Loading';
import LinkContainer from './LinkContainer';

class LinkStep extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true,
      step: this.props.step,
      style: this.props.style,
    }
  }

  componentDidMount() {
    const {
      speak,
      step,
      previousValue,
      triggerNextStep
    } = this.props;
    const { delay, waitAction } = step;

    setTimeout(() => {
      this.setState({ loading: false}, () => {
        if (!waitAction && !step.rendered) {
          triggerNextStep();
        }
        speak(setp, previousValue);
      });
    }, delay);
  }

  linkClick = () => {
    const { linkUrl, resetStore, storeId, delay } = this.state.step;
    if (resetStore) {
      localStorage.removeItem(storeId);
    }
    setTimeout(() => {
      window.location = linkUrl
    }, delay);
  }

  renderLink = () => {
    const { linkText, icon} = this.state.step;

    return (
      <div>
        { icon ? <LinkIcon className={`${icon} n-link-icon` } /> : ''}
        <LinkSpan className="n-link-span">
          { linkText }
        </LinkSpan>
      </div>
    )
  }

  render() {
    const { loading, style } = this.state;
    return(
      <LinkContainer onClick={ this.linkClick } className="n-link-container">
        { loading ? <Loading /> : this.renderLink() }
      </LinkContainer>
    )
  }
}

LinkStep.propTypes = {
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

LinkStep.defaultProps = {
  previousValue: '',
  speak: () => {},
};

export default LinkStep;
