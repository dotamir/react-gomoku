import React from 'react';
import { X, O } from '../../config/constant';
import { Button } from 'reactstrap';

const Mark: React.FC<{ mark: number, click: any }> = ({ mark, click }) => {
	const xSign = () => {
		return (
			<span className='mark__btn-x' />
		)
	}
	const oSign = () => {
		return <span className='mark__btn-o' />
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
			<Button className='mark__btn' color='link' onClick={() => click()}>{sign()}</Button>
		</>
	)
}

export default Mark;
