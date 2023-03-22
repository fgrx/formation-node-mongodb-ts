import { describe, expect, it } from "vitest";
import request from "supertest";
import express from "express";
import connectDB from "../../../../../db/dbConnexion";
import dotenv from "dotenv";
import getHikeBySlug from "../getHikeBySlug";

//Configuration de l'environnement
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
connectDB();

//Initialisation de l'application
const app = express();
const routes = getHikeBySlug("/api/v1");
app.use(routes);

//Chargement de l'application avec Supertest
const runningApp = request(app);

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
