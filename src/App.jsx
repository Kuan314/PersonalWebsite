import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import MiniChallenge from './pages/MiniChallenge';
import Website from './pages/Website';
import Header from './component/Header';
import Counter from './miniChallenges/Counter';

const App = () => {
  return (
		<>
		<div className='bg-primary h-full'>
			<Header />
			<Routes>
				{/* Main Pages */}
				<Route exact path="/" element={<Home />} />
				<Route path="/miniChallenge" element={<MiniChallenge />} />
				<Route path="/website" element={<Website />} />
				<Route path="/about" element={<About />} />

				{/* Mini Challenges */}
				<Route path="/miniChallenge/Counter" element={<Counter />} />

			</Routes>
		</div>
		</>
	)
}

export default App;
