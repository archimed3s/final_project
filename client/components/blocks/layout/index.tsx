import Header from 'elements/header';
import {style} from './styles';

export default ({children}) => (
	<>
		<Header/>
		<style.Content>
			{children}
		</style.Content>
	</>
);
