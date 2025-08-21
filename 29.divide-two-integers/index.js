/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let ans = 0;
    let positive = (dividend >= 0 && divisor >= 0) || (dividend < 0 && divisor < 0);
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    if (dividend < divisor) {
        return 0;
    }

    let str = dividend + '';
    let remainder = 0;
    let i = 0;
    while (i < str.length) {
        ans *= 10;
        let roundQuotient = 0;
        remainder = remainder * 10 + parseInt(str[i], 10);
        while (remainder >= divisor) {
            remainder -= divisor;
            roundQuotient++;
        }
        i++;
        ans += roundQuotient;
    }
    return positive ? Math.min(ans, Math.pow(2, 31) - 1) : Math.max(0 - ans, Math.pow(-2, 31));
};