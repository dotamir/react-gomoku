import React from 'react';
import { X, O } from '../../config/constant';
import { Button } from 'reactstrap';

const Mark: React.FC<{ mark: number, click: any }> = ({ mark, click }) => {
	const xSign = () => {
		return (
			<span>X</span>
		)
	}
	const oSign = () => {
		return <span>O</span>
	}

	const sign = () => {
		if (mark === X) {
			return xSign();
		}
		if (mark === O) {
			return oSign();
		}

		return null;
	}

	return (
		<>
			<Button className='mark-btn' color='link' onClick={() => click()}>{sign()}</Button>
		</>
	)
}

export default Mark;
