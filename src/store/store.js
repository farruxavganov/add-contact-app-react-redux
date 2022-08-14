import {createStore} from "redux";
import {redu} from "./reducers";

let data = [
    {
        id: 1,
        name: "adhamjon",
        email:"a@m.ru",
        number:123
    },
    {
        id: 2,
        name: "alibek",
        email:"as@m.ru",
        number:12377
    }
]

const store = createStore(redu,data);

export default store;