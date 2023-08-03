// 检查手机号
export function checkTelephone(telephone) {
	let reg = /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/;
	if (!reg.test(telephone)) {
		return false;
	}
	return true;
}

// 检查邮箱
export function checkEmail(email) {
	let email_reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	if (!email_reg.test(email)) {
		return false;
	}
	return true;
}
// 检查身份证
export function checkIDcard() {
	let idreg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;

	if (!idreg.test(this.IDcard)) {
		return false;
	}
	return true;
}