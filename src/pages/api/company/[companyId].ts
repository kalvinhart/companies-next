import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
    const { companyId } = req.query;

    const jsonDirectory = path.join(process.cwd(), 'data');
    const fileContents = await fs.readFile(jsonDirectory + '/Companies.json', 'utf8');

    const companies: any[] = JSON.parse(fileContents);
    const company = companies.find((c: any) => c.CompanyId === companyId)

    res.status(200).json(company);
}