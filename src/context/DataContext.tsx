import { useToast } from '@chakra-ui/react';
import { createContext, useContext, useReducer, useCallback, useEffect, useMemo, FC, ChangeEvent } from 'react';
import { IDataContextState, IRawData, ISummary, Props } from '../types';
import { cacheGet, cacheSet } from '../utils/cacheManager';
import {
  ADMIN_PROJECT_PORT,
  APPLICATION_NAME,
  CREATE_EMPTY_UI,
  DATABASE,
  DEPENDENCY_CHECK,
  IDENTITY_PORT,
  LOGIN,
  MICROSERVICE_NAME,
  SUMMARY,
  TEMPLATE_TYPE,
  USE_EXISTING_DATABASE
} from '../utils/dummySocket';
import { initializeSummary } from '../utils/initializeSummary';

const initialState: IDataContextState = {
  isSignedIn: false,
  rawData: [], // represents data comes from socket
  loading: false,
  summary: [],
  ...cacheGet('CONTEXT_STATE')
} as any;

const DataContext = createContext(initialState);

const reducer = (state: IDataContextState, { type, payload }: any): IDataContextState => {
  switch (type) {
    case 'SET_LOADING':
      return { ...state, loading: payload };
    case 'SET_LOGGED_IN':
      return { ...state, isSignedIn: payload };
    case 'SET_RAW_DATA':
      return { ...state, rawData: payload };
    case 'SET_SUMMARY':
      return { ...state, summary: payload };

    default:
      return state;
  }
};

const DataProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isSignedIn, rawData, summary, loading } = state;
  const toast = useToast();

  const setLoggedIn = useCallback((_payload: boolean) => dispatch({ type: 'SET_LOGGED_IN', payload: _payload }), []);
  const setLoading = useCallback((_payload: boolean) => dispatch({ type: 'SET_LOADING', payload: _payload }), []);
  const setRawData = useCallback((_payload: IRawData[]) => dispatch({ type: 'SET_RAW_DATA', payload: _payload }), []);
  const setSummary = useCallback((_payload: ISummary[]) => dispatch({ type: 'SET_SUMMARY', payload: _payload }), []);

  // ### LOGIN ################################################################################################################
  const handleLogin = useCallback((formData: any) => {
    console.log('formData: ', formData);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoggedIn(true);
      toast({
        title: 'Success',
        description: 'logged in succesfully',
        status: 'success',
        position: 'bottom-right',
        isClosable: true
      });
    }, 3500);
  }, []);

  /**
   * @todo
   * 1. socket bağlantısı
   * 2. sign in + isSignedIn = true
   * 3. Her adım sonrası ilgili summary'e kullanıcının seçtiği yada yazdığı seçeneklerin set edilmesi
   * 4. input'un value ve name attrleri hangi alan ile belirleniyor?
   * 5.
   */

  // ### GET DATA FROM SOCKET ################################################################################################################
  const getDataFromSocket = useCallback(async () => {
    setLoading(true);
    setTimeout(() => {
      // assume that data comes from socket...
      let incomingRawData = socketRepresenter();
      const inComingErrorState = false;

      console.log('incomignRawData: ', incomingRawData);

      // if there s an error, do not set state with new step.
      if (inComingErrorState) {
        /**@TODO */
        // show an error message
      } else {
        // Setting raw data to the state...
        setRawData(incomingRawData);

        // Summary is preparing...
        const individualSummary = initializeSummary(incomingRawData);
        if (summary.length > 0) {
          const currentStepIsExists = summary.some(smr => smr.event === individualSummary.event);
          if (!currentStepIsExists) setSummary([...summary, { ...individualSummary }]);
        } else {
          setSummary([individualSummary]);
        }
      }

      setLoading(false);
    }, 3000);
  }, [
    /* socket connection state */
    summary
  ]);

  // temporary method which represents socket.
  // after socket connection will be deleted.
  const socketRepresenter = () => {
    console.log('summarylength: ', summary.length);
    if (summary.length <= 0) return LOGIN;
    if (summary.length == 1) return DEPENDENCY_CHECK;
    if (summary.length == 2) return TEMPLATE_TYPE;
    if (summary.length == 3) return APPLICATION_NAME;
    if (summary.length == 4) return MICROSERVICE_NAME;
    if (summary.length == 5) return DATABASE;
    if (summary.length == 6) return USE_EXISTING_DATABASE;
    if (summary.length == 7) return IDENTITY_PORT;
    if (summary.length == 8) return ADMIN_PROJECT_PORT;
    if (summary.length == 9) return CREATE_EMPTY_UI;
    if (summary.length == 10) return SUMMARY;
    else return LOGIN;
  };

  // ### HANDLE CHANGE ################################################################################################################
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log({ value, name });
  }, []);

  const value: IDataContextState = {
    isSignedIn,
    rawData,
    summary,
    loading,
    events: {
      handleLogin,
      setLoggedIn,
      getDataFromSocket,
      handleChange
    }
  };

  const contextState = useMemo(() => {
    return { isSignedIn, rawData, summary };
  }, [isSignedIn, rawData, summary]);

  useEffect(() => {
    cacheSet('CONTEXT_STATE', { ...contextState });
  }, [contextState]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export { useData, DataContext, DataProvider };
