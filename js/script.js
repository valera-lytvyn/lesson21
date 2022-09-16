let userName = document.querySelector('.user_name');
let userNameButton = document.querySelector('.button_name');
let result = document.querySelector('.result');
userNameButton.addEventListener('click', () => {
   let data =   userName.value;
   res = 'Привіт' + ' ' + data
   result.innerHTML += res;
   userName.value = '';
})

let yearBirth = document.querySelector('.year_birth');
let buttonBirth = document.querySelector('.button_birth');
let resultBirth = document.querySelector('.result_birth');
const CURRENT_YEAR = 2022;
buttonBirth.addEventListener('click', () => {
   let data = yearBirth.value;
   let age = CURRENT_YEAR - data;
   resultAge = ` Якщо ви народились в ${data}, то тобі вже ${age} років`;
   resultBirth.innerHTML += resultAge;
   yearBirth.value = '';
   })
   
let lengthSideSquare = document.querySelector('.length_side_square');
let buttonLengthSideSquare = document.querySelector('.button_length_side_square');
let resultPerimeter = document.querySelector('.result_perimeter');
buttonLengthSideSquare.addEventListener('click', () => {
   let data = lengthSideSquare.value;
   let perimeter = 4 * data; 
   resultPerimeterText= `Ви ввели ${data}, тоді периметр квадрата рівна ${perimeter} `;
   resultPerimeter.innerHTML += resultPerimeterText;
   lengthSideSquare.value = '';
})
     
let radiusCircle = document.querySelector('.radius_circle');
let buttonRadiusCircle = document.querySelector('.button_radius_circle');
let resultArea = document.querySelector('.result_area');
buttonRadiusCircle.addEventListener('click', () => {
   let data = radiusCircle.value;
   let area = (Math.PI * data**2).toFixed (2); 
   resultAreaText= `Ви ввели ${data}, тоді площа круга рівна ${area} `;
   resultArea.innerHTML += resultAreaText;
   radiusCircle.value = '';
})
     
let distance = document.querySelector('.distance');
let travelTime = document.querySelector('.travel_time');
let buttonSpeed = document.querySelector('.button_speed');
let resultSpeed = document.querySelector('.result_speed');
buttonSpeed.addEventListener('click', () => {
   let x = distance.value;
   let y = travelTime.value;
   let speed = (x/y); 
   resultSpeedText = `Відстань між містами ${x}км, час поїздки ${y}год,  
   щоб встигнути, потрібно рухатись з швидкістю ${speed}км/год`;
      resultSpeed.innerHTML += resultSpeedText;
   distance.value = '';
   travelTime.value = '';
})
     
let dollar = document.querySelector('.dollar');
let buttonExchangeRate = document.querySelector('.button_exchange_rate');
let resultExchangeRate = document.querySelector('.result_exchange_rate');
let EXCHANGE_RATE = .99
buttonExchangeRate.addEventListener('click', () => {
   let data = dollar.value;
     let euro = (data * EXCHANGE_RATE); 
     resultExchangeRate = `За ${data}$ Ви зможете отримати ${euro}\u20AC`;
      alert(resultExchangeRate);
   dollar.value = '';
})
     
let gb = document.querySelector('.gb');
let buttonGb = document.querySelector('.button_gb');
let resultInBytes = document.querySelector('.result_in_bytes');
buttonGb.addEventListener('click', () => {
   let data = gb.value;
     let in_bytes =  Math.floor(data * 1024 / 820) ;
     resultInBytesText = `Флешка об'ємом ${data}Гб зможе вмістити ${in_bytes} файлів по 820мб`;
     resultInBytes.innerHTML += resultInBytesText;
   gb.value = '';
})

function number_chocolates() {
   let money = prompt("Введіть суму грошей в гаманці");
   let cost = prompt("Введіть вартість шоколадки");
   let numberChocolates = Math.floor(money / cost);
   let change = money % cost;
   console.log(`за ${money}грн можна купити ${numberChocolates} шоколадок, здача ${change}`);
}

function three_digit_number() {
   let number = prompt("Введіть трьохзначне число");
   let result_1 = String(Math.floor(number / 100));
   let result_2 = String(Math.floor((number - result_1 * 100)/10));
   let result_3 = String(number - (Math.floor(number / 10) * 10));
   console.log(result_3 + result_2 + result_1);  
}

function deposit() {
   let deposit = prompt("Ведіть суму депозиту на два місяці (процентна ставка 5%)");
let depositResult = ((deposit*.05)/6).toFixed(2)
   console.log(`Сума відсотків за два місяці становить: ${depositResult}`);
}

function test() {
   let x= 10;
   let y = x ** 0;
   console.log(typeof 10n);
   }



