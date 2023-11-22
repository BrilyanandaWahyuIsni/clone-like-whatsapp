import jwt from 'jsonwebtoken'
import { Response, Request, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes';
import { sendResponseHttp } from './sendData';

interface userData {
  id: string;
}

interface REQUSER extends Request {
  cookies: {
    adnanid: string
  }
  user?: userData
}

export function authenticateToken(req: REQUSER, res: Response, next: NextFunction) {
  // const { adnanid } = req.cookies
  // console.log(req.headers)
  // const { adnanid } = req.headers.authorization
  const header = req.headers.authorization
  const adnanid = header?.split(" ")[1]

  if (!adnanid) {
    return sendResponseHttp(res, false, StatusCodes.NOT_FOUND, "Token Tidak Ada", {})
  }

  try {
    const decoded = jwt.verify(adnanid, process.env.TOKEN_SECRET!);

    if (!decoded) {
      return sendResponseHttp(res, false, StatusCodes.NOT_FOUND, "Token Tidak ditemukan", {})
    }

    if (typeof decoded !== 'string') {
      req.user = decoded as userData;
    } else {
      return sendResponseHttp(res, false, StatusCodes.FORBIDDEN, "", {})
    }

  } catch (error) {
    return sendResponseHttp(res, false, StatusCodes.INTERNAL_SERVER_ERROR, "", {})
  }
  next();

}