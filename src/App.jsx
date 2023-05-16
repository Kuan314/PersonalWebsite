import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MiniChallenge from './pages/Challenges';
import Header from './component/Header';
import Loading from './component/Loading';
import NotFound from './component/NotFound';

// lazy loading
const Counter = lazy(() => import('./miniChallenges/Counter'));
const Todo = lazy(() => import('./miniChallenges/ToDo'));
const Spinner = lazy(() => import('./miniChallenges/Wheel'));
const CountDown = lazy(() => import('./miniChallenges/CountDown'));

const App = () => {
  return (
		<div className='bg-black h-screen'>
			<Header />
			
			<Suspense fallback={<Loading />}>
				<Routes>
					{/* Main Pages */}
					<Route exact path="/PersonalWebsite" element={<Home />} />
					<Route path="/Challenges" element={<MiniChallenge />} />
				
					{/* Mini Challenges */}
					<Route path="/Challenges/Counter" element={<Counter />} />
					<Route path="/Challenges/Todo" element={<Todo />} />
					<Route path="/Challenges/Wheel" element={<Spinner />} />
					<Route path="/Challenges/CountDown" element={<CountDown />} />

					{/* Not Found */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App;
