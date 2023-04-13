import request from "supertest";
import express, { Router } from "express";
import connectDB from "../../../../db/dbConnexion";
import dotenv from "dotenv";

const initAppForTesting = (route: Router) => {
  //Configuration de l'environnement
  dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
  connectDB();

  //Initialisation de l'application
  const app = express();
  app.use(express.json());

  app.use(route);

  //Chargement de l'application avec Supertest
  const runningApp = request(app);

  return runningApp;
};

export { initAppForTesting };
