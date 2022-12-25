import { Request, RequestHandler, Response } from "express";

const homeController: RequestHandler = (req: Request, res: Response) => {
  res.send("welcome in home !");
};

export default homeController