type Action = { type: 'APP_IS_READY'; payload: boolean };

export function prepareApp() {
	return async (dispatch: (arg0: { type: string; payload: boolean; }) => void) => {
		dispatch({ type: "APP_IS_READY", payload: true });
	};
}

const initialState = {
	appIsReady: false
};

export default (state = initialState, action: Action) => {
	switch (action.type) {
		case "APP_IS_READY":
			return {
				...state,
				appIsReady: action.payload
			};

		default:
			return state;
	}
};
