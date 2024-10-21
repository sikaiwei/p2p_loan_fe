// import './App.css'
import { useWeb3React } from '@web3-react/core';
import { useEffect } from 'react';
import { useContract } from './useContract';

function App() {
  const { isActive, account,  connector,  provider } = useWeb3React();
  const {approve,transfer,balanceOf,balance, balanceb} = useContract();
  useEffect(()=>{
    setTimeout(()=>{
      const active = connector.activate();
      active.then((r)=>{
        console.log("active",r);
      })
    },1000)
  },[provider,connector,account])

  return (
    <>
    {isActive ? ('active') : ('not active')}
    <button onClick={async ()=>{
      await connector.activate();
      console.log("active",provider);
    }}>
      connect
    </button>

    <button onClick={async ()=>{
      await approve();
    }}>
      approve
    </button>

    <button onClick={async ()=>{
      await transfer();
    }}>
      transfer
    </button>

    <button onClick={balanceOf}>
      balanceOf
    </button>
    <div>
      A: {balance}
    </div>
    <div>
      B: {balanceb}
    </div>
    </>
  )
}

export default App;
