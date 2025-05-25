import Featuring from './screens/Featuring/Featuring';
import Home from './screens/Home/Home';

function App() {
  
  return (
    <div className='w-full md:w-[90%] md:mx-auto flex flex-col'>
      <Home />
      <Featuring/>
    </div>
  )
}

export default App
