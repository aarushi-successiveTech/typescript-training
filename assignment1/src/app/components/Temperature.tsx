type TempProps = {
    temperature : number;
}

export const TemperatureComponent = ({temperature} : TempProps) => {

    let message = '';
    if(temperature > 25){
        message = 'It is sunny today!'
    }
    else if(temperature < 10){
        message = "It's cold today!"
    }
    else{
        message = 'Weather is normal!'
    }

    return(
        <div>
            <h2>Temperature : {temperature}</h2>
            <p>{message}</p>
        </div>
    );
}

 