import React, { useEffect, PropsWithChildren } from 'react';
import { connect, DispatchProp } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { prepareApp } from '../../redux/modules/app';

interface AppLoadingContainerProps extends DispatchProp<any> {
	appIsReady?: boolean;
}

const AppLoadingContainer: React.FC<PropsWithChildren<AppLoadingContainerProps>> = ({ appIsReady, children, dispatch }) => {
    useEffect(() => {
        // In order to show how is working this component, I put a dummy timeout to make app ready.
        if (!appIsReady) {
            setTimeout(() => {
                dispatch(prepareApp());
            }, 1000);
        }
    });

    if (appIsReady) {
        return (
					<>
						{children}
					</>
				);
    }

    return (
        <main>
            <div className='loading-container text-center'>
                <Spinner />
                <p>App is loading...</p>
            </div>
        </main>
    )
};

type mapProps = {
	app: {
		appIsReady: boolean
	}
};
const mapStateToProps = ({ app }: mapProps) => ({
	appIsReady: app.appIsReady,
});

export default connect(mapStateToProps)(AppLoadingContainer);
