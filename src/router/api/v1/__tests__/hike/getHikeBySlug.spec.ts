import { describe, expect, it } from "vitest";
import getHikeBySlug from "../../hike/getHikeBySlug";
import { initAppForTesting } from "../initTests";

const route = getHikeBySlug("/api/v1");
const runningApp = initAppForTesting(route);

describe("GET api/v1/hikes", () => {
  it("Should test that true is true 😅", () => {
    expect(true).toBe(true);
  });

  it("should return a single hike with sending the slug", async () => {
    const response = await runningApp.get(
      `/api/v1/hikes/boucle-grange-dimiere`
    );

    expect(response.status).toBe(200);

    expect(response.body.slug).toBe("boucle-grange-dimiere");
  });

  it("should return a 404", async () => {
    const response = await runningApp.get(
      `/api/v1/hikes/randonnee-qui-n-existe-pas`
    );

    expect(response.status).toBe(404);
  });
});
