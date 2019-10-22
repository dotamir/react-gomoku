import React from "react";
import { Container } from 'reactstrap';
import Board from '../../components/Board/Board';

const Home: React.FC = () => {
	return (
		<>
			<Container>
				<main className="home">
					<Board boardSize={10} winLimit={5} />
				</main>
			</Container>
		</>
	);
};

export default Home;
