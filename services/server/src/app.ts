import express, { Request, Response } from 'express';
import { router } from './routes/router';
import cors from 'cors';

const PORT = process.env.PORT || 3002;


const app = express();

app.use(cors());
app.use(router);

app.listen(PORT, () => {
	try {
		console.log(`[SUCCESS] TASK_01: Server is running on port ${PORT}`);
	} catch(err) {
		console.error(err);
		console.log(`[FAILURE] TASK_01: Server is not running on port ${PORT}`);
	}
});

