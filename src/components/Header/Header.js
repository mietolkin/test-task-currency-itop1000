import React from 'react'
import "./header.css"
import useFetch from '../../hooks.js/UseFetch'

export default function Header(props) {
    
    const {data: dataUsd, loading: loadingUsd, error: errorUsd} = useFetch('https://api.exchangerate.host/latest?base=EUR')
    const {data: dataEur,  loading: loadingEur, error: errorEur} = useFetch('https://api.exchangerate.host/latest?base=USD')
    const {data: dataCny, loading: loadingCny, error: errorCny} = useFetch('https://api.exchangerate.host/latest?base=CNY')
    
    // console.log(dataUsd, loadingUsd, errorUsd)
    // console.log(data)
  return (
    <div className='header'>
        <span className='header-heading'> 
            Online curency converter
        </span>
        <div className='header-currencies'>
            <div className=''>
                <span>🇺🇸</span>
                    {loadingUsd && 'loading'}
                    {errorUsd && 'Error'}
                    {dataUsd && `${Math.round(dataUsd.rates.UAH * 100) / 100} uah`}
            </div>
            <div className=''>
                <span>🇪🇺</span>
                {loadingEur && 'loading'}
                {errorEur && 'Error'}
                {dataEur && `${Math.round(dataEur.rates.UAH * 100) / 100} uah`}
            </div>
            <div className=''>
                <span>🇨🇳</span>
                {loadingCny && 'loading'}
                {errorCny && 'Error'}
                {dataCny && `${Math.round(dataUsd.rates.UAH * 100) / 100} uah`}
            </div>
            {/* <div className='header-currencies__currency'></div>
            <div className='header-currencies__currency'></div> */}
        </div>
    </div>
  )
}
