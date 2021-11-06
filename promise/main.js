const thousandArr = [...new Array(10000).keys()]

function logThousand() {
    for(let i = 0; i < thousandArr.length; i++) {
        console.log(i)
    }
}

function promiseExample() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random()

            if (random > 0.5) {
                return resolve('SUCCESS PROMİSE');
            } else {
                return reject('ERROR PROMİSE');
            }
        }, 2000)
    })
}

console.log('START')

// Cok uzun süre alan bir işlem
// Bu işlem benim kodumu blokluyor
// logThousand()

// logThousand fonskiyonu yerine bir promise içinde çalışan halini kullanırsak kodu bloklamamış oluruz
const myPromise = promiseExample()

myPromise
    .then(data => console.log(data))
    .catch(err => console.error(err))



// Günlük hayatta kullanacağımız promise işlemleri genellikle api isteklerinde kullanılır
const usersURL = 'https://jsonplaceholder.typicode.com/users';


fetch(usersURL) // bu değişken bir promise
    .then(response => response.json()) // bu method da yine bir promise dönüyor
    .then(users => console.log(users)) // yine then methodu kullanabiliriz
    .catch(err => console.log(err))


console.log('FİNİSH')


// Yukarıdaki fetch methodu ile aşağıdaki async/await kullanımı aynı sonucu konsola yazdıracak
// async/await keywordleri promiselerin daha okunabilir olması için 'then' methodu yerine
// kullanılan bir syntax sugar.


// async keywordu bir fonksiyonun içerisinde promise kullanıldığını javascripte anlatmaya yarar
async function fetchUsers() {
    // await keywordu promise kullanılan satırın sonuçlanmasını beklenmesini javascripte haber veriyor
    const response = await fetch(usersURL)

    const users = await response.json()

    console.log(users);
}

fetchUsers()