import { createStore } from 'redux';

// 1. store create
// 2. 초기값 설정
// 3. 액션타입 정의 (대문자)
// 4. 액션 생성함수 (소문자)
// 5. reducer(state, actoin)
// 6. store 만들기
// 7. store.dispatch


const initialState = {
    counter: 0,
    text: '',
    list: [],
}

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

const increase = () => ({
    type: INCREASE,
});

const decrease = () => ({
    type: DECREASE,
});

const changeText = (text) => ({
    type: CHANGE_TEXT,
    text
});

const addToList = (item) => ({
    type: ADD_TO_LIST,
    item
})


function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter -1
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            }
            default:
                return state;
    }
}

const store = createStore(reducer);
console.log(store.getState());

const listener = () => {
    const state = store.getState();
    console.log(state);
}

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch({ type: INCREASE })
store.dispatch(addToList({id:1, text: '안녕'}))