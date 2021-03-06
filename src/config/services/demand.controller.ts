/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { RequestMethod } from '~/core/http'

// 控制器名称
const controller = 'demand'

export const DemandController = {
    // create demand
    post: {
        controller,
        type: RequestMethod.Post
    },
    // update demand
    put: {
        controller,
        type: RequestMethod.Put
    },
    // apiName 模糊查询
    apiList: {
        controller,
        action: 'apiList',
        type: RequestMethod.Get
    },
    // check api submit
    getDetail: {
        controller,
        action: 'getDetail',
        type: RequestMethod.Get
    }
}
