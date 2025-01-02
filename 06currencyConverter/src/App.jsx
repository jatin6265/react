import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  
  const [amount, setAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [toCurrency, setToCurrency] = useState('INR')
  
  const currencyInfo = useCurrencyInfo(fromCurrency)
  const currencyOptions = Object.keys(currencyInfo || {})
  // console.log(currencyOptions);
  
  const swapCurrency = () => {

    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
    // console.log(fromCurrency, toCurrency, amount, convertedAmount)
  }

  const convert=()=>{setConvertedAmount(amount * currencyInfo[toCurrency])}

   const BackgroundImage = "https://images.pexels.com/photos/29968622/pexels-photo-29968622/free-photo-of-gold-bitcoin-coins-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=800" 
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(${BackgroundImage})`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={(amount)=>setAmount(amount)}
                                onCurrencyChange={(currency)=>setFromCurrency(currency)}
                                currencyOptions={currencyOptions}
                                selectedCurrency={fromCurrency}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={()=>{swapCurrency()}}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                
                                amount={convertedAmount}
                                onCurrencyChange={(currency)=>setToCurrency(currency)}
                                currencyOptions={currencyOptions}
                                selectedCurrency={toCurrency}
                                amountDisabled={true}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {fromCurrency} to {toCurrency}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default App
