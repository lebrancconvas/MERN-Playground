import express, { Request, Response, Router } from 'express';
import axios from 'axios';

const router: Router = express.Router();

router.use((req: Request, res: Response, next: Function) => {
	console.log(`[${req.method}] ${req.url}`);
	next();
});

router.get('/', (req: Request, res: Response) => {
	res.send('Hello Server!');
});

router.get('/api/questions', async(req: Request, res: Response) => {
	const { data } = await axios.get('http://localhost:9000/questions'); 
	res.send(data);
});

export { router };