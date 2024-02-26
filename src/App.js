import './App.css';
import Result from './Components/Result'
import Summary from './Components/Summary'

export default function App() {
  return (
    <div className="App">
      <div className='left'>
        <Result score={76}
                res={'Great'}
                description={'your scored higher than 65% of the people who have taken these tests'}
              />
      </div>
      <div className='right'>
        <Summary/>
      </div>
    </div>
  );
}


