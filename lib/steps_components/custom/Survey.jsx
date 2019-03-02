import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../common/Loading';
import SurveyContainer from './SurveyContainer';
import SurveyViewer from './SurveyViewer';
import { ReactTypeformEmbed } from 'react-typeform-embed';

class Survey extends Component {
  state = {
    loading: true,
  };

  onSurveyCallback = () => {
    const { triggerNextStep } = this.props;
    const { step } = this.props;
    const { survey } = step;
    const { surveyUrl } = survey;
    
    triggerNextStep({ surveyUrl });
  }

  renderSurvey = () => {
    const { step } = this.props;
    const { nUuid } = this.props;
    const { survey } = step;
    const { surveyUrl } = survey;

    return (
      <SurveyViewer>
        <ReactTypeformEmbed
          url={surveyUrl+'?'+'nUuid='+nUuid}
          hideHeaders={true}
          hideFooters={true}
          opacity={0}
          onSubmit={() => this.onSurveyCallback()}
        />
      </SurveyViewer>
    )
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
      this.setState( { loading: false }, () => {
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

    return (
      <SurveyContainer className="n-survey-container" style={style}>
        { loading ? <Loading /> : this.renderSurvey() }
      </SurveyContainer>
    );
  }
}

Survey.propTypes = {
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
  nUuid: PropTypes.string,
};

Survey.defaultProps = {
  previousValue: '',
  speak: () => {},
}

export default Survey;
