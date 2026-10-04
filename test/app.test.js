const test = require("node:test");
const assert = require("node:assert");
const http = require("http");

const server = require("../app");

test("Node.js application responds successfully", async () => {
    await new Promise((resolve, reject) => {
        server.listen(0, () => {
            const port = server.address().port;

            http.get(`http://localhost:${port}`, (res) => {
                let data = "";

                res.on("data", chunk => {
                    data += chunk;
                });

                res.on("end", () => {
                    try {
                        assert.strictEqual(res.statusCode, 200);

                        assert.ok(
                            data.includes("Hello from Jenkins CI/CD - Version 2!")
                        );

                        resolve();
                    } catch (error) {
                        reject(error);
                    } finally {
                        server.close();
                    }
                });
            }).on("error", reject);
        });
    });
});
