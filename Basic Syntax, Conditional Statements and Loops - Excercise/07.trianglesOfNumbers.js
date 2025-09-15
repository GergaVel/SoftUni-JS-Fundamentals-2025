function triangle(n) {
    for (let row = 1; row <= n; row++) {
        let line = "";
        for (let col = 1; col <= row; col++) {
            line += row; // repeat the row number
        }
        console.log(line);
    }
}

triangle(5);
