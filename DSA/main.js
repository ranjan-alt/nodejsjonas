function minStars(scores) {
    const n = scores.length;
    console.log(n)
    const left = new Array(n).fill(1);
    console.log(left)
    // const right = new Array(n).fill(1);

    // Traverse from left to right, assigning stars based on behavior scores
    for (let i = 1; i < n; i++) {
        debugger
        if (scores[i] > scores[i - 1]) {

            left[i] = left[i - 1] + 1;
        }
    }


    // Traverse from right to left, assigning stars based on behavior scores
    // for (let i = n - 2; i >= 0; i--) {
    //     if (scores[i] > scores[i + 1]) {
    //         right[i] = right[i + 1] + 1;
    //     }
    // }

    return scores
    // Calculate the total number of stars required
    // let totalStars = 0;
    // for (let i = 0; i < n; i++) {
    //     totalStars += Math.max(left[i], right[i]);
    // }

    // return totalStars;
}

// Test cases
console.log(minStars([3, 4, 5])); // Output: 5
