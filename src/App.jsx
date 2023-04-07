import { Routes, Route } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import Subtitle from './components/Subtitle'

function App() {

	return (
		<>
			<div className='text-white'>

				<Header />

				<Subtitle />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/destination' element={<Destination />} />
					<Route path='/crew' element={<Crew />} />
					<Route path='/technology' element={<Technology />} />
				</Routes>

			</div>
		</>
	)
}

export default App
