import { configureStore } from '@reduxjs/toolkit';

import  cartReducer  from './cartReducer';
import notificationReducers from './ui';

const store = configureStore({
    reducer:{ cartReducer:cartReducer, notification:notificationReducers }
})


export default store;