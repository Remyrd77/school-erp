import React, { Component } from "react";
import FormContainer from "../../../components/containers/FormContainer";
import AdmissionMultistepRouter from "../../../router/AdmissionMultistepRouter";

export default class NewAdmission extends Component {
  render() {
    return (
      <FormContainer>
        {/* <div className='step-progress'>
                    <StepZilla
                        steps={steps}
                        stepsNavigation={true}
                        prevBtnOnLastStep={true}
                        startAtStep={0}
                        showSteps={true}
                        dontValidate={true}
                        nextButtonCls="btn"
                        nextTextOnFinalActionStep="Submit"
                    />
                </div> */}
        <AdmissionMultistepRouter />
      </FormContainer>
    );
  }
}
