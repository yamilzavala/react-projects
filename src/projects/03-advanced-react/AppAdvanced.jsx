import './indexAdvanced.css';
import ErrorExample from './tutorial/01-useState/starter/01-error-example';
import UseStateArray from './tutorial/01-useState/starter/03-useState-array';
import UseStateObject from './tutorial/01-useState/starter/04-useState-object';
import CodeExample from './tutorial/02-useEffect/starter/01-code-example';
import UseEffectBasics from './tutorial/02-useEffect/starter/02-useEffect-basics';
import MultipleEffects from './tutorial/02-useEffect/starter/03-multiple-effects';
import FetchData from './tutorial/02-useEffect/starter/04-fetch-data';
import CleanupFunction from './tutorial/02-useEffect/starter/05-cleanup-function';
import MultipleReturnsBasics from './tutorial/03-conditional-rendering/starter/01-multiple-returns-basics';
import MultipleReturnsFetchData from './tutorial/03-conditional-rendering/starter/02-multiple-returns-fetch-data';
import ShortCircuitOverview from './tutorial/03-conditional-rendering/starter/04-short-circuit-overview';
import ShortCircuitExamples from './tutorial/03-conditional-rendering/starter/05-short-circuit-examples';
import ToggleChallenge from './tutorial/03-conditional-rendering/starter/06-toggle-challenge';
import UserChallenge from './tutorial/03-conditional-rendering/starter/07-user-challenge';
import ControlledInputs from './tutorial/06-forms/starter/01-controlled-inputs';
import UserChallengeForms from './tutorial/06-forms/starter/02-user-challenge-forms';
import MultipleInputs from './tutorial/06-forms/starter/03-multiple-inputs';
import OtherInputs from './tutorial/06-forms/starter/04-other-inputs';
import UncontrolledInputs from './tutorial/06-forms/starter/05-form-data';


function AppAdvanced() {
  return (
    <>
      {/* useState */}
      {/* <ErrorExample/> */}
      {/* <UseStateArray/> */}
      {/* <UseStateObject/> */}

      {/* useEffect */}
      {/* <CodeExample/> */}
      {/* <UseEffectBasics/> */}
      {/* <MultipleEffects/> */}
      {/* <FetchData/> */}
      {/* <CleanupFunction/> */}

      {/* Multiple returns */}
      {/* <MultipleReturnsBasics/> */}
      {/* <MultipleReturnsFetchData/> */}

      {/*show content conditianally  */}
      {/* <ShortCircuitOverview/> */}
      {/* <ShortCircuitExamples/> */}
      {/* <ToggleChallenge/> */}
      {/* <UserChallenge/> */}

      {/* forms */}
      {/* <ControlledInputs/> */}
      {/* <UserChallengeForms/> */}
      {/* <MultipleInputs/> */}
      {/* <OtherInputs/> */}
      <UncontrolledInputs/>

    </>
  );
}

export default AppAdvanced;
