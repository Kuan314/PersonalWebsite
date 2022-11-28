import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import Header from './component/Header';

const App = () => {
  return (
		<>
		<div className='bg-white'>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
		</>
	)
}

export default App;
