import styled from '@emotion/styled';

import Toggle from './components/Toggle';
import Tab from './components/Tab';

const Container = styled.div({
  width: '50%',
  margin: '0 auto',
  padding: '1.4em',
  border: '1px solid black',
  fontSize: '20px',
});

function App() {
  return (
    <Container>
      <div className="toggle.js">
        <div>1. toggle</div>
        <Toggle />
      </div>

      <div className="Tab.js">
        <div>2. tab</div>
        <Tab />
      </div>
    </Container>
  );
}

export default App;
