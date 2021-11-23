import { useCounter } from "../../utils/useCounter";

describe('userCounter', () => {
    it('tests increment works', () => {
        // Arrange
        const { counter, increment } = useCounter(2);
        // Act
        increment();
        increment();
        // Assert
        expect(counter.value).toBe(4);
    })
});
