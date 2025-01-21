import './App.css'
import FocusContainer from './components/FocusContainer'

function App() {

  return (
    <main className='flex flex-col items-center bg-[#48A30012] px-8 pt-10 min-h-screen'>
      <h1 className='font-bold text-[#48A300] text-4xl md:text-6xl'>Focus on <span className='text-[#61481C]'>Today</span></h1>
      <FocusContainer />
    </main>
  )
}

export default App
