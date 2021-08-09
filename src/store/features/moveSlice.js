import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// createAsyncThunk创建一个异步的action，这个方法被触发的时候会有三个状态
// pending(进行中) fulfilled(成功) rejected(失败)
import {loadMoviesAPI, moguoMoviesAPI} from '../../api/move'
// 这个action是可以直接调用的，用来处理异步操作获取数据
// createAsyncThunk接受Redux action type字符串，返回一个promise callback。
// createAsyncThunk可接受三个参数

// typePrefix： action types
// payloadCreator： { dispatch, getState, extra, requestId ...}, 平常开发只需要了解dispatch和getState就够了，注：这儿的getState能拿到整个store里面的state
// options: 可选，{ condition, dispatchConditionRejection}， condition：可在payload创建成功之前取消执行，return false表示取消执行。
// createReducer时，有两种表示方法，一种是builder callback,即build.addCase(),一种是map object。下面以这种方式讲解。 createAsyncThunk创建成功后，return出去的值，会在extraReducers中接收，有三种状态：

// pending: 'fetchCustomer/requestStatus/pending'，运行中；
// fulfilled: 'fetchCustomer/requestStatus/fulfilled'，完成；
// rejected: 'fetchCustomer/requestStatus/rejected'，拒绝；
export const loadData = createAsyncThunk('movie/loadData', async (pageNum) => {
    const res = await loadMoviesAPI(pageNum);
    return res; // 此处的返回结果会在 .fulfilled中作为payload的值
   });

export const loadMangguoData = createAsyncThunk('movie/loadMangguoData', async (pageNum) => {
    const res = await moguoMoviesAPI(pageNum);
    return res; // 此处的返回结果会在 .fulfilled中作为payload的值
})
export const MoveSlice = createSlice({
    name: 'moveDemo',
    initialState: {
        list: [],
        titles:'move demo page title'
    },
    reducers: {
        loadDataEnd(state, { payload }) {
            console.log(state)
            state.titles = `move demo page title ${Math.random()}`;
            },
        },
    // 可以额外的触发其他slice中的数据关联改变
    extraReducers: {
        [loadData.fulfilled](state, { payload }) {
            console.log(payload);
            state.list = payload.data.list;
        },
        [loadData.rejected](state, err) {
            console.log(err);
        },
        [loadData.pending](state) {
            console.log('进行中');
        },
        [loadMangguoData.fulfilled](state, { payload }) {
            console.log(payload.data.list);
            // state.list = payload.data.list;
        },
        [loadMangguoData.rejected](state, err) {
            console.log(err);
        },
        [loadMangguoData.pending](state) {
            console.log('进行中 mang guo');
        },
    },
})

export const { loadDataEnd } = MoveSlice.actions; 
export default MoveSlice.reducer;