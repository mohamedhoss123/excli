import { Request, RequestHandler, Response , NextFunction } from "express";

const thisisplaceholder: RequestHandler = (req: Request, res: Response , next :NextFunction) => {
  next()
};

export default thisisplaceholder