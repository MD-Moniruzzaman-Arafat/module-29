const items = [
    'iphone 12 pro max',
    'samsung s22 ultra',
    'mi mix 2',
    'oppo reno x5',
    'realme x2',
    'iphone 13 pro'
]
let product = [];
// for (const item of items) {
//     if (item.indexOf('realme') != -1) {
//         product.push(item)
//     }
// }

// for (const item of items) {
//     if (item.includes('iphone')) {
//         product.push(item);
//     }
// }

// for (const item of items) {
//     if (item.startsWith('m')) {
//         product.push(item);
//     }
// }

for (const item of items) {
    if (item.endsWith('2')) {
        product.push(item);
    }
}
console.log(product)