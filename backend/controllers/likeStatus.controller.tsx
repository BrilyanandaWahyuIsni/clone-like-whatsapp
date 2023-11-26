import { Request, Response } from "express";
import { sendResponseHttp } from "../middlewares/sendData";
import { StatusCodes } from "http-status-codes";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface REQUSER extends Request {
    user?: {
        id: string
    }
}


export function TestSementara(req: Request, res: Response) {
    res.status(200).json("berhasil");
}


export async function LikeStatusById(req: REQUSER, res: Response) {
    // if not login
    if (!req.user?.id) {
        return sendResponseHttp(res, false, StatusCodes.UNAUTHORIZED, "Please Login!", {});
    }

    // if you have logged in
    // check account by userid whether account exists or not?
    const userById = await prisma.user.findFirst({
        where: { id: req.user.id }
    });

    // if user not found in db
    if (!userById) {
        return sendResponseHttp(res, false, StatusCodes.NOT_FOUND, "User not found!", {});
    }

    // if user found on db
    const statusById = await prisma.status.findFirst({
        where: { id: req.params.id }
    });

    // if status not found
    if (!statusById) {
        return sendResponseHttp(res, false, StatusCodes.NOT_FOUND, "Status not found!", {});
    }

    const checkLikeStatusById = await prisma.likeStatus.findFirst({
        where: {
            userId:   userById.id,
            statusId: statusById.id
        }
    });

    // if you like status
    if (checkLikeStatusById) {
        return sendResponseHttp(res, false, StatusCodes.CONFLICT, "already like status", {});
    }
    // if status found on db
    try {
        await prisma.likeStatus.create({ data: { userId: userById.id, statusId: statusById.id } });
        return sendResponseHttp(res, true, StatusCodes.CREATED, "Success like status", {});
    } catch (error) {
        return sendResponseHttp(res, false, StatusCodes.BAD_REQUEST, "fail send request!", {});
    }
}