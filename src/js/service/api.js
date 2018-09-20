/**
 * Created by zhouli on 18/9/20
 */
import request from '../utils/request';

//添加费用
export function createFee(obj) {
    return request(`/api/fee`, {
        method: 'POST',
        data: obj
    });
}

//修改费用
export function updateFee(obj) {
    return request(`/api/fee`, {
        method: 'PUT',
        data: obj
    });
}

//查询费用
export function getFee(id) {
    return request(`/api/fee/${id}`, {
        method: 'GET',
    });
}

//删除费用
export function deleteFee(id) {
    return request(`/api/fee/${id}`, {
        method: 'DELETE',
    });
}
