import React from "react";
import { Container } from 'reactstrap';
import Board from '../../components/Board/Board';

const Home: React.FC = () => {
	return (
		<>
			<Container>
				<div className="home">
					<Board boardSize={10} winLimit={5} />
				</div>
			</Container>
		</>
	);
};

export default Home;
