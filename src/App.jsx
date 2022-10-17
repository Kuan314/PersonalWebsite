import { Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import Home from './component/Home';

/**
 * Components
 */
const Header = styled.header`
	background-color: #
`;

const App = () => {
    return (
		<div className="App">
			<h1>Welcome to React Router!</h1>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	)
}

export default App;
