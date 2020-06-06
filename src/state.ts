import {isBoolean} from "util";

let age: number = 10
let First: string = "bob"
let isMy: boolean = true
//моджно типизировать масив 2 способами
let ages: Array<number | string> = ['sdfas', 18, 12, 19, 22, 45]
let ages2: number[] = [18, 12, 19, 22, 45]


// interface IMan{
// name:string
//  height:number
// }
// interface ICar{
// model:string
//  year:number
// }
type ManT = {
 name: string
 height: number
 sex?: string
}
type CarT = {
 model: string
 year: number
}
let man1: ManT = {name: 'Dima', height: 1.78}
let man2: ManT = {name: 'Sasha', height: 1.8}
// let car: CarT = {model: 'Reno Stepway', year: 2016}
// Создайте массив в котором будут сидеть 2 элемента man1 и man2 и явно типизируйте его.
// (man1 и man2 - объекты из 5 задания)
let garage: Array<ManT | CarT> = [
 {name: 'Dima', height: 1.78, sex: 'male'},
 {name: 'Sasha', height: 1.8},
 {model: 'Reno Stepway', year: 2016}
]


function toUpperCase(strings:Array<string>):Array<string>{
 let result = strings.map(s => s.toUpperCase());
 return result;
}

//  Добавьте строгую типизацию функции, используя те интерфейсы, которые у вас есть:


    let createMan = (name:string , height:number):ManT  => {
     return {
      name,
      height
     };
    }

//  Расширить интерфейс ICar, чтобы компилятор не ругался
interface ICar{
 model:string
 year:number

}
interface ICar{
 on: Boolean
 turnOn(): void
 rename:(model: string)=> void
}

 let car: ICar = {
 model: 'Reno Stepway',
 year: 2016,
 on: false,
 turnOn() {
  this.on = true;
 },
 rename(model ) {
  this.model = model;
 }
}

export default 1
