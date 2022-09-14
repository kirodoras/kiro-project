import app from "../src/app";
import supertest from "supertest";

beforeEach(() => {
  // essa função será executada antes de cada it() rodar
  //await prisma.$executeRaw`TRUNCATE TABLE receitas;`;
});

describe("GET /", () => {
  it("should return 200, Online", async () => {
    const result = await supertest(app).get("/");
    const status = result.status;

    expect(status).toEqual(200);
  });
});

afterAll(() => {
  // essa função será executada ao final de todos os testes
  //await prisma.$disconnect();
});
