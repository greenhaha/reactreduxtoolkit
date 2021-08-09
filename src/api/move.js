// 发起网络请求获取数据
export const loadMoviesAPI = (pageNum) =>
 fetch(
 `https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=11&page_id=${pageNum}&ret_num=48`
  ).then((res) => res.json());

export const moguoMoviesAPI = (pageNum) =>
 fetch(`https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=11&page_id=9&ret_num=48`)
 .then((res) => res.json());