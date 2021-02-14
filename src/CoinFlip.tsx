import React, { useState } from 'react';
const CoinFlip = (props: any)=>{
    const [tossResult, SetTossResult] = useState(true);
  return (
  <>
  <div>
    <div className={"coin"} onClick={()=> SetTossResult(Math.random()<0.5)}>{tossResult?"HEADS":"TAILS"}</div>
  </div>
  </>)
}

export default CoinFlip;