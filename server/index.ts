import {createServer} from 'http';
import * as next from 'next';
import route from '../route';

const port: number = parseInt(process.env.PORT, 10) || 3000,
	dev: boolean = process.env.NODE_ENV !== 'production',
	app = next({dev}),
	handler = route.getRequestHandler(app);

app.prepare().then(() => {
	createServer(handler)
		.listen(port, () => {
			console.warn(`> Ready on http://localhost:${port}`);
		});
});
