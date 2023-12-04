const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

//Реализовал вариант при котором можно получить строку любой длины без учета длины массива
function generateKey(length,arr){
    // инициализируем пустую строку с будущим результатом 
    let result = '';
    // проходим число итераций равное желаемой длине даже если она больше длины массива 
    for(let i = 1; i <= length; i++){
        //Генерируем случайный индекс массива от 0 до последнего индекса массива
        const randChar = Math.floor(Math.random() * arr.length);
        //получаем символ из массива по случайному индексу и добавляем его в строку
        result += arr[randChar];
    }
    // возращаем строку с результатом
    return result;
}

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i

// const key2 = generateKey(200, characters);
// console.log(key2);