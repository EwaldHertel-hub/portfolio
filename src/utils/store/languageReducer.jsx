const initialState = {
    language: 'en', // default language
};

const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return {
                ...state,
                language: action.payload,
            };
        default:
            return state;
    }
};

export const setLanguage = (language) => ({
    type: 'SET_LANGUAGE',
    payload: language,
});

export default languageReducer;