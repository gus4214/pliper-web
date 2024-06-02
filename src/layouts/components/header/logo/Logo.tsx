import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
	return (
		<Link href={'/'}>
			<Image src={'/images/logo/pliper.svg'} alt='logo' width={96} height={24} />
		</Link>
	);
};

export default Logo;
