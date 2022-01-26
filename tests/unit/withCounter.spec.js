import { mount } from '@vue/test-utils';
import Counter from "../../src/components/Counter";
import { WithCounter } from "../../src/models/counter/withCounter";

describe('withCounter', () => {
    it('tests that withCounter works', () => {
        // Arrange
        const component = WithCounter(2)(Counter);
        const wrapper = mount(component);
        // Act
        wrapper.vm.increment();
        wrapper.vm.increment();
        // Assert
        expect(wrapper.vm.counter).toBeTruthy();
    });
});