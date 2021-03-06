import { GitHub } from "../src/github";

describe("pullRequests", () => {
  it("get", async () => {
    const url = "https://github.com/selmertsx/serverless-prpolice";
    const repo = "serverless-prpolice";
    const owner = "selmertsx";
    const github = new GitHub(owner, repo);
    github.authenticate();
    const pullRequests = await github.pullRequests();
    expect(pullRequests[0]).toEqual({
      url: "https://github.com/selmertsx/serverless-prpolice/pull/1",
      reviewers: ["yhatt"],
      title: "bugfix github.ts"
    });
  });
});
