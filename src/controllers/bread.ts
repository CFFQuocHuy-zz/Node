import { Request, Response } from "express";
import { Bread, BreadDocument } from "../models/Bread";

/**
 * Breads page.
 * @route GET /
 */
export const index = (req: Request, res: Response) => {
  Bread.find({}, function (_, breads: BreadDocument[]) {
    res.render("bread/list-bread", {
      title: "Breads",
      breads,
    });
  });
};

/**
 * Create bread.
 * @route POST /create/bread
 */
export const postBread = async (req: Request, res: Response): Promise<void> => {
  Bread.create({ name: "Banh mi me", type: "long" }, function (err, small) {
    console.log("success");
    console.error(err);
    // saved!
    res.send(200);
  });
};
