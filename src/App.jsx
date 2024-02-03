import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Challenges from './pages/Challenges';
import ChallengesPage from './pages/ChallengesPage';
import Loading from './components/Loading';
import NotFound from './components/NotFound';

// lazy loading
const Counter = lazy(() => import('./miniChallenges/Counter'));
const Todo = lazy(() => import('./miniChallenges/ToDo'));
const Wheel = lazy(() => import('./miniChallenges/Wheel'));
const CountDown = lazy(() => import('./miniChallenges/CountDown'));

const App = () => {
  return (
		<Suspense fallback={<Loading />}>
			<Routes>
				{/* Main Pages */}
				<Route index path="/" element={<Home />} />
				<Route path="Challenges" element={<Challenges />} >
					<Route index element={<ChallengesPage />} />
					<Route path="Counter" element={<Counter />} />
					<Route path="Todo" element={<Todo />} />
					<Route path="Wheel" element={<Wheel />} />
					<Route path="CountDown" element={<CountDown />} />
					<Route path="*" element={<NotFound />} />
				</Route>

			</Routes>
		</Suspense>
	)
}

export default App;
