/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
  '\n  query BlockNumberData($first: Int, $skip: Int) {\n    _meta {\n      block {\n        number\n      }\n    }\n  }\n':
    types.BlockNumberDataDocument,
  '\n  query GraphNetworkData {\n    graphNetwork(id: "1") {\n      id\n      indexerCount\n      delegationRatio\n    }\n  }\n':
    types.GraphNetworkDataDocument,
  '\n  query IndexerDetailsData($indexerId: ID!) {\n    indexer(id: $indexerId) {\n      id\n      stakedTokens\n      lockedTokens\n      delegatedTokens\n    }\n    mostRecentIndexerDelegations: delegatedStakes(\n      first: 5\n      orderBy: lastDelegatedAt\n      orderDirection: desc\n      where: { indexer_: { id: $indexerId } }\n    ) {\n      id\n      delegator {\n        id\n      }\n      indexer {\n        id\n      }\n      stakedTokens\n      lastDelegatedAt\n    }\n  }\n':
    types.IndexerDetailsDataDocument,
  '\n  query IndexersData($first: Int, $skip: Int) {\n    indexers(first: $first, skip: $skip, orderBy: delegatedTokens, orderDirection: desc) {\n      id\n      delegatedTokens\n      delegatedStakeRatio\n      delegatorIndexingRewards\n      delegators(first: 1, orderBy: lastDelegatedAt, orderDirection: desc) {\n        id\n        delegator {\n          id\n        }\n        stakedTokens\n        lastDelegatedAt\n      }\n    }\n  }\n':
    types.IndexersDataDocument,
  '\n  query UserDelegationsData($userId: ID!) {\n    mostRecentUserDelegations: delegatedStakes(\n      first: 5\n      orderBy: lastDelegatedAt\n      orderDirection: desc\n      where: { delegator_: { id: $userId } }\n    ) {\n      id\n      delegator {\n        id\n        stakesCount\n      }\n      indexer {\n        id\n      }\n      stakedTokens\n      createdAt\n      lastDelegatedAt\n    }\n  }\n':
    types.UserDelegationsDataDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query BlockNumberData($first: Int, $skip: Int) {\n    _meta {\n      block {\n        number\n      }\n    }\n  }\n',
): (typeof documents)['\n  query BlockNumberData($first: Int, $skip: Int) {\n    _meta {\n      block {\n        number\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GraphNetworkData {\n    graphNetwork(id: "1") {\n      id\n      indexerCount\n      delegationRatio\n    }\n  }\n',
): (typeof documents)['\n  query GraphNetworkData {\n    graphNetwork(id: "1") {\n      id\n      indexerCount\n      delegationRatio\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query IndexerDetailsData($indexerId: ID!) {\n    indexer(id: $indexerId) {\n      id\n      stakedTokens\n      lockedTokens\n      delegatedTokens\n    }\n    mostRecentIndexerDelegations: delegatedStakes(\n      first: 5\n      orderBy: lastDelegatedAt\n      orderDirection: desc\n      where: { indexer_: { id: $indexerId } }\n    ) {\n      id\n      delegator {\n        id\n      }\n      indexer {\n        id\n      }\n      stakedTokens\n      lastDelegatedAt\n    }\n  }\n',
): (typeof documents)['\n  query IndexerDetailsData($indexerId: ID!) {\n    indexer(id: $indexerId) {\n      id\n      stakedTokens\n      lockedTokens\n      delegatedTokens\n    }\n    mostRecentIndexerDelegations: delegatedStakes(\n      first: 5\n      orderBy: lastDelegatedAt\n      orderDirection: desc\n      where: { indexer_: { id: $indexerId } }\n    ) {\n      id\n      delegator {\n        id\n      }\n      indexer {\n        id\n      }\n      stakedTokens\n      lastDelegatedAt\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query IndexersData($first: Int, $skip: Int) {\n    indexers(first: $first, skip: $skip, orderBy: delegatedTokens, orderDirection: desc) {\n      id\n      delegatedTokens\n      delegatedStakeRatio\n      delegatorIndexingRewards\n      delegators(first: 1, orderBy: lastDelegatedAt, orderDirection: desc) {\n        id\n        delegator {\n          id\n        }\n        stakedTokens\n        lastDelegatedAt\n      }\n    }\n  }\n',
): (typeof documents)['\n  query IndexersData($first: Int, $skip: Int) {\n    indexers(first: $first, skip: $skip, orderBy: delegatedTokens, orderDirection: desc) {\n      id\n      delegatedTokens\n      delegatedStakeRatio\n      delegatorIndexingRewards\n      delegators(first: 1, orderBy: lastDelegatedAt, orderDirection: desc) {\n        id\n        delegator {\n          id\n        }\n        stakedTokens\n        lastDelegatedAt\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query UserDelegationsData($userId: ID!) {\n    mostRecentUserDelegations: delegatedStakes(\n      first: 5\n      orderBy: lastDelegatedAt\n      orderDirection: desc\n      where: { delegator_: { id: $userId } }\n    ) {\n      id\n      delegator {\n        id\n        stakesCount\n      }\n      indexer {\n        id\n      }\n      stakedTokens\n      createdAt\n      lastDelegatedAt\n    }\n  }\n',
): (typeof documents)['\n  query UserDelegationsData($userId: ID!) {\n    mostRecentUserDelegations: delegatedStakes(\n      first: 5\n      orderBy: lastDelegatedAt\n      orderDirection: desc\n      where: { delegator_: { id: $userId } }\n    ) {\n      id\n      delegator {\n        id\n        stakesCount\n      }\n      indexer {\n        id\n      }\n      stakedTokens\n      createdAt\n      lastDelegatedAt\n    }\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
