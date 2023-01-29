import type { ReactNode, ChangeEvent } from 'react';

export enum ACTION_TYPES {
  Info = 'Info',
  SingleSelect = 'SingleSelect',
  MultiSelect = 'MultiSelect',
  Input = 'Input'
}
export enum EVENT_GROUP_NAME {
  Login = 'Login',
  CheckDependency = 'CheckDependency',
  TemplateType = 'TemplateType',
  ApplicationName = 'ApplicationName',
  Microservice1 = 'Microservice1',
  DB = 'DB',
  UseExistingGenesisDb = 'UseExistingGenesisDb',
  IdentityPort = 'IdentityPort',
  AdminPort = 'AdminPort',
  UIChoice = 'UIChoice',
  Summary = 'Summary',
  Configuration = 'Configuration'
}

export interface IEvent {
  groupName: string;
  eventName: string | null;
}

export interface IOption {
  label: string;
  value: string;
  default: string | null;
}

export interface IState {
  type: string;
}

export interface IAction {
  type: string;
  detail: string | null;
  state: IState | null;
}

export interface IRawData {
  uId: string;
  option: IOption[] | null;
  message: string;
  defaultValue: string | null;
  event: IEvent;
  action: IAction;
}

// CONTEXT

export interface Props {
  children: ReactNode;
}

export interface ISummary {
  event: EVENT_GROUP_NAME | null;
  title: string;
  selectedContent: string;
}

export interface IDataContextState {
  isSignedIn: boolean;
  loading: boolean;
  rawData: IRawData[];
  summary: ISummary[];
  events: {
    handleLogin: (_formData: any) => void;
    setLoggedIn: (_state: boolean) => void;
    getDataFromSocket: () => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
}
