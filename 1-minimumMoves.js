// input
    // 2 arrays with 2 values each
// output
    // incrementing or decrementing by 1 at a time, how many moves are needed
    // such that the first array becomes equal to the second one
    // return total number of moves

    // finished at 1:18 left;

// let a = [
//     1234,
//     4321
// ];

// let m = [
//     2345,
//     3214
// ];

function minimumMoves(a, m) {
    let totalMoves = 0;

    let aString = a.join("");
    let mString = m.join("");

    for (let i = 0; i < aString.length; i++) {
        const aNumber = parseInt(aString[i]);
        const mNumber = parseInt(mString[i]);
        
        totalMoves += Math.abs( aNumber - mNumber );
    }

   return totalMoves;
}

// minimumMoves(a, m);