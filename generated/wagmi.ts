import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// L2GraphTokenImplementation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const l2GraphTokenImplementationAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BridgeBurned',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BridgeMinted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'gateway',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'GatewaySet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'l1Address',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'L1AddressSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'MinterAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'MinterRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'NewOwnership',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'NewPendingOwnership',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_proxy', internalType: 'contract IGraphProxy', type: 'address' }],
    name: 'acceptProxy',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_proxy', internalType: 'contract IGraphProxy', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'acceptProxyAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'addMinter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_account', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'bridgeBurn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_account', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'bridgeMint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'gateway',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'governor',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'isMinter',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'l1Address',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pendingGovernor',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_spender', internalType: 'address', type: 'address' },
      { name: '_value', internalType: 'uint256', type: 'uint256' },
      { name: '_deadline', internalType: 'uint256', type: 'uint256' },
      { name: '_v', internalType: 'uint8', type: 'uint8' },
      { name: '_r', internalType: 'bytes32', type: 'bytes32' },
      { name: '_s', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'removeMinter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceMinter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_gw', internalType: 'address', type: 'address' }],
    name: 'setGateway',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_addr', internalType: 'address', type: 'address' }],
    name: 'setL1Address',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_newGovernor', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const l2GraphTokenImplementationAddress = {
  42161: '0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df',
  421614: '0x4cf968bA38b43dd10be114daa7959C1b369479e5',
} as const

/**
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const l2GraphTokenImplementationConfig = {
  address: l2GraphTokenImplementationAddress,
  abi: l2GraphTokenImplementationAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// L2GraphTokenProxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const l2GraphTokenProxyAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_impl', internalType: 'address', type: 'address' },
      { name: '_admin', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AdminUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldImplementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newImplementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ImplementationUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldPendingImplementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newPendingImplementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PendingImplementationUpdated',
  },
  { type: 'fallback', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [],
    name: 'acceptUpgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'acceptUpgradeAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'implementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pendingImplementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_newAdmin', internalType: 'address', type: 'address' }],
    name: 'setAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_newImplementation', internalType: 'address', type: 'address' }],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const l2GraphTokenProxyAddress = {
  42161: '0x9623063377AD1B27544C965cCd7342f7EA7e88C7',
  421614: '0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04',
} as const

/**
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const l2GraphTokenProxyConfig = {
  address: l2GraphTokenProxyAddress,
  abi: l2GraphTokenProxyAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// L2StakingExtension
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const l2StakingExtensionAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'nameHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'contractAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ContractSynced',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'param', internalType: 'string', type: 'string', indexed: false }],
    name: 'ParameterUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'controller',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetController',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'caller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'slasher',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'allowed', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'SlasherUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'indexer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokens',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'shares',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'StakeDelegated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'indexer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokens',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'shares',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'until',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'StakeDelegatedLocked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'indexer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokens',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'StakeDelegatedWithdrawn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'indexer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokens',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'reward',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'beneficiary',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'StakeSlashed',
  },
  {
    type: 'function',
    inputs: [{ name: '_proxy', internalType: 'contract IGraphProxy', type: 'address' }],
    name: 'acceptProxy',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_proxy', internalType: 'contract IGraphProxy', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'acceptProxyAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_allocationID', internalType: 'address', type: 'address' }],
    name: 'allocations',
    outputs: [
      {
        name: '',
        internalType: 'struct IStakingData.Allocation',
        type: 'tuple',
        components: [
          { name: 'indexer', internalType: 'address', type: 'address' },
          {
            name: 'subgraphDeploymentID',
            internalType: 'bytes32',
            type: 'bytes32',
          },
          { name: 'tokens', internalType: 'uint256', type: 'uint256' },
          { name: 'createdAtEpoch', internalType: 'uint256', type: 'uint256' },
          { name: 'closedAtEpoch', internalType: 'uint256', type: 'uint256' },
          { name: 'collectedFees', internalType: 'uint256', type: 'uint256' },
          {
            name: '__DEPRECATED_effectiveAllocation',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'accRewardsPerAllocatedToken',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'distributedRebates',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'alphaDenominator',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'alphaNumerator',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'controller',
    outputs: [{ name: '', internalType: 'contract IController', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'curationPercentage',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_indexer', internalType: 'address', type: 'address' },
      { name: '_tokens', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'delegate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_indexer', internalType: 'address', type: 'address' }],
    name: 'delegationPools',
    outputs: [
      {
        name: '',
        internalType: 'struct IStakingExtension.DelegationPoolReturn',
        type: 'tuple',
        components: [
          {
            name: '__DEPRECATED_cooldownBlocks',
            internalType: 'uint32',
            type: 'uint32',
          },
          { name: 'indexingRewardCut', internalType: 'uint32', type: 'uint32' },
          { name: 'queryFeeCut', internalType: 'uint32', type: 'uint32' },
          { name: 'updatedAtBlock', internalType: 'uint256', type: 'uint256' },
          { name: 'tokens', internalType: 'uint256', type: 'uint256' },
          { name: 'shares', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'delegationRatio',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'delegationTaxPercentage',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'delegationUnbondingPeriod',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_indexer', internalType: 'address', type: 'address' },
      { name: '_delegator', internalType: 'address', type: 'address' },
    ],
    name: 'getDelegation',
    outputs: [
      {
        name: '',
        internalType: 'struct IStakingData.Delegation',
        type: 'tuple',
        components: [
          { name: 'shares', internalType: 'uint256', type: 'uint256' },
          { name: 'tokensLocked', internalType: 'uint256', type: 'uint256' },
          {
            name: 'tokensLockedUntil',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_delegation',
        internalType: 'struct IStakingData.Delegation',
        type: 'tuple',
        components: [
          { name: 'shares', internalType: 'uint256', type: 'uint256' },
          { name: 'tokensLocked', internalType: 'uint256', type: 'uint256' },
          {
            name: 'tokensLockedUntil',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    name: 'getWithdraweableDelegatedTokens',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_delegationUnbondingPeriod',
        internalType: 'uint32',
        type: 'uint32',
      },
      { name: '', internalType: 'uint32', type: 'uint32' },
      { name: '_delegationRatio', internalType: 'uint32', type: 'uint32' },
      {
        name: '_delegationTaxPercentage',
        internalType: 'uint32',
        type: 'uint32',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_indexer', internalType: 'address', type: 'address' },
      { name: '_delegator', internalType: 'address', type: 'address' },
    ],
    name: 'isDelegator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lambdaDenominator',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lambdaNumerator',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'maxAllocationEpochs',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'minimumIndexerStake',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_indexer', internalType: 'address', type: 'address' },
      { name: '_maybeOperator', internalType: 'address', type: 'address' },
    ],
    name: 'operatorAuth',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'protocolPercentage',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_indexer', internalType: 'address', type: 'address' }],
    name: 'rewardsDestination',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_controller', internalType: 'address', type: 'address' }],
    name: 'setController',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_delegationRatio', internalType: 'uint32', type: 'uint32' }],
    name: 'setDelegationRatio',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_percentage', internalType: 'uint32', type: 'uint32' }],
    name: 'setDelegationTaxPercentage',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_delegationUnbondingPeriod',
        internalType: 'uint32',
        type: 'uint32',
      },
    ],
    name: 'setDelegationUnbondingPeriod',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_slasher', internalType: 'address', type: 'address' },
      { name: '_allowed', internalType: 'bool', type: 'bool' },
    ],
    name: 'setSlasher',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_indexer', internalType: 'address', type: 'address' },
      { name: '_tokens', internalType: 'uint256', type: 'uint256' },
      { name: '_reward', internalType: 'uint256', type: 'uint256' },
      { name: '_beneficiary', internalType: 'address', type: 'address' },
    ],
    name: 'slash',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_maybeSlasher', internalType: 'address', type: 'address' }],
    name: 'slashers',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_indexer', internalType: 'address', type: 'address' }],
    name: 'stakes',
    outputs: [
      {
        name: '',
        internalType: 'struct Stakes.Indexer',
        type: 'tuple',
        components: [
          { name: 'tokensStaked', internalType: 'uint256', type: 'uint256' },
          { name: 'tokensAllocated', internalType: 'uint256', type: 'uint256' },
          { name: 'tokensLocked', internalType: 'uint256', type: 'uint256' },
          {
            name: 'tokensLockedUntil',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_subgraphDeploymentId',
        internalType: 'bytes32',
        type: 'bytes32',
      },
    ],
    name: 'subgraphAllocations',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'syncAllContracts',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'thawingPeriod',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_indexer', internalType: 'address', type: 'address' },
      { name: '_shares', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'undelegate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_indexer', internalType: 'address', type: 'address' },
      { name: '_newIndexer', internalType: 'address', type: 'address' },
    ],
    name: 'withdrawDelegated',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const l2StakingExtensionAddress = {
  42161: '0x3bE385576d7C282070Ad91BF94366de9f9ba3571',
  421614: '0x05709dd705A5674346B7206a2bC657C8bAb3301B',
} as const

/**
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const l2StakingExtensionConfig = {
  address: l2StakingExtensionAddress,
  abi: l2StakingExtensionAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// L2StakingProxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const l2StakingProxyAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_impl', internalType: 'address', type: 'address' },
      { name: '_admin', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AdminUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldImplementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newImplementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ImplementationUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldPendingImplementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newPendingImplementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PendingImplementationUpdated',
  },
  { type: 'fallback', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [],
    name: 'acceptUpgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'acceptUpgradeAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'implementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pendingImplementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_newAdmin', internalType: 'address', type: 'address' }],
    name: 'setAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_newImplementation', internalType: 'address', type: 'address' }],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const l2StakingProxyAddress = {
  42161: '0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03',
  421614: '0x865365C425f3A593Ffe698D9c4E6707D14d51e08',
} as const

/**
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const l2StakingProxyConfig = {
  address: l2StakingProxyAddress,
  abi: l2StakingProxyAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useReadL2GraphTokenImplementation = /*#__PURE__*/ createUseReadContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useReadL2GraphTokenImplementationAllowance = /*#__PURE__*/ createUseReadContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useReadL2GraphTokenImplementationBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useReadL2GraphTokenImplementationDecimals = /*#__PURE__*/ createUseReadContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"gateway"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useReadL2GraphTokenImplementationGateway = /*#__PURE__*/ createUseReadContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'gateway',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"governor"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useReadL2GraphTokenImplementationGovernor = /*#__PURE__*/ createUseReadContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'governor',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"isMinter"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useReadL2GraphTokenImplementationIsMinter = /*#__PURE__*/ createUseReadContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'isMinter',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"l1Address"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useReadL2GraphTokenImplementationL1Address = /*#__PURE__*/ createUseReadContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'l1Address',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useReadL2GraphTokenImplementationName = /*#__PURE__*/ createUseReadContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"nonces"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useReadL2GraphTokenImplementationNonces = /*#__PURE__*/ createUseReadContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"pendingGovernor"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useReadL2GraphTokenImplementationPendingGovernor = /*#__PURE__*/ createUseReadContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'pendingGovernor',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useReadL2GraphTokenImplementationSymbol = /*#__PURE__*/ createUseReadContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useReadL2GraphTokenImplementationTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementation = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationAcceptOwnership = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'acceptOwnership',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"acceptProxy"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationAcceptProxy = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'acceptProxy',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"acceptProxyAndCall"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationAcceptProxyAndCall = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'acceptProxyAndCall',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"addMinter"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationAddMinter = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'addMinter',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationApprove = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"bridgeBurn"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationBridgeBurn = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'bridgeBurn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"bridgeMint"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationBridgeMint = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'bridgeMint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationBurn = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"burnFrom"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationBurnFrom = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'burnFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationDecreaseAllowance = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'decreaseAllowance',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationIncreaseAllowance = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'increaseAllowance',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationMint = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationPermit = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"removeMinter"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationRemoveMinter = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'removeMinter',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"renounceMinter"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationRenounceMinter = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'renounceMinter',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"setGateway"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationSetGateway = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'setGateway',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"setL1Address"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationSetL1Address = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'setL1Address',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWriteL2GraphTokenImplementationTransferOwnership = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementation = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationAcceptOwnership = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'acceptOwnership',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"acceptProxy"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationAcceptProxy = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'acceptProxy',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"acceptProxyAndCall"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationAcceptProxyAndCall = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'acceptProxyAndCall',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"addMinter"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationAddMinter = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'addMinter',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"bridgeBurn"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationBridgeBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'bridgeBurn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"bridgeMint"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationBridgeMint = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'bridgeMint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"burnFrom"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationBurnFrom = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'burnFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationDecreaseAllowance = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'decreaseAllowance',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationIncreaseAllowance = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'increaseAllowance',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationInitialize = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationMint = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationPermit = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'permit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"removeMinter"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationRemoveMinter = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'removeMinter',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"renounceMinter"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationRenounceMinter = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'renounceMinter',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"setGateway"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationSetGateway = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'setGateway',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"setL1Address"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationSetL1Address = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'setL1Address',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationTransfer = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationTransferFrom = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useSimulateL2GraphTokenImplementationTransferOwnership = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWatchL2GraphTokenImplementationEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWatchL2GraphTokenImplementationApprovalEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  eventName: 'Approval',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `eventName` set to `"BridgeBurned"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWatchL2GraphTokenImplementationBridgeBurnedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  eventName: 'BridgeBurned',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `eventName` set to `"BridgeMinted"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWatchL2GraphTokenImplementationBridgeMintedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  eventName: 'BridgeMinted',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `eventName` set to `"GatewaySet"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWatchL2GraphTokenImplementationGatewaySetEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  eventName: 'GatewaySet',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `eventName` set to `"L1AddressSet"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWatchL2GraphTokenImplementationL1AddressSetEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  eventName: 'L1AddressSet',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `eventName` set to `"MinterAdded"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWatchL2GraphTokenImplementationMinterAddedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  eventName: 'MinterAdded',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `eventName` set to `"MinterRemoved"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWatchL2GraphTokenImplementationMinterRemovedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  eventName: 'MinterRemoved',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `eventName` set to `"NewOwnership"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWatchL2GraphTokenImplementationNewOwnershipEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  eventName: 'NewOwnership',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `eventName` set to `"NewPendingOwnership"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWatchL2GraphTokenImplementationNewPendingOwnershipEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  eventName: 'NewPendingOwnership',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2GraphTokenImplementationAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0xaFFCb96181D920FE8C0Af046C49B2c9eC98b28df)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x4cf968bA38b43dd10be114daa7959C1b369479e5)
 */
export const useWatchL2GraphTokenImplementationTransferEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2GraphTokenImplementationAbi,
  address: l2GraphTokenImplementationAddress,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenProxyAbi}__
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const useWriteL2GraphTokenProxy = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenProxyAbi,
  address: l2GraphTokenProxyAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenProxyAbi}__ and `functionName` set to `"acceptUpgrade"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const useWriteL2GraphTokenProxyAcceptUpgrade = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenProxyAbi,
  address: l2GraphTokenProxyAddress,
  functionName: 'acceptUpgrade',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenProxyAbi}__ and `functionName` set to `"acceptUpgradeAndCall"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const useWriteL2GraphTokenProxyAcceptUpgradeAndCall = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenProxyAbi,
  address: l2GraphTokenProxyAddress,
  functionName: 'acceptUpgradeAndCall',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenProxyAbi}__ and `functionName` set to `"admin"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const useWriteL2GraphTokenProxyAdmin = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenProxyAbi,
  address: l2GraphTokenProxyAddress,
  functionName: 'admin',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenProxyAbi}__ and `functionName` set to `"implementation"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const useWriteL2GraphTokenProxyImplementation = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenProxyAbi,
  address: l2GraphTokenProxyAddress,
  functionName: 'implementation',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenProxyAbi}__ and `functionName` set to `"pendingImplementation"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const useWriteL2GraphTokenProxyPendingImplementation = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenProxyAbi,
  address: l2GraphTokenProxyAddress,
  functionName: 'pendingImplementation',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenProxyAbi}__ and `functionName` set to `"setAdmin"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const useWriteL2GraphTokenProxySetAdmin = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenProxyAbi,
  address: l2GraphTokenProxyAddress,
  functionName: 'setAdmin',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2GraphTokenProxyAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const useWriteL2GraphTokenProxyUpgradeTo = /*#__PURE__*/ createUseWriteContract({
  abi: l2GraphTokenProxyAbi,
  address: l2GraphTokenProxyAddress,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenProxyAbi}__
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const useSimulateL2GraphTokenProxy = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenProxyAbi,
  address: l2GraphTokenProxyAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenProxyAbi}__ and `functionName` set to `"acceptUpgrade"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const useSimulateL2GraphTokenProxyAcceptUpgrade = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenProxyAbi,
  address: l2GraphTokenProxyAddress,
  functionName: 'acceptUpgrade',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenProxyAbi}__ and `functionName` set to `"acceptUpgradeAndCall"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const useSimulateL2GraphTokenProxyAcceptUpgradeAndCall = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenProxyAbi,
  address: l2GraphTokenProxyAddress,
  functionName: 'acceptUpgradeAndCall',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenProxyAbi}__ and `functionName` set to `"admin"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const useSimulateL2GraphTokenProxyAdmin = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenProxyAbi,
  address: l2GraphTokenProxyAddress,
  functionName: 'admin',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenProxyAbi}__ and `functionName` set to `"implementation"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const useSimulateL2GraphTokenProxyImplementation = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenProxyAbi,
  address: l2GraphTokenProxyAddress,
  functionName: 'implementation',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenProxyAbi}__ and `functionName` set to `"pendingImplementation"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const useSimulateL2GraphTokenProxyPendingImplementation = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenProxyAbi,
  address: l2GraphTokenProxyAddress,
  functionName: 'pendingImplementation',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenProxyAbi}__ and `functionName` set to `"setAdmin"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const useSimulateL2GraphTokenProxySetAdmin = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenProxyAbi,
  address: l2GraphTokenProxyAddress,
  functionName: 'setAdmin',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2GraphTokenProxyAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const useSimulateL2GraphTokenProxyUpgradeTo = /*#__PURE__*/ createUseSimulateContract({
  abi: l2GraphTokenProxyAbi,
  address: l2GraphTokenProxyAddress,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2GraphTokenProxyAbi}__
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const useWatchL2GraphTokenProxyEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2GraphTokenProxyAbi,
  address: l2GraphTokenProxyAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2GraphTokenProxyAbi}__ and `eventName` set to `"AdminUpdated"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const useWatchL2GraphTokenProxyAdminUpdatedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2GraphTokenProxyAbi,
  address: l2GraphTokenProxyAddress,
  eventName: 'AdminUpdated',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2GraphTokenProxyAbi}__ and `eventName` set to `"ImplementationUpdated"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const useWatchL2GraphTokenProxyImplementationUpdatedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2GraphTokenProxyAbi,
  address: l2GraphTokenProxyAddress,
  eventName: 'ImplementationUpdated',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2GraphTokenProxyAbi}__ and `eventName` set to `"PendingImplementationUpdated"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9623063377AD1B27544C965cCd7342f7EA7e88C7)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0xf8c05dCF59E8B28BFD5eed176C562bEbcfc7Ac04)
 */
export const useWatchL2GraphTokenProxyPendingImplementationUpdatedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2GraphTokenProxyAbi,
  address: l2GraphTokenProxyAddress,
  eventName: 'PendingImplementationUpdated',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtension = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"allocations"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionAllocations = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'allocations',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"alphaDenominator"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionAlphaDenominator = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'alphaDenominator',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"alphaNumerator"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionAlphaNumerator = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'alphaNumerator',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"controller"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionController = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'controller',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"curationPercentage"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionCurationPercentage = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'curationPercentage',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"delegationPools"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionDelegationPools = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'delegationPools',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"delegationRatio"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionDelegationRatio = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'delegationRatio',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"delegationTaxPercentage"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionDelegationTaxPercentage = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'delegationTaxPercentage',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"delegationUnbondingPeriod"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionDelegationUnbondingPeriod = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'delegationUnbondingPeriod',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"getDelegation"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionGetDelegation = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'getDelegation',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"getWithdraweableDelegatedTokens"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionGetWithdraweableDelegatedTokens = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'getWithdraweableDelegatedTokens',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"isDelegator"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionIsDelegator = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'isDelegator',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"lambdaDenominator"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionLambdaDenominator = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'lambdaDenominator',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"lambdaNumerator"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionLambdaNumerator = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'lambdaNumerator',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"maxAllocationEpochs"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionMaxAllocationEpochs = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'maxAllocationEpochs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"minimumIndexerStake"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionMinimumIndexerStake = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'minimumIndexerStake',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"operatorAuth"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionOperatorAuth = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'operatorAuth',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"protocolPercentage"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionProtocolPercentage = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'protocolPercentage',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"rewardsDestination"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionRewardsDestination = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'rewardsDestination',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"slashers"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionSlashers = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'slashers',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"stakes"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionStakes = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'stakes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"subgraphAllocations"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionSubgraphAllocations = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'subgraphAllocations',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"thawingPeriod"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useReadL2StakingExtensionThawingPeriod = /*#__PURE__*/ createUseReadContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'thawingPeriod',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWriteL2StakingExtension = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"acceptProxy"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWriteL2StakingExtensionAcceptProxy = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'acceptProxy',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"acceptProxyAndCall"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWriteL2StakingExtensionAcceptProxyAndCall = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'acceptProxyAndCall',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWriteL2StakingExtensionDelegate = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'delegate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWriteL2StakingExtensionInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"setController"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWriteL2StakingExtensionSetController = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'setController',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"setDelegationRatio"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWriteL2StakingExtensionSetDelegationRatio = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'setDelegationRatio',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"setDelegationTaxPercentage"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWriteL2StakingExtensionSetDelegationTaxPercentage = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'setDelegationTaxPercentage',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"setDelegationUnbondingPeriod"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWriteL2StakingExtensionSetDelegationUnbondingPeriod = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'setDelegationUnbondingPeriod',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"setSlasher"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWriteL2StakingExtensionSetSlasher = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'setSlasher',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"slash"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWriteL2StakingExtensionSlash = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'slash',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"syncAllContracts"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWriteL2StakingExtensionSyncAllContracts = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'syncAllContracts',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"undelegate"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWriteL2StakingExtensionUndelegate = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'undelegate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"withdrawDelegated"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWriteL2StakingExtensionWithdrawDelegated = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'withdrawDelegated',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useSimulateL2StakingExtension = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"acceptProxy"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useSimulateL2StakingExtensionAcceptProxy = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'acceptProxy',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"acceptProxyAndCall"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useSimulateL2StakingExtensionAcceptProxyAndCall = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'acceptProxyAndCall',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useSimulateL2StakingExtensionDelegate = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'delegate',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useSimulateL2StakingExtensionInitialize = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"setController"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useSimulateL2StakingExtensionSetController = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'setController',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"setDelegationRatio"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useSimulateL2StakingExtensionSetDelegationRatio = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'setDelegationRatio',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"setDelegationTaxPercentage"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useSimulateL2StakingExtensionSetDelegationTaxPercentage = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'setDelegationTaxPercentage',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"setDelegationUnbondingPeriod"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useSimulateL2StakingExtensionSetDelegationUnbondingPeriod = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'setDelegationUnbondingPeriod',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"setSlasher"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useSimulateL2StakingExtensionSetSlasher = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'setSlasher',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"slash"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useSimulateL2StakingExtensionSlash = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'slash',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"syncAllContracts"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useSimulateL2StakingExtensionSyncAllContracts = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'syncAllContracts',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"undelegate"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useSimulateL2StakingExtensionUndelegate = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'undelegate',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `functionName` set to `"withdrawDelegated"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useSimulateL2StakingExtensionWithdrawDelegated = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  functionName: 'withdrawDelegated',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2StakingExtensionAbi}__
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWatchL2StakingExtensionEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `eventName` set to `"ContractSynced"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWatchL2StakingExtensionContractSyncedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  eventName: 'ContractSynced',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `eventName` set to `"ParameterUpdated"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWatchL2StakingExtensionParameterUpdatedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  eventName: 'ParameterUpdated',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `eventName` set to `"SetController"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWatchL2StakingExtensionSetControllerEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  eventName: 'SetController',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `eventName` set to `"SlasherUpdate"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWatchL2StakingExtensionSlasherUpdateEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  eventName: 'SlasherUpdate',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `eventName` set to `"StakeDelegated"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWatchL2StakingExtensionStakeDelegatedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  eventName: 'StakeDelegated',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `eventName` set to `"StakeDelegatedLocked"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWatchL2StakingExtensionStakeDelegatedLockedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  eventName: 'StakeDelegatedLocked',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `eventName` set to `"StakeDelegatedWithdrawn"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWatchL2StakingExtensionStakeDelegatedWithdrawnEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  eventName: 'StakeDelegatedWithdrawn',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2StakingExtensionAbi}__ and `eventName` set to `"StakeSlashed"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x3bE385576d7C282070Ad91BF94366de9f9ba3571)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x05709dd705A5674346B7206a2bC657C8bAb3301B)
 */
export const useWatchL2StakingExtensionStakeSlashedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2StakingExtensionAbi,
  address: l2StakingExtensionAddress,
  eventName: 'StakeSlashed',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingProxyAbi}__
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const useWriteL2StakingProxy = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingProxyAbi,
  address: l2StakingProxyAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingProxyAbi}__ and `functionName` set to `"acceptUpgrade"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const useWriteL2StakingProxyAcceptUpgrade = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingProxyAbi,
  address: l2StakingProxyAddress,
  functionName: 'acceptUpgrade',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingProxyAbi}__ and `functionName` set to `"acceptUpgradeAndCall"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const useWriteL2StakingProxyAcceptUpgradeAndCall = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingProxyAbi,
  address: l2StakingProxyAddress,
  functionName: 'acceptUpgradeAndCall',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingProxyAbi}__ and `functionName` set to `"admin"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const useWriteL2StakingProxyAdmin = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingProxyAbi,
  address: l2StakingProxyAddress,
  functionName: 'admin',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingProxyAbi}__ and `functionName` set to `"implementation"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const useWriteL2StakingProxyImplementation = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingProxyAbi,
  address: l2StakingProxyAddress,
  functionName: 'implementation',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingProxyAbi}__ and `functionName` set to `"pendingImplementation"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const useWriteL2StakingProxyPendingImplementation = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingProxyAbi,
  address: l2StakingProxyAddress,
  functionName: 'pendingImplementation',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingProxyAbi}__ and `functionName` set to `"setAdmin"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const useWriteL2StakingProxySetAdmin = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingProxyAbi,
  address: l2StakingProxyAddress,
  functionName: 'setAdmin',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2StakingProxyAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const useWriteL2StakingProxyUpgradeTo = /*#__PURE__*/ createUseWriteContract({
  abi: l2StakingProxyAbi,
  address: l2StakingProxyAddress,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingProxyAbi}__
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const useSimulateL2StakingProxy = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingProxyAbi,
  address: l2StakingProxyAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingProxyAbi}__ and `functionName` set to `"acceptUpgrade"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const useSimulateL2StakingProxyAcceptUpgrade = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingProxyAbi,
  address: l2StakingProxyAddress,
  functionName: 'acceptUpgrade',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingProxyAbi}__ and `functionName` set to `"acceptUpgradeAndCall"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const useSimulateL2StakingProxyAcceptUpgradeAndCall = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingProxyAbi,
  address: l2StakingProxyAddress,
  functionName: 'acceptUpgradeAndCall',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingProxyAbi}__ and `functionName` set to `"admin"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const useSimulateL2StakingProxyAdmin = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingProxyAbi,
  address: l2StakingProxyAddress,
  functionName: 'admin',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingProxyAbi}__ and `functionName` set to `"implementation"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const useSimulateL2StakingProxyImplementation = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingProxyAbi,
  address: l2StakingProxyAddress,
  functionName: 'implementation',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingProxyAbi}__ and `functionName` set to `"pendingImplementation"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const useSimulateL2StakingProxyPendingImplementation = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingProxyAbi,
  address: l2StakingProxyAddress,
  functionName: 'pendingImplementation',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingProxyAbi}__ and `functionName` set to `"setAdmin"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const useSimulateL2StakingProxySetAdmin = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingProxyAbi,
  address: l2StakingProxyAddress,
  functionName: 'setAdmin',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2StakingProxyAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const useSimulateL2StakingProxyUpgradeTo = /*#__PURE__*/ createUseSimulateContract({
  abi: l2StakingProxyAbi,
  address: l2StakingProxyAddress,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2StakingProxyAbi}__
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const useWatchL2StakingProxyEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2StakingProxyAbi,
  address: l2StakingProxyAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2StakingProxyAbi}__ and `eventName` set to `"AdminUpdated"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const useWatchL2StakingProxyAdminUpdatedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2StakingProxyAbi,
  address: l2StakingProxyAddress,
  eventName: 'AdminUpdated',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2StakingProxyAbi}__ and `eventName` set to `"ImplementationUpdated"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const useWatchL2StakingProxyImplementationUpdatedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2StakingProxyAbi,
  address: l2StakingProxyAddress,
  eventName: 'ImplementationUpdated',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2StakingProxyAbi}__ and `eventName` set to `"PendingImplementationUpdated"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x00669A4CF01450B64E8A2A20E9b1FCB71E61eF03)
 * - [__View Contract on Arbitrum Sepolia Arbiscan__](https://sepolia.arbiscan.io/address/0x865365C425f3A593Ffe698D9c4E6707D14d51e08)
 */
export const useWatchL2StakingProxyPendingImplementationUpdatedEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: l2StakingProxyAbi,
  address: l2StakingProxyAddress,
  eventName: 'PendingImplementationUpdated',
})
