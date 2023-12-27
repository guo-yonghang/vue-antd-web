// 校验手机号是否正确
export function isPhone(phone: string | number): boolean {
  return /^1[3456789]\d{9}$/.test(String(phone));
}

// 校验邮箱是否正确
export function isEmail(email: string): boolean {
  return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(email);
}

// 校验金钱格式是否正确
export function isMoney(money: string | number): boolean {
  return /^\d+(\.\d{1,2})?$/.test(String(money));
}

// 校验http-https的链接
export function isHttp(url: string): boolean {
  return /^(https?:\/\/)/.test(url);
}
