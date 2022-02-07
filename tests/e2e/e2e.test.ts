import { api } from "tests/utils";

describe('Test E2E base', () => {
  test('Ping E2E test', async () => {
    const { statusCode, body } = await api.get("/");
		expect(statusCode).toBe(200);
		expect(body.data.message).toBe("API is up and running");
  });

  test('Not found E2E test', async () => {
    const { statusCode, body } = await api.get("/asdf");
		expect(statusCode).toBe(404);
		expect(body.error.code).toBe("not-foud");
		expect(body.error.message).toBe("Resource not found");
  });
});
