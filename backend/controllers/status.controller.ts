
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { sendResponseHttp } from "../middlewares/sendData";

// create prisma client
const prisma = new PrismaClient()

interface REQUSER extends Request {
    cookies: {
        adnanid: string
    }
    user?: {
        id: string
    }
}


export const TestContorller = (req: Request, res: Response) => {
    res.status(200).json("nanda")
}

// create new status
export async function NewStatus(req: REQUSER, res: Response) {
    // cek apakah ada user dengan id dari req.user.id
    // jika req.user.id ada atau true
    if (req.user?.id) {
        // mencari user berdasarkan id
        const userById = await prisma.user.findFirst({
            where: {
                id: req.user?.id
            }
        })

        // if user by id found on db
        if (userById) {
            try {
                const newStatus = await prisma.status.create({
                    data: { userId: req.user.id, ...req.body }
                })
                sendResponseHttp(res, true, StatusCodes.CREATED, "status publish", newStatus)
            } catch (error) {
                sendResponseHttp(res, false, StatusCodes.BAD_REQUEST, "status not publish", error)
            }
        }
        // if user by id not found on db
        else {
            sendResponseHttp(res, false, StatusCodes.NOT_FOUND, "User not found", {})
        }
    }
    // jika req.user.id tidak ada atau false
    else {
        return sendResponseHttp(res, false, StatusCodes.NOT_FOUND, "please login", {})
    }
}

// delete status if your status
export async function DeleteStatus(req: REQUSER, res: Response) {
    // cek apakah ada user dengan id dari req.user.id
    // jika req.user.id ada atau true
    if (req.user?.id) {
        // mencari user berdasarkan id
        const userById = await prisma.user.findFirst({
            where: {
                id: req.user?.id
            }
        })

        // if user by id found on db
        if (userById) {
            try {
                await prisma.status.delete({
                    where: {
                        id: req.body.id,
                        userId: userById.id
                    }
                })
                return sendResponseHttp(res, true, StatusCodes.OK, "Status has been deleted!", {})
            } catch (error) {
                return sendResponseHttp(res, true, StatusCodes.NOT_ACCEPTABLE, "Not your create status!", {})
            }
        }

        // if user by id not found on db
        else {
            sendResponseHttp(res, false, StatusCodes.NOT_FOUND, "User not found", {})
        }
    }

    // jika req.user.id tidak ada atau false
    else {
        return sendResponseHttp(res, false, StatusCodes.UNAUTHORIZED, "please login", {})
    }
}

// update your status
export async function UpdateStatus(req: REQUSER, res: Response) {
    // cek apakah ada user dengan id dari req.user.id
    // jika req.user.id ada atau true
    if (req.user?.id) {
        // mencari user berdasarkan id
        const userById = await prisma.user.findFirst({
            where: {
                id: req.user?.id
            }
        })

        // if user by id found on db
        if (userById) {
            try {
                const updateStatusCreated = await prisma.status.update({
                    where: {
                        id: req.params.id,
                        userId: userById.id
                    },
                    data: {
                        ...req.body
                    }
                })
                return sendResponseHttp(res, true, StatusCodes.CREATED, "Status has been change!", updateStatusCreated)
            } catch (error) {
                return sendResponseHttp(res, false, StatusCodes.NOT_ACCEPTABLE, "Not your create status!", error)
            }
        }

        // if user by id not found on db
        else {
            sendResponseHttp(res, false, StatusCodes.NOT_FOUND, "User not found", {})
        }
    }

    // jika req.user.id tidak ada atau false
    else {
        return sendResponseHttp(res, false, StatusCodes.UNAUTHORIZED, "please login", {})
    }
}


// get a status
export async function GetStatusById(req: REQUSER, res: Response) {
    if (req.params.id) {
        try {
            const statusById = await prisma.status.findFirst({
                where: { id: req.params.id }
            })
            if (statusById) {
                if (statusById?.type_public === "private") {
                    if (statusById.userId === req.user?.id) {
                        return sendResponseHttp(res, true, StatusCodes.OK, "", statusById)
                    } else {
                        return sendResponseHttp(res, false, StatusCodes.LOCKED, "not status read!", {})
                    }
                } else {
                    return sendResponseHttp(res, true, StatusCodes.OK, "", statusById)
                }
            } else {
                throw new Error("Status")
            }
        } catch (error) {
            return sendResponseHttp(res, false, StatusCodes.NOT_FOUND, "Status not found!", { "msg": error })
        }
    }
    else {
        return sendResponseHttp(res, false, StatusCodes.NOT_FOUND, "Select a Status!", {})
    }
}

// get many status 
export async function GetManyStatusRandom(req: Request, res: Response) {

    try {
        const manyStatus = await prisma.status.findMany({
            where: { type_public: "public" }
        })
        return sendResponseHttp(res, true, StatusCodes.OK, "Status Ok!", { manyStatus })
    } catch (error) {
        return sendResponseHttp(res, false, StatusCodes.NOT_FOUND, "Not found status in db", {})
    }

}

// get status account
export async function GetAccountStatus(req: REQUSER, res: Response) {

    const checkUserById = await prisma.user.findFirst({
        where: { id: req.user?.id }
    })

    try {
        const manyStatus = await prisma.status.findMany({
            where: (checkUserById?.id === req.params.id)
                ? { userId: req.params.id }
                : { userId: req.params.id, type_public: "public" }
        })
        return sendResponseHttp(res, true, StatusCodes.OK, "Status Ok!", { manyStatus })
    } catch (error) {
        return sendResponseHttp(res, false, StatusCodes.NOT_FOUND, "Not found status in db", {})
    }

}
