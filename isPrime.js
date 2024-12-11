function isPrime(num) {
    const result = [];
    for (let j = 2; j <= num; j++) {
        let isPrime = true;
        for (let i = 2; i < j; i++) {
            if (j % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result.push(j);
        }
    }
    return result;
}

console.log(isPrime(11));
