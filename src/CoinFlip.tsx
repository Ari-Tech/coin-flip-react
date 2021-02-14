import React, { useState } from 'react';
const CoinFlip = (props: any)=>{
    const [tossResult, SetTossResult] = useState(true);
    const [animate, setAnimate] = useState(false);
    const flipCoin = ()=>{
      setAnimate(true)
      setTimeout(()=>{
        setAnimate(false)
        SetTossResult(Math.random()<0.5)
      }, 2000)
    }
  return (
  <>
  <div className={'coin-container'}>
    <div className={animate?"coin-animate":"coin"} onClick={()=> flipCoin()}>{tossResult?"HEADS":"TAILS"}</div>
  </div>
  </>)
}

export default CoinFlip;