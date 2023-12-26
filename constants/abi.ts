/** @format */

export const abi = {
	abi: [
		{
			inputs: [],
			name: "AccessControlBadConfirmation",
			type: "error",
		},
		{
			inputs: [
				{
					internalType: "address",
					name: "account",
					type: "address",
				},
				{
					internalType: "bytes32",
					name: "neededRole",
					type: "bytes32",
				},
			],
			name: "AccessControlUnauthorizedAccount",
			type: "error",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "address",
					name: "initiator",
					type: "address",
				},
				{
					indexed: false,
					internalType: "bytes32",
					name: "role",
					type: "bytes32",
				},
				{
					indexed: false,
					internalType: "string",
					name: "message",
					type: "string",
				},
				{
					indexed: true,
					internalType: "address",
					name: "beneficiary",
					type: "address",
				},
				{
					indexed: false,
					internalType: "uint256",
					name: "amount",
					type: "uint256",
				},
			],
			name: "Action",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "bytes32",
					name: "role",
					type: "bytes32",
				},
				{
					indexed: true,
					internalType: "bytes32",
					name: "previousAdminRole",
					type: "bytes32",
				},
				{
					indexed: true,
					internalType: "bytes32",
					name: "newAdminRole",
					type: "bytes32",
				},
			],
			name: "RoleAdminChanged",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "bytes32",
					name: "role",
					type: "bytes32",
				},
				{
					indexed: true,
					internalType: "address",
					name: "account",
					type: "address",
				},
				{
					indexed: true,
					internalType: "address",
					name: "sender",
					type: "address",
				},
			],
			name: "RoleGranted",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "bytes32",
					name: "role",
					type: "bytes32",
				},
				{
					indexed: true,
					internalType: "address",
					name: "account",
					type: "address",
				},
				{
					indexed: true,
					internalType: "address",
					name: "sender",
					type: "address",
				},
			],
			name: "RoleRevoked",
			type: "event",
		},
		{
			inputs: [],
			name: "DEFAULT_ADMIN_ROLE",
			outputs: [
				{
					internalType: "bytes32",
					name: "",
					type: "bytes32",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "contribute",
			outputs: [],
			stateMutability: "payable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "string",
					name: "title",
					type: "string",
				},
				{
					internalType: "string",
					name: "description",
					type: "string",
				},
				{
					internalType: "address",
					name: "beneficiary",
					type: "address",
				},
				{
					internalType: "uint256",
					name: "amount",
					type: "uint256",
				},
			],
			name: "createProposal",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [],
			name: "daoBalance",
			outputs: [
				{
					internalType: "uint256",
					name: "",
					type: "uint256",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "getBalance",
			outputs: [
				{
					internalType: "uint256",
					name: "",
					type: "uint256",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "getContributorBalance",
			outputs: [
				{
					internalType: "uint256",
					name: "",
					type: "uint256",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint256",
					name: "proposalId",
					type: "uint256",
				},
			],
			name: "getProposal",
			outputs: [
				{
					components: [
						{
							internalType: "uint256",
							name: "id",
							type: "uint256",
						},
						{
							internalType: "uint256",
							name: "amount",
							type: "uint256",
						},
						{
							internalType: "uint256",
							name: "duration",
							type: "uint256",
						},
						{
							internalType: "uint256",
							name: "upvotes",
							type: "uint256",
						},
						{
							internalType: "uint256",
							name: "downvotes",
							type: "uint256",
						},
						{
							internalType: "string",
							name: "title",
							type: "string",
						},
						{
							internalType: "string",
							name: "description",
							type: "string",
						},
						{
							internalType: "bool",
							name: "passed",
							type: "bool",
						},
						{
							internalType: "bool",
							name: "paid",
							type: "bool",
						},
						{
							internalType: "address payable",
							name: "beneficiary",
							type: "address",
						},
						{
							internalType: "address",
							name: "proposer",
							type: "address",
						},
						{
							internalType: "address",
							name: "executor",
							type: "address",
						},
					],
					internalType: "struct ETMW.ProposalStruct",
					name: "",
					type: "tuple",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "getProposals",
			outputs: [
				{
					components: [
						{
							internalType: "uint256",
							name: "id",
							type: "uint256",
						},
						{
							internalType: "uint256",
							name: "amount",
							type: "uint256",
						},
						{
							internalType: "uint256",
							name: "duration",
							type: "uint256",
						},
						{
							internalType: "uint256",
							name: "upvotes",
							type: "uint256",
						},
						{
							internalType: "uint256",
							name: "downvotes",
							type: "uint256",
						},
						{
							internalType: "string",
							name: "title",
							type: "string",
						},
						{
							internalType: "string",
							name: "description",
							type: "string",
						},
						{
							internalType: "bool",
							name: "passed",
							type: "bool",
						},
						{
							internalType: "bool",
							name: "paid",
							type: "bool",
						},
						{
							internalType: "address payable",
							name: "beneficiary",
							type: "address",
						},
						{
							internalType: "address",
							name: "proposer",
							type: "address",
						},
						{
							internalType: "address",
							name: "executor",
							type: "address",
						},
					],
					internalType: "struct ETMW.ProposalStruct[]",
					name: "props",
					type: "tuple[]",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "bytes32",
					name: "role",
					type: "bytes32",
				},
			],
			name: "getRoleAdmin",
			outputs: [
				{
					internalType: "bytes32",
					name: "",
					type: "bytes32",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "getStakeholderBalance",
			outputs: [
				{
					internalType: "uint256",
					name: "",
					type: "uint256",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "getStakeholderVotes",
			outputs: [
				{
					internalType: "uint256[]",
					name: "",
					type: "uint256[]",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint256",
					name: "proposalId",
					type: "uint256",
				},
			],
			name: "getVotesOf",
			outputs: [
				{
					components: [
						{
							internalType: "address",
							name: "voter",
							type: "address",
						},
						{
							internalType: "uint256",
							name: "timestamp",
							type: "uint256",
						},
						{
							internalType: "bool",
							name: "choosen",
							type: "bool",
						},
					],
					internalType: "struct ETMW.VotedStruct[]",
					name: "",
					type: "tuple[]",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "bytes32",
					name: "role",
					type: "bytes32",
				},
				{
					internalType: "address",
					name: "account",
					type: "address",
				},
			],
			name: "grantRole",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "bytes32",
					name: "role",
					type: "bytes32",
				},
				{
					internalType: "address",
					name: "account",
					type: "address",
				},
			],
			name: "hasRole",
			outputs: [
				{
					internalType: "bool",
					name: "",
					type: "bool",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "isContributor",
			outputs: [
				{
					internalType: "bool",
					name: "",
					type: "bool",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "isStakeholder",
			outputs: [
				{
					internalType: "bool",
					name: "",
					type: "bool",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint256",
					name: "proposalId",
					type: "uint256",
				},
			],
			name: "payBeneficiary",
			outputs: [
				{
					internalType: "uint256",
					name: "",
					type: "uint256",
				},
			],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint256",
					name: "proposalId",
					type: "uint256",
				},
				{
					internalType: "bool",
					name: "choosen",
					type: "bool",
				},
			],
			name: "performVote",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "bytes32",
					name: "role",
					type: "bytes32",
				},
				{
					internalType: "address",
					name: "callerConfirmation",
					type: "address",
				},
			],
			name: "renounceRole",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "bytes32",
					name: "role",
					type: "bytes32",
				},
				{
					internalType: "address",
					name: "account",
					type: "address",
				},
			],
			name: "revokeRole",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "bytes4",
					name: "interfaceId",
					type: "bytes4",
				},
			],
			name: "supportsInterface",
			outputs: [
				{
					internalType: "bool",
					name: "",
					type: "bool",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "totalProposals",
			outputs: [
				{
					internalType: "uint256",
					name: "",
					type: "uint256",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			stateMutability: "payable",
			type: "receive",
		},
	],
};
