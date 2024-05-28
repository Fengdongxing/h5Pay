export function isMobile(s)
{
    var patrn=/^1[3|4|5|6|7|8|9]\d{9}$/;
    if (!patrn.exec(s)) return false;
    return true
}