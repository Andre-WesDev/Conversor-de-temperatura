function converter(){

    var temperatura = document.getElementById("txtemp")
    var res = document.getElementById("res")

    var select = document.getElementById("tempat")
    var option = select.children[select.selectedIndex]
    var text = option.textContent
        
    var select2 = document.getElementById("temoconver")
    var option2 = select2.children[select2.selectedIndex]
    var text2 = option2.textContent

    valor = Number(temperatura.value)

    if(temperatura.value == ""){
        res.innerHTML = `[ERRO] Nenhum valor informado!`
    }
    else{

        if(text == text2){

        res.innerHTML = `O valor é o mesmo: ${valor}° grau/s ${text}`
        }

        else if(text == "Celsius (°C)" && text2 == "Kelvin (K)"){
 
            text = text.replace()
            text2 = text2.replace()
            valorfinal = valor + 273

            res.innerHTML = ` ${valor}° grau/s ${text}  equivale a ${valorfinal}° grau/s ${text2}`
        }

        else if(text == "Celsius (°C)" && text2 == "Fahrenheit (°F)"){
 
            text = text.replace()
            text2 = text2.replace()
            valorfinal = (valor * 1.8) + 32

            res.innerHTML = ` ${valor}° grau/s ${text}  equivale a ${valorfinal.toFixed(2)}° grau/s ${text2}`
        }

        else if(text == "Celsius (°C)" && text2 == "Réaumur (°Re)"){
 
            text = text.replace()
            text2 = text2.replace()
            valorfinal =  valor * 4/5

            res.innerHTML = ` ${valor}° grau/s ${text}  equivale a ${valorfinal.toFixed(2)}° grau/s ${text2}`
        }

        else if(text == "Celsius (°C)" && text2 == "Rankine (°Ra)"){
 
            text = text.replace()
            text2 = text2.replace()
            valorfinal =  valor * 9/5 + 491.67

            res.innerHTML = ` ${valor}° grau/s ${text}  equivale a ${valorfinal.toFixed(2)}° grau/s ${text2}`
        }

        else if(text == "Kelvin (K)" && text2 == "Celsius (°C)"){
 
            text = text.replace()
            text2 = text2.replace()
            valorfinal =  valor - 273.15

            res.innerHTML = ` ${valor}° grau/s ${text}  equivale a ${valorfinal.toFixed(2)}° grau/s ${text2}`
        }

        else if(text == "Kelvin (K)" && text2 == "Fahrenheit (°F)"){
 
            text = text.replace()
            text2 = text2.replace()
            valorfinal =  (valor - 273.15) * 9/5 + 32

            res.innerHTML = ` ${valor}° grau/s ${text}  equivale a ${valorfinal.toFixed(2)}° grau/s ${text2}`
        }

        else if(text == "Kelvin (K)" && text2 == "Réaumur (°Re)"){
 
            text = text.replace()
            text2 = text2.replace()
            valorfinal =  (valor - 273.15) * 0.80000

            res.innerHTML = ` ${valor}° grau/s ${text}  equivale a ${valorfinal.toFixed(2)}° grau/s ${text2}`
        }

        else if(text == "Kelvin (K)" && text2 == "Rankine (°Ra)"){
 
            text = text.replace()
            text2 = text2.replace()
            valorfinal =  valor * 1.8

            res.innerHTML = ` ${valor}° grau/s ${text}  equivale a ${valorfinal.toFixed(2)}° grau/s ${text2}`
        }

        else if(text == "Fahrenheit (°F)" && text2 == "Celsius (°C)"){
 
            text = text.replace()
            text2 = text2.replace()
            valorfinal =  (valor - 32) * 5/9 

            res.innerHTML = ` ${valor}° grau/s ${text}  equivale a ${valorfinal.toFixed(2)}° grau/s ${text2}`
        }

        else if(text == "Fahrenheit (°F)" && text2 == "Kelvin (K)"){
 
            text = text.replace()
            text2 = text2.replace()
            valorfinal =  (valor - 32) * 5/9 + 273.15

            res.innerHTML = ` ${valor}° grau/s ${text}  equivale a ${valorfinal.toFixed(2)}° grau/s ${text2}`
        }

        else if(text == "Fahrenheit (°F)" && text2 == "Réaumur (°Re)"){
 
            text = text.replace()
            text2 = text2.replace()
            valorfinal =   (valor - 32) * 4/9

            res.innerHTML = ` ${valor}° grau/s ${text}  equivale a ${valorfinal.toFixed(2)}° grau/s ${text2}`
        }

        else if(text == "Fahrenheit (°F)" && text2 == "Rankine (°Ra)"){
 
            text = text.replace()
            text2 = text2.replace()
            valorfinal =   valor + 459.67

            res.innerHTML = ` ${valor}° grau/s ${text}  equivale a ${valorfinal.toFixed(2)}° grau/s ${text2}`
        }

        else if(text == "Réaumur (°Re)" && text2 == "Celsius (°C)"){
 
            text = text.replace()
            text2 = text2.replace()
            valorfinal =   valor * 5/4

            res.innerHTML = ` ${valor}° grau/s ${text}  equivale a ${valorfinal.toFixed(2)}° grau/s ${text2}`
        }

        else if(text == "Réaumur (°Re)" && text2 == "Kelvin (K)"){
 
            text = text.replace()
            text2 = text2.replace()
            valorfinal =   valor * 5/4 + 273.15

            res.innerHTML = ` ${valor}° grau/s ${text}  equivale a ${valorfinal.toFixed(2)}° grau/s ${text2}`
        }

        else if(text == "Réaumur (°Re)" && text2 == "Fahrenheit (°F)"){
 
            text = text.replace()
            text2 = text2.replace()
            valorfinal =   valor * 9/4 + 32

            res.innerHTML = ` ${valor}° grau/s ${text}  equivale a ${valorfinal.toFixed(2)}° grau/s ${text2}`
        }

        else if(text == "Réaumur (°Re)" && text2 == "Rankine (°Ra)"){
 
            text = text.replace()
            text2 = text2.replace()
            valorfinal =   valor * 9/4 + 491.67

            res.innerHTML = ` ${valor}° grau/s ${text}  equivale a ${valorfinal.toFixed(2)}° grau/s ${text2}`
        }

        else if(text == "Rankine (°Ra)" && text2 == "Celsius (°C)"){
 
            text = text.replace()
            text2 = text2.replace()
            valorfinal =   (valor - 491.67) * 5/9

            res.innerHTML = ` ${valor}° grau/s ${text}  equivale a ${valorfinal.toFixed(2)}° grau/s ${text2}`
        }

        else if(text == "Rankine (°Ra)" && text2 == "Kelvin (K)"){
 
            text = text.replace()
            text2 = text2.replace()
            valorfinal =   valor * 5/9

            res.innerHTML = ` ${valor}° grau/s ${text}  equivale a ${valorfinal.toFixed(2)}° grau/s ${text2}`
        }

        else if(text == "Rankine (°Ra)" && text2 == "Fahrenheit (°F)"){
 
            text = text.replace()
            text2 = text2.replace()
            valorfinal =   valor - 459.67 

            res.innerHTML = ` ${valor}° grau/s ${text}  equivale a ${valorfinal.toFixed(2)}° grau/s ${text2}`
        }

        else if(text == "Rankine (°Ra)" && text2 == "Réaumur (°Re)"){
 
            text = text.replace()
            text2 = text2.replace()
            valorfinal =   (valor - 491.67) * 4/9

            res.innerHTML = ` ${valor}° grau/s ${text}  equivale a ${valorfinal.toFixed(2)}° grau/s ${text2}`
        }

    }

}