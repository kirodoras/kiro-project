
import { testSchema } from "../schemas/testSchemas.js";

export function validateTest(req, res, next) {
    const validateBody = testSchema.validate(req.body);

    if (validateBody.error) {
        res.sendStatus(422);
        return;
    }

    next();
}