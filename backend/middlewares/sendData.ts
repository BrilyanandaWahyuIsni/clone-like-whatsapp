import { Response } from "express";
import { getReasonPhrase } from "http-status-codes";

export function sendData(res: Response, status: number, pesan: string) {
  return res.status(status).json({ "msg": pesan });
}

export function sendResponseHttp(res: Response, status: boolean, code: number, pesanKedua: string, data: unknown) {
  return res
    .status(code)
    .json(
      responseJson(status, code, getReasonPhrase(code), pesanKedua, data)
    );
}


function responseJson(status: boolean, code: number, message: string, message2: string, data: unknown) {
  return {
    "status":  status,
    "code":    code,
    "message": { "message": message, "message_add": message2 },
    "data":    data
  };
}

