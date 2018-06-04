export function findOccurencesOfActionTypes(accumulator, current) {
    if (!accumulator[current]) {
        accumulator[current] = 1;
    } else {
        accumulator[current] += 1;
    }

    return accumulator;
}

export function logCounter(givenArray) {
    const groupings = givenArray.reduce(findOccurencesOfActionTypes, {});
    return groupings;
}