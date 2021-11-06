function myCallback(cb) {
    console.log('Calback fonksiyon calısacak');

    cb();

    console.log('Callback fonksiyon calıştı');
}

const callbackFn = () => console.log('BEN CALLBACK FONKSİYONUM!!!')

myCallback(callbackFn);

function add() {
    const sum = 4 + 3;
    console.log('TOPLAM', sum);
}

myCallback(add);


function performanceTracker(cb) {
    const start = Date.now()

    cb()

    const finish = Date.now()
    console.log(`Callback performance: ${finish - start}ms`)
}

const users = ['John', 'Jane', 'David', 'Bob', 'Alice']

function logNames() {
    for (let i = 0; i < users.length; i++) {
        console.log(users[i])
    }
}

performanceTracker(logNames)


// Custom forEach function
function forEach(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}

const greeting = (user) => console.log(`Hello I am, ${user}`)

forEach(users, greeting)

// Javascript forEach
users.forEach(greeting)

// setTimeout(callbackFn, 1000)
// setInterval(add, 1500)

for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 1000)
}

const numbers = [2, 5, 6, 12, 25, 67, 74, 37]

// bir arrayin tüm elemanlarına uygulanacak ve bu callback fonksiyonu ile değiştirilen bu elemanlardan oluşan yeni bir array dönüyor olması
function triple(x) {
    return x * 3;
}

const tripleNumbers = numbers.map(triple)

console.log(tripleNumbers);

function strNumbers(x) {
    return `STRİNG ${x}`
}

const convertToString = numbers.map(strNumbers);

console.log(convertToString)


const cars = [
    {id: 1, model: 'M3', brand: 'BMW', price: 39999, year: '2010'},
    {id: 2, model: 'S3', brand: 'AUDI', price: 42000, year: '2017'},
    {id: 3, model: 'E200', brand: 'Mercedes', price: 51000, year: '2019'},
    {id: 4, model: 'Astra', brand: 'OPEL', price: 35000, year: '2021'},
    {id: 5, model: 'S90', brand: 'Volvo', price: 44500, year: '2006'}
]

const carTexts = cars.map(car => `${car.brand} ${car.model} - ${car.price}`)

console.log(carTexts);

const filteredCars = cars.filter((car) => Number(car.year) > 2010)

console.log(filteredCars)

const audi = cars.find(car => car.brand === 'AUDI')

console.log(audi)