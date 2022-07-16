import { db } from "../databases/mongo.js";

export async function insertTest(req, res) {
    const { test } = req.body;
    try {
        await db.collection("testCol").insertOne({ test });
        res.send("Created").status(201);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function findTest(req, res) {
    try {
        const tests = await db.collection("testCol").find().toArray();
        res.send(tests).status(302);
    } catch (error) {
        res.sendStatus(500);
    }
}