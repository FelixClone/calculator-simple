function calculate(nType,nValue){
    if (nType === 'action'){
        if(nValue === 'c'){
            document.getElementById('results').value = ''
        }
        if(nValue === '/'||nValue === '*'||nValue === '-'|| nValue === '+'|| nValue === '.'){
            document.getElementById('results').value += nValue
        }
        if(nValue === '='){
            var valueField = eval(document.getElementById('results').value)
            document.getElementById('results').value = valueField
        }
    }else if(nType === 'value'){
        document.getElementById('results').value += nValue
    }
}