import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import MiniChallenge from './pages/Challenges';
import Website from './pages/Website';
import Header from './component/Header';
import Loading from './component/Loading';

// lazy loading
const Counter = lazy(() => import('./miniChallenges/Counter'));
const Todo = lazy(() => import('./miniChallenges/ToDo'));
const Spinner = lazy(() => import('./miniChallenges/Wheel'));
const Snake = lazy(() => import('./miniChallenges/Snake/Snake'));
const CountDown = lazy(() => import('./miniChallenges/CountDown'));

const App = () => {
  return (
		<div className='bg-primary h-screen'>
			<Header />
			
			<Suspense fallback={<Loading />}>
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
					<Route path="/Challenges/Snake" element={<Snake />} />
					<Route path="/Challenges/CountDown" element={<CountDown />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App;
