import { INCREASE_COUNTER } from "./actions";

export function reducer(state = 0, { type, payload }) {
    switch (type) {
        case INCREASE_COUNTER:
            return payload ?? state;
        default:
            return state;
    }
}