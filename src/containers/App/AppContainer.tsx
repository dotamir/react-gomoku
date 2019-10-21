import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import AppLoadingContainer from '../AppLoading/AppLoadingContainer';
import getRoutes from '../../config/routes';

interface AppProps extends RouteComponentProps {}

const AppContainer: React.FC<AppProps> = () => {
	return (
		<>
			<div className='outer-container'>
				<div className='page-wrap'>
						<AppLoadingContainer>
								{getRoutes()}
						</AppLoadingContainer>
				</div>
			</div>
		</>
	);
}

export default withRouter(AppContainer);
