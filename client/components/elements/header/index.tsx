import {Component, ReactNode} from 'react';
import Link from 'common/js/link';
import {style} from './styles';

export default class Header extends Component {
	private render(): ReactNode {
		return (
			<div className='team'>
				<style>{`
				.active {
					color: red;
				}`}
				</style>
				<Link prefetch passHref exact route='/'><a>Home</a></Link>
				<Link prefetch passHref route='/consulting'><a>About</a></Link>
				<style.Title>Some text</style.Title>
			</div>
		);
	}
}
