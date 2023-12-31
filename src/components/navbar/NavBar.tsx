import React from "react";

const NavBar = () => {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className="relative py-3 mb-3">
				<div className="container px-4 flex">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<div className="flex flex-row">
							<img src="/assets/images/icons/material-symbols_fast-forward-rounded.png" alt="" width={'24px'} height={'24px'} />
							<a
								className="text-sm font-satoshi text-[24px] text-[500] leading-relaxed inline-block mr-4 py-2"
								href="#pablo"
							>
								FinanceFast
							</a>
						</div>
						<button
							className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<i className="fas fa-bars"></i>
						</button>
					</div>
					<div
						className={
							"lg:flex flex-grow items-center" +
							(navbarOpen ? " flex" : " hidden")
						}
						id="example-navbar-danger"
					>
						<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
							<li className="nav-item">
								<a
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
									href="#pablo"
								>
									<i className="fab fa-facebook-square text-lg leading-lg opacity-75"></i><span className="ml-2">Share</span>
								</a>
							</li>
							<li className="nav-item">
								<a
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
									href="#pablo"
								>
									<i className="fab fa-twitter text-lg leading-lg opacity-75"></i><span className="ml-2">Tweet</span>
								</a>
							</li>
							<li className="nav-item">
								<a
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
									href="#pablo"
								>
									<i className="fab fa-pinterest text-lg leading-lg opacity-75"></i><span className="ml-2">Pin</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default NavBar;