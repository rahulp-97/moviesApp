import { Fragment } from 'react';
import Home from './components/Home';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <Fragment>
      <main className='py-3'>
        <Container>
          <Home />
      </Container>
      </main>
      
    </Fragment>
  );
}

export default App;