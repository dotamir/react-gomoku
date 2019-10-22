import { X, O } from '../config/constant';

export const repeatsLoop = (arr: Array<number>, val: number, times: number) => {
	let r = 0;

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === val) {
      ++r
    } else {
      r = 0
    }
    if (r === times) {
      return true
    }
  }
  return false
}

export const winAlert = (sign: number) => {
	if (sign === X) {
		alert('X wins');
	}
	if (sign === O) {
		alert('O wins');
	}

	return false;
}

export const warnAlert = () => {
	alert('STOP IT!');
}
