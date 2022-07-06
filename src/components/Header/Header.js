import React, {useContext} from 'react'
import "./header.css"
import useFetch from '../../hooks.js/UseFetch'
import { Context } from '../../context'


export default function Header(props) {
    const {result} = useContext(Context)
    
    // console.log(result)

  return (
    <div className='header'>
        <span className='header-heading'> 
            Online curency converter
        </span>
        <div className='header-currencies'>
            <div className=''>
                <span>🇺🇸</span>
                    {result.USD.loadingUsd && 'loading'}
                    {result.USD.errorUsd && 'Error'}
                    {result.USD.dataUsd && `${Math.round(result.USD.dataUsd.rates.UAH * 100) / 100} uah`}
            </div>
            <div className=''>
                <span>🇪🇺</span>
                {result.EUR.loadingEur && 'loading'}
                {result.EUR.errorEur && 'Error'}
                {result.EUR.dataEur && `${Math.round(result.EUR.dataEur.rates.UAH * 100) / 100} uah`}
            </div>
            <div className=''>
                <span>🇨🇳</span>
                {result.CNY.loadingCny && 'loading'}
                {result.CNY.errorCny && 'Error'}
                {result.CNY.dataCny && `${Math.round(result.CNY.dataCny.rates.UAH * 100) / 100} uah`}
            </div>
            {/* <div className='header-currencies__currency'></div>
            <div className='header-currencies__currency'></div> */}
        </div>
    </div>
  )
}
