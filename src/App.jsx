import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { About } from './pages/About';
import { Home } from './pages/Home';

/**
 * Components
 */
const Header = styled.header`
	background-color: #
`;

const App = () => {
  return (
		<Routes>
			<Route exact path="/PersonalWebsite" element={<Home />} />
			<Route path="/PersonalWebsite/about" element={<About />} />
		</Routes>
	)
}

export default App;
