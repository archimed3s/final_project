import {withRouter} from 'next/router';
import {cloneElement, Children} from 'react';
import {Link} from 'route';

const ActiveLink = ({router, children, exact, ...props}) => {
	const child = Children.only(children);

	let className = child.props.className || null;
	if(exact && router.asPath === props.route) {
		className = `${className !== null ? className : ''} active`.trim();
	} else if(!exact && router.asPath.indexOf(props.route) !== -1) {
		className = `${className !== null ? className : ''} active`.trim();
	}

	return <Link {...props}>{cloneElement(child, {className})}</Link>;
};

export default withRouter(ActiveLink);
