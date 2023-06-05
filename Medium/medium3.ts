function modifyArray(array: number[], doubleValue: (value: number) => number): number[] {
    return array.map(doubleValue);
    }
    
    const numbers = [5,10,15,20];
    function doubleValue(value: number): number {
    return value * 2;
    }
    const modifiedNumbers = modifyArray(numbers, doubleValue);
    console.log(modifiedNumbers);
    