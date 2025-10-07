function perfectNumber(num) {

    let divisors = getDivisors(num);
    let sum = sumArray(divisors);

    if (sum === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }

    function getDivisors(n) {
        let divisors = [];
        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                divisors.push(i);
            }
        }
        return divisors;
    }

    function sumArray(arr) {
        let sum = 0;
        for (let el of arr) {
            sum += el;
        }
        return sum;
    }
   
}


perfectNumber(6);     
perfectNumber(28);    
perfectNumber(10);    