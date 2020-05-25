/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
export const findJudge = function(N, trust) {
    if (N === 1) return 1;
    let counter = new Map();
    let trustSomebody = new Map();
    let judge = -1;
    trust.forEach(([a, b]) => {
        counter.set(b, (counter.get(b) || 0) + 1);
        trustSomebody.set(a, true);
    });

    counter.forEach((val, key) => {
        if (val == N - 1 && !trustSomebody.has(key)) {
            judge = key;
            return;
        }
    });

    return judge;
};