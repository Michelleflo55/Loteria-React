import { useMediaQuery } from 'react-responsive';
import './App.css';
import BigScreen from './components/BigScreen'
import Desktop from './components/Desktop'
import Laptop from './components/Laptop'
import Mobile from './components/Mobile'
import TabletMobile from './components/TabletMobile'


function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });
  return (
    <div>
      <h1> React Responsive - a guide</h1>
      {isMobileDevice && <Mobile />}
      {isTabletDevice && <>
      <TabletMobile />
      {isDesktop && <Desktop />}
      {isLaptop && <Laptop />}
     {isBigScreen && <BigScreen />}
</>}

    </div>
  )
}

export default App;
