function getMin(...args) {
    let minArgument = args[0];
    for (let i = 1; i < args.length; i++) {
        if (args[i] < minArgument) {
            minArgument = args[i];
        }
    }
    return minArgument;
}