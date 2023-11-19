function printNumber(start, end) {
    const result = {
        collect: '',
        sum: 0,
    };
    for (let n = start; n <= end; n++) {
        result.collect += `${n} `;
        result.sum += n;
    }
    console.log(`${result.collect} \nSum: ${result.sum}`);
}
// printNumber(5, 10);
// printNumber(0, 26);
printNumber(50, 60);
