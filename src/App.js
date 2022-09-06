import { Route, Routes } from 'react-router'
import '../src/App.css';

//imported Pages
import PlayIntro from './Pages/PlayIntro';






function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<PlayIntro />}/>
      </Routes>
    </div>
  )
}

export default App;
