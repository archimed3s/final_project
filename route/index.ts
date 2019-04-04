import * as createRoutes from 'next-routes';
import Routes from 'next-routes';

// @ts-ignore
const routes: Routes = createRoutes();

routes
	.add('companies', '/companies/:id(\\d+)', 'card-company')
	.add('investors', '/investors/:id(\\d+)', 'card-investor')
	.add('service', '/service/:id(\\d+)', 'card-service')
	.add('redirectToAllDeals', '/deals', 'all-deals')
	.add('card-investor', '/card-investor', '404')
	.add('card-company', '/card-company', '404')
	.add('card-service', '/card-service', '404');

export default routes;
export const Link = routes.Link;
