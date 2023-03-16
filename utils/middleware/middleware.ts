import { Request, Response } from "express";

export const validateRequestBody = (req: Request, res: Response) => {
    const allowedFields = ['firstname', 'lastname', 'age', 'gender'];
    const receivedFields = Object.keys(req.body);

    return allowedFields.length === receivedFields.length && allowedFields.every((element, index) => element === receivedFields[index]);





};