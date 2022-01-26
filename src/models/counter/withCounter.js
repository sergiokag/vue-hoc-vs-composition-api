import { h } from 'vue';
import useCounter from './useCounter';

const { counterValue, increaseCounterValue } = useCounter();

export const WithCounter = (number = 1) => (WrappedComponent) => {
    return {
        name: 'WithCounter',
        data: () => ({
            counter: counterValue,
        }),
        methods: {
            increment() {
                increaseCounterValue(number);
            },
        },
        render() {
            return h(WrappedComponent, {
                ...WrappedComponent.props,
                counter: this.counter,
                increment: this.increment
            })
        }
    }
};
