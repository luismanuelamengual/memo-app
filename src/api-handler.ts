import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import authOptions from 'pages/api/auth/[...nextauth]';

export function ApiHandler(handler: (req: NextApiRequest, res: NextApiResponse) => Promise<any>): (req: NextApiRequest, res: NextApiResponse) => Promise<void> {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getServerSession(req, res, authOptions);
    if (session) {
      try {
        const data = await handler(req, res);
        res.status(200).json({ success: true, data });
      } catch (e: any) {
        res.status(500).json({ success: false, error: { code: e.code ?? -1, message: e.message } });
      }
    } else {
      res.status(401).json({ success: false, error: { code: -1, message: 'Unauthorized'}});
    }
  };
}