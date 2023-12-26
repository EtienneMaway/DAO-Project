/** @format */

import { Button } from "@nextui-org/button";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

export default function Home() {
	return (
		<section>
			<div className='p-8'>
				<h2 className='text-3xl font-semibold mb-5'>
					{5} Proposals currently opened
				</h2>

				<p>
					Current DAO Balance: <strong>{4} ETH</strong> <br />
					Your Contributions: <strong>{7} ETH</strong>
					{false ? ", and you are now a stakeholder" : null}
				</p>

				<hr className='my-6 border-gray-200 dark:border-gray-500' />

				<p>
					{false
						? "You can now raise proposals in this platform"
						: "Hey, when you contribute up to 1 ETH, you become a stakeholder"}
				</p>

				<div className='flex justify-start items-center md:w-1/3 w-full mt-4'>
					<input
						className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-500 bg-clip-padding border border-solid border-gray-700 dark:bg-transparent rounded shadow-md transition ease-in-out focus:text-gray-500 focus:outline-none dark:border-gray-500 dark:placeholder:text-gray-600'
						placeholder='E.g. 2.7 ETH'
						type='number'
					/>
				</div>

				<div className='flex justify-start items-center md:w-1/3 w-full mt-4 space-x-3'>
					<Button className='inline-block px-6 py-2.5 bg-blue-500 space-x-3 rounded-full text-white font-medium text-sm leading-tight uppercase shadow-md shadow-gray-400 dark:bg-transparent border border-blue-500  dark:text-blue-400 hover:bg-blue-500 dark:shadow-none   '>
						Contribute
					</Button>
					<Button className='inline-block px-6 py-2.5 rounded-full font-medium text-sm leading-tight uppercase shadow-md shadow-gray-400 border border-blue-500 hover:bg-blue-500 hover:text-white dark:shadow-none bg-white dark:bg-transparent dark:text-blue-400  '>
						Propose
					</Button>
				</div>
			</div>

			{/* value proposition */}

			<div
				aria-hidden='true'
				className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
				<div
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
					className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
				/>
			</div>
		</section>
	);
}
