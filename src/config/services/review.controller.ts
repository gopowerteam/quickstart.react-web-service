/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { RequestMethod } from '~/core/http'

// 控制器名称
const controller = 'review'

export const ReviewController = {
    // all
    all: {
        controller,
        action: 'all',
        type: RequestMethod.Get
    },
    // 审批review的接口
    status: {
        controller,
        action: 'status',
        type: RequestMethod.Put
    }
}