import { useEffect,useState } from "react";
 
function useCurrencyInfo(currency){
    const [currencyInfo,setCurrencyInfo] = useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/bda2af1c0ee6602f0721b336/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setCurrencyInfo(res.conversion_rates))
       
    },[currency])
    console.log(currencyInfo)
    return currencyInfo
}

export default useCurrencyInfo