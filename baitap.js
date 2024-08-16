let arr = [1, 5, 6, 8, 3, 11, 9, 15, 14, 20, -1];

// 1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu.
let newArr = arr.filter(x => x > 5);
console.log(newArr);

// 2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.
const sum = arr.reduce((temp, currentValue) => temp + currentValue);
console.log(sum);

// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy".
const findV = (arr, v) => {
    const filterV = arr.filter(value => value === v);
    return filterV.length > 0 ? v : 'Không tìm thấy!!!';
}
console.log(findV(arr, 4));

// 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không?.
const isPositive = (arr) => {
    const bigger0 = arr.filter(value => value >= 0);
    return bigger0.length >= arr.length ?
        'Tất cả phần tử trong mảng lớn hơn 0!!!' :
        'Trong mảng có phần tử nhỏ hơn 0!!!';
}
console.log(isPositive(arr));

// 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.
const findGreaterValue = (arr) => {
    const find = arr.filter(value => value > 3);
    return find.length > 0 ? find[0]: 'Không tìm thấy!!!';
}
console.log(findGreaterValue(arr));

// 6. Sử dụng destructuring với rest parameter để
// trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".
const [first, ...rest] = arr;
console.log('first = ' + first);
console.log('rest = ' + rest);

// 7. Sử dụng destructuring để
// trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
const person = {
    name: 'Pham Hoang An',
    age: 23
}
let {name:fullName, age:age} = person;
console.log('Full Name : ' +fullName);
console.log('Age : ' + age);

// 8. Sử dụng Rest parameter và Spread operator để
// tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
const sum = (...listNumber) => {
    return listNumber.reduce((temp, currentValue) => temp + currentValue, 0);
};
console.log(sum(1,2,3,4,5,6));

// 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về
// chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.
const hello = (...names) => {
    return names.reduce((total, name) => total + ", " + name, "Welcome")
}
console.log(hello('An', 'Tho', 'Tri'))

// 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages"
// bằng cách sử dụng Enhanced object literals.
// Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.
const book = {
    title: 'One Piece',
    author: 'Oda Eiichiro',
    pages: 1121,

    displayInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Pages: ${this.pages}`);
    }
};
book.displayInfo();
