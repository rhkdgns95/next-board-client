import { NextApiRequest } from "next";

export const getCookieFromServer = (key: string, req: NextApiRequest): string | undefined => {
    if(req.headers.cookie) {
        const rawCookie = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith(`${key}=`));
        if(rawCookie) {
            // console.log("return rawCookie.split('=')[1];: ", rawCookie.split('='));
           return rawCookie.split('=')[1];
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
}