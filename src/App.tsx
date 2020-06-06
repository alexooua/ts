import React from 'react';
import logo from './logo.svg';
import './App.css';
import {type} from "os";

function App() {
  let createMan:object = (name:string, height:number):object => {
    return {
      name,
      height
    };
  }
type ICar={
    model:string,
  year:number,
  on:boolean,
  turnOn:()=>void,
  rename:(model:string)=>void
}

  let car: ICar = {
    model: 'Reno Stepway',
    year: 2016,
    on: false,
    turnOn() {
      this.on = true;
    },
    rename(model) {
      this.model = model;
    }
  }


//   type CarType={
//
//   }
// type GarageCreate={
//  addCar:(car:CarType)=>void
//   logAllCarsNames:()=>void
//   getAllCars:()=>Array<CarType>
//
// }
//   let createGarage:GarageCreate = ():GarageCreate => {
//     let _cars:Array<CarType>= [];
//
//     return {
//       addCar(car) {
//         _cars.push(car);
//       },
//       logAllCarsNames() {
//         console.log('Cars in the garage: ');
//         _cars.forEach(c => console.log(c.model));
//       },
//       getAllCars() {
//         return _cars;
//       }
//     }
//   }




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
