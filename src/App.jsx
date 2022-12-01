import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import MiniChallenge from './pages/MiniChallenge';
import Website from './pages/Website';
import Header from './component/Header';

const App = () => {
  return (
		<>
		<div className='bg-white'>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/miniChallenge" element={<MiniChallenge />} />
				<Route path="/website" element={<Website />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
		</>
	)
}

export default App;
