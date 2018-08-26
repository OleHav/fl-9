function reverseNumber(number) {
    if(number < 0) {
        number = +Math.abs(number);
        return -number
            .toString()
            .split('')
            .reverse()
            .join('')
    } else {
        return number
            .toString()
            .split('')
            .reverse()
            .join('')
    }
}