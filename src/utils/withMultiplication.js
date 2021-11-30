import { h } from 'vue';

export const WithMultiplication = (multiply = 1) => (WrappedComponent) => {
    return {
        render() {
            return h(WrappedComponent, {
                ...WrappedComponent.props,
                multiply
            })
        }
    };
};
