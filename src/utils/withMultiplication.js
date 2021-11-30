import { h } from 'vue';

export const WithMultiplication = (multiply = 1) => (WrappedComponent) => {
    return {
        name: 'WithMultiplication',
        render() {
            return h(WrappedComponent, {
                ...WrappedComponent.props,
                multiply
            })
        }
    };
};
