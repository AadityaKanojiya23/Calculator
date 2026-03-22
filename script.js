let input = document.getElementById('inputbox')
let button = document.querySelectorAll('button')

let string = "";

button.forEach(button =>{
    button.addEventListener('click', (e)=>{
        let value = e.target.innerHTML;
        if(value == '='){
            string = eval(string);
            input.value = string;
        }
        else if(value == 'AC'){
            string = "";
            input.value = string;
        }
        else if(value == 'DEL'){
            //string = string.slice(0,-1) same del funtion 
            string = string.substring(0 , string.length - 1);
            input.value = string;
        }
        else{
            string += value;
            input.value = string;
        }
    })
})
