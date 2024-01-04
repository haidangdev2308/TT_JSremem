//ES5 Arrow function, default parameters

const sum = (a,b = 3) => {
    return a + b
}
console.log(sum(3,6)); //9
console.log(sum(3));  //6

//ES6 class, Template String

class App {
    constructor(name, version, feature) {
        this.name = name;
        this.version = version;
        this.feature = feature
    }
}

let App1 = new App('HRM', '1.1.1', 'attendance mark')
console.log(`app ${App1.name} has version ${App1.version} with feature ${App1.feature}`);

//ES6 destructuring

const app ={
    name: 'HRM',
    version: '1.1.1',
    feature: 'attendance mark'
}

const { name, version, feature} = app
console.log(name);

//XỬ LÝ VỚI CHUỖI VÀ MẢNG

//Phương thức splice
let spliceArr = () => {
    let arr1 = ['app1', 'app2', 'app3']
    arr1.splice(1,2, 'web') // xóa từ vị trí 1, xóa 2 phần tử, thêm phần tử web

    console.log(`phương thức splice xóa 2 phần tử rồi thêm vào phần tử web: ${arr1}`);

} 

spliceArr()

//Phương thức slice: Phương thức này trả về mảng mới, từ vị trí start đến vị trí end (không bao gồm end)

let sliceArr = () => {
    let letters = ["a", "b", "c", "d"];
    
    let newArr = letters.slice(1, 3);// copy mảng letters từ vị trí 1 đến vị trí 3
    console.log(` phương thức slice trả về 1 mảng mới là: ${newArr}`); // ['b', 'c']
}

sliceArr()

//Phương thức concat: trả về array mới bao gồm các giá trị của arr ban đầu, cộng thêm giá trị các phần tử trong array thêm

let concatArr = (arr2) => {
    let arr1 = ['a', 'b', 'c']
    let newArr = arr1.concat(arr2)

    console.log(`concat 2 mảng lại với nhau : ${newArr}`); //a,b,c,d,e
}

concatArr(['d', 'e'])

//Phương thức includes(item, from) tìm kiếm item trong mảng từ vị trí from, và trả về true nếu tìm thấy, ngược lại trả về false.

let includesArr = () => {
    let arr = [1, 2, 3]

    console.log('Phương thức includes: ');
    console.log(arr.includes(2)); //true
}

includesArr()

//Phương thức find chỉ tìm kiếm phần tử đầu tiên thỏa mãn. 
//lọc đến chỗ đầu tiên nó tìm thấy, trả về undefined nếu không tìm thấy.

let findArr = () => {
    let arr = [
        {
            id: 1,
            name: 'hai dang'
        },
        {
            id: 2,
            name: 'Duy khanh'
        },
        {
            id: 3,
            name: 'hai dang'
        }
    ]
    let user = arr.find((item)=> item.name = 'hai dang')

    console.log('Phương thức find tìm item có tên hai dang: ');
    console.log(user.id); //1
}

findArr()

//Phương thức Filter: Để tìm kiếm nhiều phần tử thỏa mãn

let filterArr = () => {
    let arr = [{
        id: 1,
        name: 'hai dang'
    },
    {
        id: 2,
        name: 'Duy khanh'
    },
    {
        id: 3,
        name: 'hai dang'
    }]
    let result = arr.filter((item)=> item.id >= 2)

    console.log('Phương thức filter tìm item có id lớn hơn hoặc bằng 2: ');
    console.log(result); 
}

filterArr()

//Phương thức map: Phương thức này thực hiện một hàm trên mỗi phần tử của mảng và trả về một mảng

let mapArr = () => {
    let lengths = ["Dog", "Fish", "Elephant"].map(
        (item) => item.length + 2
    );
    console.log(lengths); //  [5, 6, 7]
}

mapArr()

//PROMISE Các method then() và catch() sẽ tạo ra một Promise và trả về. Promise thứ 2 sẽ được xử lý khi Promise thứ nhất đã trả về fulfilled hoặc rejected.

let p1 = new Promise(function(resolve, reject) {
    resolve(10);
});
   
   p1.then(function(value) {
    console.log(value); // "10"
    return value + 2;
   }).then(function(value) {
    console.log(value); // "12"
   });




   
   
   
  
