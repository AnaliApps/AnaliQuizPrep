function pageCount(n, p) {
    // Write your code here
    if(n-p === 0 ){
        return 0;
    }else if(n-p === 1 && p > 1){
        return p%2===0 ? 0 : 1
    }
    else if(n-p < p){
        return Math.floor((n-p)/2)
    }else{
        return Math.floor(p/2)
    }
}