import { Request, Response } from "express";
import { Logger } from "tslog";
import { Astro } from "../models";
import { validateRequestBody } from "../utils/middleware/middleware";

export class AstroController {
    private readonly logger = new Logger({ name: AstroController.name });
    constructor() { }

    public async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const allUAstro = await Astro.findAll();
            return res.status(200).json(allUAstro);
        } catch (error) {
            return res.status(500).json(error);
        }
    };


    public async getOne(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const astro = await Astro.findByPk(id);
            if (astro) return res.status(200).json(astro);
            return res.status(404).json({
                message: 'Astronaute Not Found',
                status: 404
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    public async deleteOne(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const existAstro = await Astro.findByPk(id);
            if (existAstro) {
                await Astro.destroy({ where: { id } });
                return res.status(200).json(existAstro);
            }
            return res.status(404).json({
                message: 'Astronaute Not Found',
                status: 404
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    };


    public async createOne(req: Request, res: Response): Promise<Response> {
        try {
            const validateBody = validateRequestBody(req, res);
            const { body } = req;

            if (!validateBody) return res.status(400).json({ error: 'Invalid request body. Only firstname, lastname, age, and gender are allowed.' });
            const astro = new Astro({
                firstname: body.firstname,
                lastname: body.lastname,
                age: body.age,
                gender: body.gender,
            });

            const create = await astro.save();
            return res.status(202).json(create);

        } catch (error) {
            return res.status(500).json(error);
        }
    };
}


     // if (req.query.filter) {
        //     let filters = (!(req.query.filter instanceof String) ? req.query.filter : filters.push(req.query.filter as string)) as Array<string>;

        //     console.log(filters);

        //     whereConditions = filters.reduce((acc: any, item) => {
        //         const [attr, operator, value] = item.split(/\|\||\$/).filter(Boolean);
        //         if (!acc.where[attr]) {
        //             acc.where[attr] = {};
        //         }
        //         acc.where[attr][operator] = value;
        //         return acc;
        //     }, { where: {} });
        // }
