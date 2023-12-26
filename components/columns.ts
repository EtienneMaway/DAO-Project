/** @format */

export type User = {
	CreatedAt: string;
	Title: string;
	ExpiredAt: string;
	Action: string;
};

export const columns = [
	{
		key: "createdBy",
		label: "CreatedBy",
	},
	{
		key: "title",
		label: "Title",
	},
	{
		key: "expires",
		label: "Expires",
	},
	{
		key: "action",
		label: "Action",
	},
];

export const column2 = [
	{
		key: "voter",
		label: "Voter",
	},
	{
		key: "voted",
		label: "Voted",
	},
	{
		key: "vote",
		label: "Vote",
	},
];

const voter = [
	{
		key: "1",
		voter: "hello",
		voted: "Date",
		ExpiredAt: "Aug 27 1996",
	},
];

export const rows = [
	{
		key: "1",
		CreatedAt: "hello",
		Title: "Hi",
		ExpiredAt: "Date",
		Action: "Done",
	},
	{
		key: "2",
		CreatedAt: "hello",
		Title: "Hi",
		ExpiredAt: "Date",
		Action: "Done",
	},
	{
		key: "3",
		CreatedAt: "hello",
		Title: "Hi",
		ExpiredAt: "Date",
		Action: "Done",
	},
];
