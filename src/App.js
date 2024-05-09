import Menu from './Components/Menu';
import Descriprion from './Components/Descriprion';
import Experiences from './Components/Experiences';
import Skills from './Components/Skills';
function App() {
  return (
    <div className="wrapper">
      <Menu />
      <div className='main-wrapper'>
          <Descriprion />
          <Experiences />
          {/*<Skills />*/}
      </div>
    </div>
  );
}

export default App;
