import { ref } from 'vue';
import store from '../../store/';
import { INCREASE_COUNTER } from './actions';

const useCounter = () => {
    // TODO: use selectors
    const initialValue = store.getState().counter;
    const counterValue = ref(initialValue);
    return {
        counterValue,
        increaseCounterValue: (step = 1) => {
            const newValue = counterValue.value + step;
            counterValue.value = newValue;
            store.dispatch({
                type: INCREASE_COUNTER,
                payload: newValue
            });
        }
    }
};

export default useCounter;
