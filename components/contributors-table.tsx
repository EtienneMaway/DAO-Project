/** @format */

import { GiAchievement } from "react-icons/gi";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
} from "@nextui-org/react";
import { columns } from "./columns";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

function ContributersTable() {
	return (
		<div className='dark:bg-[#262936]'>
			<Table removeWrapper aria-label='My table' className='mt-8 '>
				<TableHeader columns={columns}>
					{(column) => (
						<TableColumn
							className='border-b border-r  border-l boder-solid dark:border-gray-700 bg-white dark:bg-[#262936]'
							key={column.key}>
							{column.label}
						</TableColumn>
					)}
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className='text-sm font-light py-4 whitespace-nowrap'>
							<div className='flex items-center space-x-2'>
								<GiAchievement
									string='Hello'
									size={25}
									className=' rounded-full w-[30px] h-[30px]'
								/>
								<span>0x21...eh12</span>
							</div>
						</TableCell>
						<TableCell className='text-sm font-light py-4 whitespace-nowrap '>
							Should donate to save the ...
						</TableCell>
						<TableCell className='text-sm font-light  py-4 '>
							{new Date().getTime()}
						</TableCell>
						<TableCell className='text-sm font-light py-4 whitespace-nowrap '>
							<Link
								href='/proposals/test'
								className='inline-block bg-blue-500 px-6 text-white py-2.5
			rounded-full font-medium text-sm leading-tight uppercase shadow-md
			border border-blue-500 shadow-gray-400 hover:bg-blue-500 hover:text-white
			dark:shadow-none dark:text-white'>
								view
							</Link>
							{/* <Button
								className='inline-block bg-green-500 px-6 text-white py-2.5
			rounded-full font-medium text-sm leading-tight uppercase shadow-md
			border border-green-500 shadow-gray-400 hover:bg-green-600 hover:text-white
			dark:shadow-none dark:text-white'>
								paid
							</Button>
							<Button
								className='inline-block bg-red-500 px-6 text-white py-2.5
			rounded-full font-medium text-sm leading-tight uppercase shadow-md
			border border-red-500 shadow-gray-400 hover:bg-red-600 hover:text-white
			dark:shadow-none dark:text-white'>
								payout
							</Button> */}
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
}

export default ContributersTable;
