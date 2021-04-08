import { NowRequest, NowResponse } from "@vercel/node";

export default (req: NowRequest, res: NowResponse) => {
  return res.json({ _id: null, dose: 10184 });
};
