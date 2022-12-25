import { Request, RequestHandler, Response } from "express";

const thisisplaceholder: RequestHandler = (req: Request, res: Response) => {
  res.send("welcome in thisisplaceholder");
};

export default thisisplaceholder