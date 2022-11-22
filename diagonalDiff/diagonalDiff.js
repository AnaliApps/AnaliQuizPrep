function diagonalDifference(arr) {
    // Write your code here
    let lrdiagonal = 0;
    let reversed = []
    let rldiagonal = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(i === j ){
                lrdiagonal += arr[i][j]
            }
        }
    }
    for(let i=arr.length-1;i>=0;i--){
        reversed.push(arr[i])
    }
    for(let k=0;k<reversed.length;k++){
        for(let l=0;l<reversed[k].length;l++){
            if(k === l ){
                rldiagonal += reversed[k][l]
                console.log(rldiagonal)
            }
        }
    }
    return Math.abs(lrdiagonal - rldiagonal)
}