export const compose =
    (...funcs) =>
        (a) =>
            funcs.reduceRight((result, func) => func(result), a);
