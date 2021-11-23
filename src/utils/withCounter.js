import { h } from 'vue';

export const WithCounter = (WrappedComponent, number = 1) => {
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
                counter: this.counter,
                increment: this.increment
            })
        }
    }
};
