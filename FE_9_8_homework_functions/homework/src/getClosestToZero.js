function getClosestToZero() {
    let ClosestToZero = arguments[0];
    for(let i = 1; i < arguments.length; i++) {
        if(Math.abs(arguments[i]) < Math.abs(ClosestToZero)) {
            ClosestToZero = arguments[i];
        }
    }
    return ClosestToZero;   
}