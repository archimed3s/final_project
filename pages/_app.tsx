import App, {Container} from 'next/app';
import {ReactNode} from 'react';
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from 'redx/store';
import Layout from 'blocks/layout';

class MyApp extends App {
	public static async getInitialProps({Component, ctx}) {
		let pageProps = {};

		if(Component.getInitialProps) {
			pageProps = await Component.getInitialProps({ctx});
		}

		return {
			pageProps
		};
	}

	private render(): ReactNode {
		const {Component, pageProps, store}: any = this.props;

		return (
			<Container>
				<Provider store={store}>
					<Layout>
						<Component {...pageProps}/>
					</Layout>
				</Provider>
			</Container>
		);
	}
}

export default withRedux(createStore)(withReduxSaga(MyApp));
