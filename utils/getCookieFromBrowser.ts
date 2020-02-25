import Cookies from "js-cookie";

export const getCookieFromBrowser = (key: string): string | undefined => {
    if(process.browser) {
        return Cookies.get(key);
    } else {
        return undefined;
    }
}
// const getCookieFromBrowser = () => {
//     if(process.browser) {
//         return Cookies.get('jid');
//     } else {
//         return undefined;
//     }
// }