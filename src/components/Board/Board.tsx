import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import Mark from '../Mark/Mark';
import { repeatsLoop, warnAlert } from '../../utils/helpers';
import { X, O } from '../../config/constant';
import { Row, Col, Button } from 'reactstrap';

const Board: React.FC<{ boardSize: number, winLimit: number }> = ({ boardSize, winLimit }) => {
	const [initialized, setInitialized] = useState(false);
	const [winner, setWinner] = useState(null);
	const [board, setBoard] = useState(Array());
	const [currentSign, setCurrentSign] = useState(0);
	const [prevSign, setPrevSign] = useState(0);

	useEffect(() => {
		if (!initialized) {
			setBoard(_.times(boardSize, () => _.times(boardSize, _.constant(null))));
			setCurrentSign(X);
			setPrevSign(O);
			setWinner(null);

			setInitialized(true);
		}
	});

	const reset = () => {
		setInitialized(false);
	}
	const gameProcess = (x: number, y: number) => {
		const sign = board[x][y];
		const whoWon = won(sign, x, y);
		if (whoWon) {
			setWinner(sign);
		}
	}
	const won = (sign: number, x: number, y: number) => {
    const range = _.range(-winLimit + 1, winLimit)
    return _.some([
      repeatsLoop(_.map(range, (i) => {
        return _.get(board, [x, y - i])
      }), sign, winLimit), // N-S
      repeatsLoop(_.map(range, (i) => {
        return _.get(board, [x + i, y - i])
      }), sign, winLimit), // NE-SW
      repeatsLoop(_.map(range, (i) => {
        return _.get(board, [x + i, y])
      }), sign, winLimit), // E-W
      repeatsLoop(_.map(range, (i) => {
        return _.get(board, [x + i, y + i])
      }), sign, winLimit), // SE-NW
    ])
	}
	const canPlay = (x: number, y: number) => {
		if (board[x][y]) {
			return false;
		}

		board[x][y] = currentSign;
		setBoard(board);
		setPrevSign(currentSign);
		setCurrentSign(prevSign === X ? X : O);
		return true;
	}
	const click = (x: number, y: number) => {
		const valid = canPlay(x, y);
		if (!valid) {
			warnAlert();
			return;
		}

		gameProcess(x, y);
	}

	return (
		<>
			<div className='board'>
				<Row>
					<Col sm='12' md='8'>
						<div className='board__game'>
							<div className={'board ' + currentSign}>
								{_.map(board, (y, i) => {
									return (
										<div key={i} className='board__game-row'>
											{_.map(y, (x, k: number) => {
												console.log(board[i][k]);
												return <Mark key={k} mark={board[i][k]} click={() => {
													if (winner) {
														return
													}
													click(i, k);
												}} />
											})}
										</div>
									)
								})}
							</div>
						</div>
					</Col>
					<Col sm='12' md='4'>
						<div className='board__sidebar'>
							<div className='board__sidebar-players'>
								<div className='board__sidebar-players--item'>
									PLAYER: X
								</div>
								<div className='board__sidebar-players--item'>
									PLAYER: O
								</div>
							</div>
							<div className='board__sidebar-info'>
								PLAYER TURN:
								{currentSign === X && <span> X</span>}
								{currentSign === O && <span> O</span>}
							</div>
							<div className='board__sidebar-winner'>
								{winner && winner}
							</div>
							<div className='board__sidebar-options'>
								<Button color='primary' onClick={reset}>Restart Game</Button>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default Board;
