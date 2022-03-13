import mongoose from "mongoose";

type BreadType = "long" | "circle";

export type BreadDocument = mongoose.Document & {
  name: string;
  type: BreadType;
};

const breadSchema = new mongoose.Schema<BreadDocument>(
  {
    name: { type: String, unique: true },
    type: { type: String },
  },
  { timestamps: true }
);
export const Bread = mongoose.model<BreadDocument>("Bread", breadSchema);
