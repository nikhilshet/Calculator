const input = document.getElementById("input");
const history =  document.getElementById('history');
const his = [];

function addData(inp){
    input.value = input.value + inp;
}

function reset(){
    input.value =" ";
    his.length = 0;
    history.textContent = " "
}

function calculate(){
    try {
    input.value = eval(input.value);
    his.push(input.value);
    history.textContent = `${his} `
    } catch (error) {
        input.value.textContent= `error`;
    }
}

function showHistory(){
    if(history.style.display !== 'none'){
        history.style.display = 'none';
    }else{
        history.style.display = 'block';
    }
    
}



