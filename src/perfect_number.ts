/**
 * Summary.
 * A Perfect Number N is defined as any positive integer where the sum of its divisors minus the number itself equals the number. 
 * 
 * Description.
 * @since 0.0.1
 * @param {number} N     Positive integer (base 10).
 * @returns {boolean}    If True then number N is perfect number.
 */
const isPerfectNumber = (N: number): boolean => {
    if(N <= 0) return false;
    
    let divisors: number[] = []
    const sequence = [...Array(N).keys()]
    sequence.forEach(seqEl => {
        if(N % seqEl === 0) divisors.push(seqEl);
    });

    const sum = divisors.reduce((a, b) => a + b, 0);
    return sum === N;
}

export default isPerfectNumber;