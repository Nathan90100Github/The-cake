window["notation"] = function(input){
    if (OmegaNum.lt(input,1e15)) {
        input= OmegaNum(input).toNumber()
        input = input.toFixed(3)
        input = (0.75 * 10 * input + 0.25 * 10 * input) / 10;
    }
    let output = input
    if (OmegaNum.lt(input,1e3)) {
        let units = OmegaNum.floor(input)
        let decimals = OmegaNum.mod(input,1)
        decimals = OmegaNum(decimals).toNumber()
        decimals = String(decimals)
        decimals = decimals.substring(2,5)
        while (decimals.charAt(decimals.length-1) == "0") {
            decimals = decimals.substring(0,decimals.length-1)
        }
        output=units
        if (decimals=="") {} else {
            output= output+"."+decimals
        }
    }
    if (OmegaNum.lt(input,1e6)&&OmegaNum.gte(input,1e3)) {
        let thousands = OmegaNum.floor(OmegaNum.div(input,1000))
        let units = OmegaNum.floor(OmegaNum.mod(input,1000))
        let decimals = OmegaNum.mod(input,1)
        units = OmegaNum(units).toNumber()
        units = String(units).padStart(3,"0")
        decimals = OmegaNum(decimals).toNumber()
        decimals = String(decimals)
        decimals = decimals.substring(2,5)
        while (decimals.charAt(decimals.length-1) == "0") {
            decimals = decimals.substring(0,decimals.length-1)
        }
        output=thousands+","+units
        if (decimals=="") {} else {
            output= output+"."+decimals
        }
    }
    if (OmegaNum.lt(input,1e9)&&OmegaNum.gte(input,1e6)) {
        let millions = OmegaNum.floor(OmegaNum.div(input,1e6))
        let thousands = OmegaNum.mod(OmegaNum.floor(OmegaNum.div(input,1000)),1000)
        let units = OmegaNum.floor(OmegaNum.mod(input,1000))
        let decimals = OmegaNum.mod(input,1)
        thousands = OmegaNum(thousands).toNumber()
        thousands = String(thousands).padStart(3,"0")
        units = OmegaNum(units).toNumber()
        units = String(units).padStart(3,"0")
        decimals = OmegaNum(decimals).toNumber()
        decimals = String(decimals)
        decimals = decimals.substring(2,5)
        while (decimals.charAt(decimals.length-1) == "0") {
            decimals = decimals.substring(0,decimals.length-1)
        }
        output=millions+","+thousands+","+units
        if (decimals=="") {} else {
            output= output+"."+decimals
        }
    }
    if (OmegaNum.lt(input,1e12)&&OmegaNum.gte(input,1e9)) {
        let billions = OmegaNum.floor(OmegaNum.div(input,1e9))
        let millions = OmegaNum.mod(OmegaNum.floor(OmegaNum.div(input,1e6)),1000)
        let thousands = OmegaNum.mod(OmegaNum.floor(OmegaNum.div(input,1000)),1000)
        let units = OmegaNum.floor(OmegaNum.mod(input,1000))
        let decimals = OmegaNum.mod(input,1)
        millions = OmegaNum(millions).toNumber()
        millions = String(millions).padStart(3,"0")
        thousands = OmegaNum(thousands).toNumber()
        thousands = String(thousands).padStart(3,"0")
        units = OmegaNum(units).toNumber()
        units = String(units).padStart(3,"0")
        decimals = OmegaNum(decimals).toNumber()
        decimals = String(decimals)
        decimals = decimals.substring(2,5)
        while (decimals.charAt(decimals.length-1) == "0") {
            decimals = decimals.substring(0,decimals.length-1)
        }
        output=billions+","+millions+","+thousands+","+units
        if (decimals=="") {} else {
            output= output+"."+decimals
        }
    }
    if (OmegaNum.lt(input,1e1000)&&OmegaNum.gte(input,1e12)) {
        let exponent = OmegaNum.floor(OmegaNum.log10(input))
        let mantissa = OmegaNum.div(input,OmegaNum.pow(10,exponent))
        mantissa = OmegaNum(mantissa).toNumber()
        mantissa = String(mantissa)
        mantissa = mantissa.substring(0,5)
        output= mantissa+"e"+exponent
    }
    return output
}