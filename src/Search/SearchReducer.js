
export const FILTER_DATA = "SearchReducer/FILTER_DATA";

// type initialStateType = {
//
// }
const initialState = {
products: [
    {productName: 'car', cost: 1500},
    {productName: 'house', cost: 27000},
    {productName: 'cat', cost: 7000}
]
};


const searchReducer = (state = initialState, action) => {
    switch (action.type) {
       case FILTER_DATA:{
            return {
                ...state,
                name: action.name
            }
        }
        default: {
            return state;
        }
    }

};


const filterSuccess = () =>    ({type: FILTER_DATA});



export const filterTC = () => async (dispatch) => {


};




export default searchReducer;