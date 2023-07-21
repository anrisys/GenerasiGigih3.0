import express from "express";

import playlistRouter from "../routes/playlist.js";

export const startRest = () => {
  const app = express();
  app.use(express.json());

  app.use("/playlist", playlistRouter);

  app.use((req, res) => {
    res.status(404).json({
      message: "Not found!",
    });
  });
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
};
