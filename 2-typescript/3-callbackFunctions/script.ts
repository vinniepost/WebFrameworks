const array1 = ['Sven'];
const array2 = ['Sven', 'Silke'];
const array3 = ['Andie', 'Kelly', 'Silke'];

// Callback functie die controleert of de lengte van een string gelijk is aan 4
const isLengthFour = (item: string): boolean => {
    return item.length === 4;
};

// Filteren op lengte van 4 met een callback functie
const filterByLength = (arr: string[], callback: (item: string) => boolean): string[] => {
    return arr.filter(callback);
};

console.log(filterByLength(array1, isLengthFour)); // Output: []
console.log(filterByLength(array2, isLengthFour)); // Output: []
console.log(filterByLength(array3, isLengthFour)); // Output: ['Kelly']

// Callback functie die controleert of een string begint met de letter 'S'
const startsWithS = (item: string): boolean => {
    return item.startsWith('S');
};

console.log(filterByLength(array1, startsWithS)); // Output: ['Sven']
console.log(filterByLength(array2, startsWithS)); // Output: ['Sven', 'Silke']
console.log(filterByLength(array3, startsWithS)); // Output: ['Silke']

// Callback functie die controleert of de index van een element even is
const isEvenIndex = (item: string, index: number): boolean => {
    return index % 2 === 0;
};

// Filteren op even elementen (positie in de lijst) met een callback functie
const filterByIndex = (arr: string[], callback: (item: string, index: number) => boolean): string[] => {
    return arr.filter(callback);
};

console.log(filterByIndex(array1, isEvenIndex)); // Output: ['Sven']
console.log(filterByIndex(array2, isEvenIndex)); // Output: ['Sven']
console.log(filterByIndex(array3, isEvenIndex)); // Output: ['Andie', 'Silke']
