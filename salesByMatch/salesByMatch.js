function sockMerchant(n, ar) {
    // Write your code here
    const count = {};
    let res = [];
    ar.forEach(e => count[e] ? count[e]++ : count[e]=1)
    for (const key in count){
        if(count[key] > 1){
            res.push(Math.floor(count[key]/2))
        }
    }
    let sum = res.reduce((a,b) => a + b,0)
    return sum 
}