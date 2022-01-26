import useCounter from "../../src/models/counter/useCounter";

describe('userCounter', () => {
    it('tests increment works', () => {
        // Arrange
        const { counterValue, increaseCounterValue } = useCounter();
        // Act
        increaseCounterValue(2);
        increaseCounterValue(2);
        // Assert
        // TODO: need to mock store
        expect(counterValue.value).toBe(4);
    })
});
