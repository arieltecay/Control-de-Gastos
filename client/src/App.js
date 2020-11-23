import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTrsansacction } from './components/AddTrsansacction'
import { GlobalProvider } from './context/GlobalState'
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <div className='container'>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTrsansacction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
