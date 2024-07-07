import React from 'react';
import { View, Text } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const Progressbar = () => {
  const defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center'
    }
  };

  const onNextStep = () => {
    console.log('called next step');
  };

  const onPaymentStepComplete = () => {
    alert('Payment step completed!');
  };

  const onPrevStep = () => {
    console.log('called previous step');
  };

  const onSubmitSteps = () => {
    console.log('called on submit step.');
  };

  return (
    <View style={{ backgroundColor: '#F2F2F3' }}>
      <ProgressSteps>
        <ProgressStep
          label="Job detail"
          nextBtnText=""  // Hide Next button
          previousBtnText="" // Hide Previous button
          removeBtnRow={true}  // Remove button row
        >
        
        </ProgressStep>
        <ProgressStep
          label="Post Detail"
          nextBtnText=""  // Hide Next button
          previousBtnText="" // Hide Previous button
          removeBtnRow={true}  // Remove button row
       
        >
          
        </ProgressStep>
        <ProgressStep
          label="Preview"
          nextBtnText=""  // Hide Next button
          previousBtnText="" // Hide Previous button
          removeBtnRow={true}  // Remove button row
          
        >
          <View style={{ alignItems: 'center' }}>
            <Text>Preview step content</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Payment"
          nextBtnText=""  // Hide Next button
          previousBtnText="" // Hide Previous button
          removeBtnRow={true}  // Remove button row
        >
          
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default Progressbar;
