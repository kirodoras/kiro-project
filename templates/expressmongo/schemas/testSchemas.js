import joi from 'joi';

const testSchema = joi.object({
    test: joi.string().required(),
});

export { testSchema };