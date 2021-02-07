import React, { useState } from 'react';
const CoinFlip = (props: any)=>{
    const [tossResult, SetTossResult] = useState(true);
  return (
  <>
  <div><button onClick={()=>{

  }}>Flip Coin</button></div>
  <div>Result: <b> {tossResult?"HEADS":"TAILS"}</b></div>
  </>)
}

export default CoinFlip;