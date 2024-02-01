import RoutesAPP from './Routes';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={ store }>
        <RoutesAPP />
      </Provider>
    </BrowserRouter>
  )
}

export default App
