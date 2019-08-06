import * as API from './'

export default {


  //查询获取动态详情列表
  getDynamicsList: params => {
    return API.GET('/api/dynamicsList', params)
  },


}
