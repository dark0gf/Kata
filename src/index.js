import steps from './workflow-steps';
import stepTypes from './steps.const';

const stepTypeToStep = {
  [stepTypes.STEP_INCREMENT]: steps.incrementStep,
  [stepTypes.STEP_CHANGE]: steps.changeStep,
  [stepTypes.STEP_SEND_EMAIL]: steps.sendStep,
  [stepTypes.STEP_CHANGE_EMAIL]: steps.changeEmailStep,
};

const workflow = (input, steps) => steps.reduce((acc, stepValue) => {
  let step, args;
  if (typeof stepValue == 'string') {
    step = stepValue;
  } else {
    step = stepValue.step;
    args = stepValue;
  }
  const stepExecutor = stepTypeToStep[step];
  if (!stepExecutor) {
    return acc;
  }
  console.log(step);
  return args ? stepExecutor(acc, args) : stepExecutor(acc);
}, input);

module.exports = workflow;