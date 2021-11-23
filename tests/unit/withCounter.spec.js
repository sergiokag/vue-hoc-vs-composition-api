import { shallowMount } from '@vue/test-utils'
import CounterPlusOne from "../../src/components/CounterPlusOne";
import { WithCounter } from "../../src/utils/withCounter";

describe('withCounter', () => {
    it('tests that withCounter works', () => {
        // Arrange
        const component = WithCounter(CounterPlusOne, 2);
        const wrapper = shallowMount(component);
        // Act
        wrapper.vm.increment();
        wrapper.vm.increment();
        // Assert
        expect(wrapper.vm.counter).toBe(4);
    });
});