import * as assert from 'assert';
import workflow from '../src/index';
import stepTypes from '../src/steps.const';

suite('Workflow suite', () => {
  test('Workflow test', () => {
    const result = workflow({ test: 1, email: 'test@test.com' }, [
      stepTypes.STEP_INCREMENT,
      stepTypes.STEP_CHANGE,
      stepTypes.STEP_SEND_EMAIL,
      {step: stepTypes.STEP_CHANGE_EMAIL, email: 'other@test.com'}
    ]);

    assert.deepEqual({test: 'hi', email: 'other@test.com'}, result);
  });
});
