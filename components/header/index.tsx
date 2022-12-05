import Head from 'next/head';
import Link from 'next/link';
import { isEmpty } from 'lodash';

const Header = ( { header }:any ) => {
	
	const { headerMenuItems, siteDescription, siteLogoUrl, siteTitle, favicon } = header || {};
	
	return (
		<>
			<Head>
				<title>{ siteTitle || 'Nexts WooCommerce' }</title>
				<link rel="icon" href={ favicon || '/favicon.ico' }/>
			</Head>
			<div className="header">
				<nav className="p-4 bg-white">
					<div className="container flex flex-wrap items-center justify-between mx-auto">
						<div className="flex items-center flex-shrink-0 mr-20 text-black">
							<Link href="/" >
									{
										siteLogoUrl ? (
											<img className="mr-2" src={ siteLogoUrl } alt={ `${ siteTitle } logo` } width="86"
											     height="86"/>
										) : (
											<svg className="w-8 h-8 mr-2 fill-current" width="54" height="54"
											     viewBox="0 0 54 54"
											     xmlns="http://www.w3.org/2000/svg">
												<path
													d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"></path>
											</svg> )
									}
							</Link>
							<span>
								<Link href="/" >
									<span className="text-xl font-semibold tracking-tight">{ siteTitle || 'WooNext' }</span>
								</Link>
								{ siteDescription ? <p>{ siteDescription }</p> : null }
							</span>
						</div>
						<div className="block lg:hidden">
							<button
								className="flex items-center px-3 py-2 text-black border border-black rounded hover:text-black hover:border-black">
								<svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"
								     xmlns="http://www.w3.org/2000/svg">
									<title>Menu</title>
									<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
								</svg>
							</button>
						</div>
						<div
							className="flex-grow w-full h-0 overflow-hidden lg:h-full lg:flex lg:items-center lg:w-auto">
							<div className="text-sm font-medium uppercase lg:flex-grow">
								{ ! isEmpty( headerMenuItems ) && headerMenuItems.length ? headerMenuItems.map( (menuItem : any) => (
									<Link legacyBehavior key={menuItem?.ID} href={ menuItem?.url || '/' }>
										<a className="block mt-4 mr-10 text-black lg:inline-block lg:mt-0 hover:text-black"
										   dangerouslySetInnerHTML={{__html: menuItem.title}}/>
									</Link>
								) ) : null }
							</div>
							<div className="text-sm font-medium">
								<a href="#responsive-header"
								   className="block mt-4 mr-10 text-black lg:inline-block lg:mt-0 hover:text-black">
									<svg xmlns="http://www.w3.org/2000/svg" className="hidden m-auto lg:block"
									     fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
										      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
									</svg>
									Profile
								</a>
								<a href="#responsive-header"
								   className="block mt-4 mr-10 text-black lg:inline-block lg:mt-0 hover:text-black">
									<svg xmlns="http://www.w3.org/2000/svg" className="hidden m-auto lg:block"
									     fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
										      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
									</svg>
									Wishlist
								</a>
								<a className="block mt-4 mr-10 text-black lg:inline-block lg:mt-0 hover:text-black"
								   href="/cart/">
									<svg xmlns="http://www.w3.org/2000/svg" className="hidden m-auto lg:block"
									     fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
										      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
									</svg>
									Bag
								</a>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Header;