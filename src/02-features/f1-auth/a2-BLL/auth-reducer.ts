type AppReducerType = {
    initialized: boolean,
}
let initialState: AppReducerType = {
    initialized: false,
};

type ActionTypes = InitializedSuccessType

export const authReducer = (state: AppReducerType = initialState, action: ActionTypes): AppReducerType => {
    switch (action.type) {
        default:
            return {...state};
    }
};

type InitializedSuccessType = ReturnType<typeof initializedSuccess>;
//action creator
const initializedSuccess = () => ({type: 'INITIALIZED-SUCCESS'}) as const;
//thunk
