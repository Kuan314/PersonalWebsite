import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { About } from './pages/About';
import { Home } from './pages/Home';

/**
 * Components
 */
const Header = styled.header`
	background-color: #FBE0C3;
	height: 100px;
`;

const App = () => {
  return (
		<>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</>
	)
}

export default App;
