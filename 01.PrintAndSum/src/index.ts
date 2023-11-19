interface printResult {
    collect: string,
    sum: number,
}

function printNumber(start: number, end: number): void {
    const result: printResult = {
        collect: '',
        sum: 0,
    }

    for(let n = start; n <= end; n++) {
        result.collect += `${n} `;
        result.sum += n;
    }
    console.log(`${result.collect} \nSum: ${result.sum}`);
}

// printNumber(5, 10);
// printNumber(0, 26);
printNumber(50, 60);