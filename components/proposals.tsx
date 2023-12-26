/** @format */
"use client";

import { Button } from "@nextui-org/button";
import React from "react";
import ContributersTable from "./contributors-table";

function Proposals() {
	const active = `inline-block bg-blue-500 px-6 text-white py-2.5
			rounded-l-full font-medium text-sm leading-tight uppercase shadow-md
			border border-blue-500 shadow-gray-400 hover:bg-blue-500 hover:text-white
			dark:shadow-none dark:text-white`;

	const deactive = `inline-block px-6 py-2.5 dark:bg-transparent
			font-medium text-sm leading-tight uppercase shadow-md
			border  shadow-gray-400 hover:bg-blue-500 hover:border-blue-500 hover:text-white
			dark:shadow-none dark:text-blue-400 dark:hover:text-white`;

	return (
		<section className=' w-full flex flex-col p-8 rounded-r-full'>
			<div className='flex items-center justify-center' role='group'>
				<Button className={`${active}`}>All</Button>
				<Button className={`rounded-none ${deactive}`}>OPEN</Button>
				<Button className={`rounded-r-full ${deactive}`}>close</Button>
			</div>

			<ContributersTable />
		</section>
	);
}

export default Proposals;
