
import { Button } from "./components/ButtonComponent";
import { Component } from "./components/Counter";
import { Greeting } from "./components/Greeting";
import { DisplayFunction } from "./components/TaskList";
import { TemperatureComponent } from "./components/Temperature";
import { Userfunction } from "./components/UserFunction";


export default function Home() {
  return (
    <div>
      {/* <Greeting name = 'Aarushi'/> */}
      {/* <Userfunction/> */}
      {/* <TemperatureComponent temperature={20}/> */}
      {/* <Component/> */}
      {/* <DisplayFunction/> */}
      <Button/>
    </div>
  );
}
