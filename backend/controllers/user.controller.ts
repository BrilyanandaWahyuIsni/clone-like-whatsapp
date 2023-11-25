
import { Request, Response, } from "express"
import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { sendResponseHttp } from "../middlewares/sendData";
import { StatusCodes } from "http-status-codes";
import crypto from 'crypto'
import { error } from "console";


interface userData {
  id: string;
}

interface REQUSER extends Request {
  cookies: {
    adnanid: string
  }
  user?: userData
}

const prisma = new PrismaClient()


// create new user 
export async function NewUser(req: Request, res: Response) {

  try {
    const { password: newPass, ...other } = req.body

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newPass, salt)

    try {
      const newAccount = await prisma.user.create({
        data: { password: hash, ...other },
      })

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: pass_create, ...new_data } = newAccount
      return sendResponseHttp(res, true, StatusCodes.CREATED, "Account anda berhasil dibuat!", { ...new_data })
    } catch (error) {
      return sendResponseHttp(res, false, StatusCodes.BAD_REQUEST, "Email atau username sudah ada!", {})
    }
  } catch (error) {
    return sendResponseHttp(res, false, StatusCodes.INTERNAL_SERVER_ERROR, "", {})
  }
}

// login user
export async function LoginUser(req: Request, res: Response) {
  try {
    const searchUserByEmail = await prisma.user.findMany({
      where: { email: req.body.email }
    })
    if (searchUserByEmail[0]) {
      const checkPassword = await bcrypt.compare(req.body.password, searchUserByEmail[0].password)
      if (checkPassword) {
        const token = jwt.sign({ id: searchUserByEmail[0].id }, process.env.TOKEN_SECRET!)

        return sendResponseHttp(res, true, StatusCodes.CREATED, "Login Succeful", { "token": token })

      } else {
        return sendResponseHttp(res, false, StatusCodes.NOT_FOUND, "Wrong Password!", { "msg": error })
      }

    } else {
      return sendResponseHttp(res, false, StatusCodes.NOT_FOUND, "Email not found!", {})
    }
  } catch (error) {
    return sendResponseHttp(res, false, StatusCodes.NOT_FOUND, "User Not Found!", { "msg": error })
  }

}

export async function CheckYourLogin(req: REQUSER, res: Response) {
  try {
    const checkUserById = await prisma.user.findFirst({
      where: {
        id: req.user?.id
      }
    })
    if (checkUserById) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...other } = checkUserById
      return sendResponseHttp(res, true, StatusCodes.OK, "logged in!", { ...other })
    } else {
      return sendResponseHttp(res, false, StatusCodes.UNAUTHORIZED, "logged out!", {})
    }
  } catch (error) {
    return sendResponseHttp(res, false, StatusCodes.INTERNAL_SERVER_ERROR, "Kesalah pada Server", {})
  }
}

// mengirim nilai token reset ke email
export async function SendTokenResetPassword(req: Request, res: Response) {
  try {
    await prisma.user.update({
      where: {
        email: req.body.email
      },
      data: {
        tokenResetPass: {
          "token": crypto.randomBytes(10).toString('hex'),
          "expiredAt": new Date(Date.now() + 300 * 1000)
        }
      }
    }).then(() => {
      return sendResponseHttp(res, true, StatusCodes.OK, "Token Berhasil dibuat!", {})
    }).catch(() => {
      return sendResponseHttp(res, false, StatusCodes.BAD_REQUEST, "Email tidak terdaftar", {})
    })
  } catch (error) {
    return sendResponseHttp(res, false, StatusCodes.INTERNAL_SERVER_ERROR, "ada masalah pada server", {})
  }
}

interface TokenData {
  token: string;
  expiredAt: string;
}
// check token and change password
export async function CheckTokenResetPassword(req: Request, res: Response) {
  try {
    const checkUserByEmail = await prisma.user.findFirst({
      where: {
        email: req.body.email
      }
    })
    if (!checkUserByEmail) {
      return sendResponseHttp(res, false, StatusCodes.NOT_FOUND, "email salah", checkUserByEmail)
    }

    const tokenData = JSON.stringify(checkUserByEmail.tokenResetPass)
    const parseTokenData = JSON.parse(tokenData) as TokenData
    if (parseTokenData["token"] === req.body.tokenResetPass && parseTokenData["token"] !== "") {
      const currentTime = new Date();
      const tokenExpired = new Date(parseTokenData["expiredAt"]);

      if (currentTime > tokenExpired && parseTokenData["expiredAt"] !== "") {
        return sendResponseHttp(res, false, StatusCodes.LOCKED, "token expired", {})
      }
      else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)
        await prisma.user.update({
          where: { email: req.body.email },
          data: {
            password: hash, tokenResetPass: {
              "token": "",
              "expiredAt": ""
            }
          }
        })
          .then(() => {
            return sendResponseHttp(res, true, StatusCodes.CREATED, "password berhasil dirubah", {})
          })
          .catch(() => {
            return sendResponseHttp(res, false, StatusCodes.BAD_REQUEST, "ada kesalahan", {})
          })
      }

    } else {
      return sendResponseHttp(res, false, StatusCodes.BAD_REQUEST, "token yang anda masukan salah!", {})
    }

  } catch (error) {
    return sendResponseHttp(res, false, StatusCodes.INTERNAL_SERVER_ERROR, "kesalahan pada server", {})
  }
}