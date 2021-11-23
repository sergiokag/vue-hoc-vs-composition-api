import { ref } from "vue";

export const useCounter = (num = 1) => {

    const counter = ref(0);
    const increment = () => {
        counter.value += num
    };

    return {
        counter,
        increment,
    };
};
