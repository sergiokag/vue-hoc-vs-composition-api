import { h } from 'vue';

export const WithCounter = (number = 1) => (WrappedComponent) => {
    return {
        data: () => ({
            counter: 0,
        }),

        methods: {
            increment() {
                this.counter += number;
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
