import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./../containers/Home/HomeContainer'));

export default function getRoutes() {
	return (
		<>
			<Suspense fallback={null}>
				<Switch>
					<Route path='/' exact={true} component={Home} />
				</Switch>
			</Suspense>
		</>
	)
}
