export const initialState = {
	basket: [],
	user: null,
	address: null
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return {
				...state,
				basket: [...state.basket, action.item]
			};
		case 'REMOVE_FROM_BASKET':
			const index = state.basket.findIndex(
				item => item.id === action.id
			);
			return {
				...state,
				basket: state.basket.filter(
					(item, i) => i !== index
				)
			};
		case 'SET_USER':
			return {
				...state,
				user: action.user
			};
		case 'EMPTY_BASKET':
			return {
				...state,
				basket: []
			};
		case 'ADD_ADDRESS':
			return {
				...state,
				address: action.address
			};
		default:
			return state;
	}
};

export default reducer;
