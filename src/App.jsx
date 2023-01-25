import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import MiniChallenge from './pages/Challenges';
import Website from './pages/Website';
import Header from './component/Header';
import Counter from './miniChallenges/Counter';
import Todo from './miniChallenges/ToDo';

const App = () => {
  return (
		<>
		<div className='bg-primary h-screen'>
			<Header />
			<Routes>
				{/* Main Pages */}
				<Route exact path="/" element={<Home />} />
				<Route path="/miniChallenge" element={<MiniChallenge />} />
				<Route path="/website" element={<Website />} />
				<Route path="/about" element={<About />} />

				{/* Mini Challenges */}
				<Route path="/miniChallenge/Counter" element={<Counter />} />
				<Route path="/miniChallenge/Todo" element={<Todo />} />

			</Routes>
		</div>
		</>
	)
}

export default App;
