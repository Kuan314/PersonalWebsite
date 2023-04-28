import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import MiniChallenge from './pages/Challenges';
import Website from './pages/Website';
import Header from './component/Header';
import Counter from './miniChallenges/Counter';
import Todo from './miniChallenges/ToDo';
import Spinner from './miniChallenges/Wheel';
import Pong from './miniChallenges/Pong';

const App = () => {
  return (
		<>
		<div className='bg-primary h-screen'>
			<Header />
			<Routes>
				{/* Main Pages */}
				<Route exact path="/" element={<Home />} />
				<Route path="/Challenges" element={<MiniChallenge />} />
				<Route path="/website" element={<Website />} />
				<Route path="/about" element={<About />} />

				{/* Mini Challenges */}
				<Route path="/Challenges/Counter" element={<Counter />} />
				<Route path="/Challenges/Todo" element={<Todo />} />
				<Route path="/Challenges/Wheel" element={<Spinner />} />
				<Route path="/Challenges/Pong" element={<Pong />} />

			</Routes>
		</div>
		</>
	)
}

export default App;
