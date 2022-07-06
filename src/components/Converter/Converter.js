import "./converter.css";
import React, { useEffect, useState, useContext} from 'react';
import { Context } from '../../context'
import {Input, MemoizedInput} from '../Input/Input';

export default function Converter(props) {
    const currency = [{id: 'USD', currency: '🇺🇸'}, {id: 'EUR', currency: '🇪🇺'}, {id: 'CNY', currency: '🇨🇳'}, {id: 'UAH', currency: '🇺🇦'}];
    const {result: currencyData} = useContext(Context)
   
    const [number, setNumber] = useState('');
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    
    const [data, setData] = useState(false);
    
    let isVisible = value && value2 ? '' : 'hidden';
    // console.log(isVisible)
    const handleNumber = (el) => { 
        if (value && value2) { 
            let num = Math.floor(el.target.value)
            let calculating = Math.round((num * data[value2])* 100) / 100
            setNumber(num);
            setResult(calculating);
        }
    }
    
    useEffect(()=> { 
        if(value) { 
          switch(value) { 
            case ('USD'): setData(currencyData.USD.dataUsd.rates); break;
            case ('EUR'): setData(currencyData.EUR.dataEur.rates); break;
            case ('CNY'): setData(currencyData.CNY.dataCny.rates); break;
            case ('UAH'): setData(currencyData.UAH.dataUah.rates); break;
          }
        }
      
            setNumber("")
            setResult('')
        
    }, [value])

    return (
        <div className="converter">
            <h2 className="converter-heading">Please select the currencies</h2>
            <div className='converter-inputs'>
                <MemoizedInput value={value} setValue={setValue} currencies={currency} />
                <span>TO</span>
                <MemoizedInput value={value2} setValue={setValue2} currencies={currency} />
            </div>

            
            <div className={isVisible}>
                <div className='converter-number'>  
                    <h2>Please enter a number</h2>
                    <input value={number} onChange={handleNumber}>
                    </input>
                </div>
                <div className='converter-number'> 
                <h2>The result is: </h2>
                    <input value={result} readOnly >
                    </input>
                </div>
            </div>
        </div>

    )
}
