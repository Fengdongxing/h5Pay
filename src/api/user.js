/**
 * @author silence
 * @desc:注册登录页面请求借口
 * */

import request from '@/utils/ajax';

export function queryUserList(data){
    return request({
        url: '/api/user/index',
        method: 'post',
        data,
    });
}

// 发送验证码 todo
export function getSendCode(data) {
	return request({
		url: '/api/code/sms',
		method: 'post',
		data,
	});
}
// 登录和注册 todo
export function LoginPost(data) {
    return request({
        url: '/api/login/codeLogin',
        method: 'POST',
        data,
    });
}



