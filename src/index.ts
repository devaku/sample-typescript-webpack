import express from 'express';
const app = express();

app.get('/', (req, res) => {
	res.json({
		status: 'HELLO',
	});
});

app.post('/', express.json(), (req, res) => {
	const body = req.body;
	res.json({
		...body,
	});
});

app.listen(8080, () => {
	console.log('Server is listening at PORT 8080');
});
