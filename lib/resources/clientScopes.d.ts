import ClientScopeRepresentation from '../defs/clientScopeRepresentation';
import Resource from './resource';
import { KeycloakAdminClient } from '../client';
import ProtocolMapperRepresentation from '../defs/protocolMapperRepresentation';
export declare class ClientScopes extends Resource<{
    realm?: string;
}> {
    find: (payload?: void & {
        realm?: string;
    }) => Promise<ClientScopeRepresentation[]>;
    create: (payload?: ClientScopeRepresentation & {
        realm?: string;
    }) => Promise<void>;
    findOneById: (payload?: {
        id: string;
    } & {
        realm?: string;
    }) => Promise<ClientScopeRepresentation>;
    updateById: (query: {
        id: string;
    } & {
        realm?: string;
    }, payload: ClientScopeRepresentation) => Promise<void>;
    delById: (payload?: {
        id: string;
    } & {
        realm?: string;
    }) => Promise<void>;
    listDefaultClientScopes: (payload?: void & {
        realm?: string;
    }) => Promise<ClientScopeRepresentation[]>;
    addDefaultClientScope: (payload?: {
        id: string;
    } & {
        realm?: string;
    }) => Promise<void>;
    delDefaultClientScope: (payload?: {
        id: string;
    } & {
        realm?: string;
    }) => Promise<void>;
    listDefaultOptionalClientScopes: (payload?: void & {
        realm?: string;
    }) => Promise<ClientScopeRepresentation[]>;
    addDefaultOptionalClientScope: (payload?: {
        id: string;
    } & {
        realm?: string;
    }) => Promise<void>;
    delDefaultOptionalClientScope: (payload?: {
        id: string;
    } & {
        realm?: string;
    }) => Promise<void>;
    addMultipleProtocolMappers: (query: {
        id: string;
    } & {
        realm?: string;
    }, payload: ProtocolMapperRepresentation[]) => Promise<void>;
    addProtocolMapper: (query: {
        id: string;
    } & {
        realm?: string;
    }, payload: ProtocolMapperRepresentation) => Promise<void>;
    listProtocolMappers: (payload?: {
        id: string;
    } & {
        realm?: string;
    }) => Promise<ProtocolMapperRepresentation[]>;
    findProtocolMapperById: (payload?: {
        id: string;
        mapperId: string;
    } & {
        realm?: string;
    }) => Promise<ProtocolMapperRepresentation>;
    findProtocolMappersByProtocol: (payload?: {
        id: string;
        protocol: string;
    } & {
        realm?: string;
    }) => Promise<ProtocolMapperRepresentation[]>;
    updateProtocolMapper: (query: {
        id: string;
        mapperId: string;
    } & {
        realm?: string;
    }, payload: ProtocolMapperRepresentation) => Promise<void>;
    delProtocolMapper: (payload?: {
        id: string;
        mapperId: string;
    } & {
        realm?: string;
    }) => Promise<void>;
    constructor(client: KeycloakAdminClient);
    findOneByName(payload: {
        name: string;
    }): Promise<ClientScopeRepresentation>;
    delByName(payload: {
        name: string;
    }): Promise<void>;
    findProtocolMapperByName(payload: {
        id: string;
        name: string;
    }): Promise<ProtocolMapperRepresentation>;
}
