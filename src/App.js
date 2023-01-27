import { useState } from 'react'

function App() { // root component (inside body tag)
  const [inputValue, setInputValue] = useState('')
  const [accountABalance, setAccountABalance] = useState(0)
  const [accountBBalance, setAccountBBalance] = useState(0)

  // Event Handlers
  const onDeposit = () => {
    setAccountABalance(accountABalance + +inputValue)
  }
  const onWithdraw = () => {
    setAccountABalance(accountABalance - +inputValue)
  }
  const onSendMoney = () => {
    setAccountBBalance(accountBBalance + +inputValue)
    setAccountABalance(accountABalance - +inputValue)
  }

  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }


  // JSX Return
  return (
    <div className="App">
      <div>Account A: {accountABalance}</div>
      <div>Account B: {accountBBalance}</div>
      <input type="text" value={inputValue} onChange={onInputChange}></input>
      <button onClick={onDeposit}>Deposit</button>
      <button onClick={onWithdraw}>Withdraw</button>
      <button onClick={onSendMoney}>Send Money</button>
    </div>
  );
}

export default App;