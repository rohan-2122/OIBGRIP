document.getElementById('convert').onclick = tempConvert;

function tempConvert() {
    var celcius = document.getElementById("celcius").value;
    var fahrenheit = document.getElementById("fahrenheit").value;
    var kelvin = document.getElementById("kelvin").value;

    if(celcius!=' '){
        fahrenheit=(parseFloat(celcius)*9/5)+32;
        kelvin=(parseFloat(celcius)+273.15);
    }
    else{
        celcius=(parseFloat(fahrenheit)-32)*5/9;
        celcius=(parseFloat(kelvin)-273.15);
    }

    document.getElementById('kelvin').value=(kelvin).toFixed(1);
    document.getElementById('fahrenheit').value=(fahrenheit).toFixed(1);
    document.getElementById('celcius').value=(celcius).toFixed(1);
}