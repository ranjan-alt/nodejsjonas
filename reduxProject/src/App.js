// import logo from './logo.svg';
import './App.css';
import AccountOperations from './features/accounts/AccountOperations';
import BalanceDisplay from './features/accounts/BalanceDisplay';
import CreateCustomer from './features/customers/CreateCustomer';
import Customer from './features/customers/Customer';
import { useSelector } from "react-redux"

function App() {
  const fullName = useSelector((state) => state.customer.fullName)
  return (
    <div className="App">
      <h1>The redux toolkit</h1>
      {fullName === "" ? <CreateCustomer /> : <>

        <Customer />
        <AccountOperations />
        <BalanceDisplay />
      </>}

    </div>
  );
}

export default App;
