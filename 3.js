// Перепишите код, заменив оператор `switch` на оператор `if..else`:

////////////////// Задание //////////////////
// const value = 'c';

// switch (value) {
//     case 'a':
//         console.log('a');
//         break;

//     case 'b':
//     case 'c':
//     case 'd':
//     case 'e':
//         console.log('others');
//         break;

//     default:
//         console.log('unknown');
// }

////////////////// Решение /////////////////

const isValue = 'c';

if (isValue) {
    if (isValue === 'a') {
        console.log('a');
    } else {
        console.log('others')
    }
} else {
    console.log('Error.');
}
