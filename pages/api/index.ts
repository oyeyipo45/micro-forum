import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  firstName: string;
  lastName: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ firstName: 'John Doe', lastName: 'oyeyipo' });
}
