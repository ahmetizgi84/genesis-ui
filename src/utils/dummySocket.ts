import { IRawData } from '../types';

const LOGIN: IRawData[] = [
  {
    uId: 'df93f82a-f1f5-4123-924f-384170e63cb3',
    option: null,
    message: 'Email Address :',
    defaultValue: '',
    event: {
      groupName: 'Login',
      eventName: 'email'
    },
    action: {
      type: 'Input',
      detail: null,
      state: {
        type: 'Email'
      }
    }
  },
  {
    uId: '635d0d67-980d-493c-a483-93313b492249',
    option: null,
    message: 'Password :',
    defaultValue: '',
    event: {
      groupName: 'Login',
      eventName: 'password'
    },
    action: {
      type: 'Input',
      detail: null,
      state: {
        type: 'Mask'
      }
    }
  }
];
const DEPENDENCY_CHECK: IRawData[] = [
  {
    uId: 'f140e832-0a14-41b1-81e1-11ff66869ed2',
    option: null,
    message: ' Dotnet SDK 3.1+ (Required)',
    defaultValue: null,
    event: {
      groupName: 'CheckDependency',
      eventName: null
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: '7b340f23-d1d8-4c6a-9011-37e25ce068d1',
    option: null,
    message: ' EF Core Command-line Tools 3.0+ (Required)',
    defaultValue: null,
    event: {
      groupName: 'CheckDependency',
      eventName: null
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: 'a84fa50e-c662-4ae1-9957-e6b2886ad161',
    option: null,
    message: ' npm or yarn (Required)',
    defaultValue: null,
    event: {
      groupName: 'CheckDependency',
      eventName: null
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: '3c0b4be9-96fb-4168-9a2d-d5a8b2df5e75',
    option: null,
    message: ' git (Optional)',
    defaultValue: null,
    event: {
      groupName: 'CheckDependency',
      eventName: null
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: 'db787726-d370-4b45-8685-80afc001f074',
    option: null,
    message: ' Node.js 10.14.0+ (Optional)',
    defaultValue: null,
    event: {
      groupName: 'CheckDependency',
      eventName: null
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  }
];
const TEMPLATE_TYPE: IRawData[] = [
  {
    uId: 'bce5cda3-7c9d-468c-9e3d-5936cab60bcf',
    option: [
      {
        label: 'Single Microservice (Monolithic)',
        value: '1',
        default: null
      },
      {
        label: 'Multiple Microservices and a Gateway',
        value: '2',
        default: null
      }
    ],
    message: 'Please choose template type',
    defaultValue: '1',
    event: {
      groupName: 'TemplateType',
      eventName: null
    },
    action: {
      type: 'SingleSelect',
      detail: null,
      state: null
    }
  }
];
const APPLICATION_NAME: IRawData[] = [
  {
    uId: '71f75ecc-500c-4721-812d-3e709f846549',
    option: null,
    message: 'Application/Solution Name :',
    defaultValue: 'My_Application',
    event: {
      groupName: 'ApplicationName',
      eventName: null
    },
    action: {
      type: 'Input',
      detail: null,
      state: {
        type: 'Text'
      }
    }
  }
];
const MICROSERVICE_NAME: IRawData[] = [
  {
    uId: '9f14c9e6-6939-459c-a9b9-1554ad4402bd',
    option: null,
    message: 'Microservice Name :',
    defaultValue: 'Microservice',
    event: {
      groupName: 'Microservice1',
      eventName: 'Name'
    },
    action: {
      type: 'Input',
      detail: null,
      state: {
        type: 'Text'
      }
    }
  },
  {
    uId: '93f9bf1b-b87d-4bf4-88d2-324c5980bb2f',
    option: null,
    message: 'Microservice Port :',
    defaultValue: '5051',
    event: {
      groupName: 'Microservice1',
      eventName: 'Port'
    },
    action: {
      type: 'Input',
      detail: null,
      state: {
        type: 'Text'
      }
    }
  }
];
const DATABASE: IRawData[] = [
  {
    uId: '862cea12-ae29-4552-8ebe-b8e2a00a1e85',
    option: [
      {
        label: 'MSSQL',
        value: '1',
        default: null
      },
      {
        label: 'PostgreSQL',
        value: '2',
        default: null
      },
      {
        label: 'MySQL',
        value: '3',
        default: null
      },
      {
        label: 'Oracle',
        value: '4',
        default: null
      },
      {
        label: 'Skip',
        value: '5',
        default: null
      }
    ],
    message: 'Database Type',
    defaultValue: '1',
    event: {
      groupName: 'DB',
      eventName: 'DBType'
    },
    action: {
      type: 'SingleSelect',
      detail: null,
      state: null
    }
  },
  {
    uId: '0ab3fbd4-ed7b-49bc-9212-094be1c4fb7c',
    option: [
      {
        label: 'Provide full connection string. (Use also for trusted connections)',
        value: '1',
        default: null
      },
      {
        label: 'Use connection string builder to create it.',
        value: '2',
        default: null
      },
      {
        label: 'Leave it blank.(Scaffolding step cannot be used)',
        value: '3',
        default: null
      }
    ],
    message: 'How do you want to create your connection string ?',
    defaultValue: '1',
    event: {
      groupName: 'DB',
      eventName: 'ConnStringChoice'
    },
    action: {
      type: 'SingleSelect',
      detail: null,
      state: null
    }
  },
  {
    uId: '306a097c-c0b9-4ffe-8aff-2503c450ceca',
    option: null,
    message: 'Connection string :',
    defaultValue: '',
    event: {
      groupName: 'DB',
      eventName: 'ConnString'
    },
    action: {
      type: 'Input',
      detail: null,
      state: {
        type: 'Text'
      }
    }
  },
  {
    uId: '9d92f4c5-b720-4fdd-a8f7-bbf6d7c4a2bf',
    option: [
      {
        label: 'public.authActions',
        value: 'public.authActions',
        default: null
      },
      {
        label: 'public.authResources',
        value: 'public.authResources',
        default: null
      },
      {
        label: 'public.authTemplate',
        value: 'public.authTemplate',
        default: null
      },
      {
        label: 'public.authTemplateDetail',
        value: 'public.authTemplateDetail',
        default: null
      },
      {
        label: 'public.authUserRights',
        value: 'public.authUserRights',
        default: null
      },
      {
        label: 'public.communicationDefinitions',
        value: 'public.communicationDefinitions',
        default: null
      },
      {
        label: 'public.communicationTemplates',
        value: 'public.communicationTemplates',
        default: null
      },
      {
        label: 'public.coreCompany',
        value: 'public.coreCompany',
        default: null
      },
      {
        label: 'public.coreDepartment',
        value: 'public.coreDepartment',
        default: null
      },
      {
        label: 'public.coreParameters',
        value: 'public.coreParameters',
        default: null
      },
      {
        label: 'public.coreUsers',
        value: 'public.coreUsers',
        default: null
      },
      {
        label: 'public.notification',
        value: 'public.notification',
        default: null
      },
      {
        label: 'public.notificationSettings',
        value: 'public.notificationSettings',
        default: null
      },
      {
        label: 'public.sampleEmployee',
        value: 'public.sampleEmployee',
        default: null
      },
      {
        label: 'public.sampleEmployeeTask',
        value: 'public.sampleEmployeeTask',
        default: null
      },
      {
        label: 'public.tenants',
        value: 'public.tenants',
        default: null
      },
      {
        label: 'public.transactionLogs',
        value: 'public.transactionLogs',
        default: null
      }
    ],
    message: "Please select 'tables' to use at scaffold step.",
    defaultValue: 'public.authActions',
    event: {
      groupName: 'DB',
      eventName: 'ConnString'
    },
    action: {
      type: 'MultiSelect',
      detail: null,
      state: null
    }
  },
  {
    uId: '33b2153c-8420-423f-b3fd-0d611f502949',
    option: [
      {
        label: 'MSSQL',
        value: '1',
        default: null
      },
      {
        label: 'PostgreSQL',
        value: '2',
        default: null
      },
      {
        label: 'MySQL',
        value: '3',
        default: null
      },
      {
        label: 'Oracle',
        value: '4',
        default: null
      }
    ],
    message: 'Database Type',
    defaultValue: '1',
    event: {
      groupName: 'DB',
      eventName: 'DBType'
    },
    action: {
      type: 'SingleSelect',
      detail: null,
      state: null
    }
  },
  {
    uId: '34e36c67-b196-4ad5-8624-8aea37fe654f',
    option: [
      {
        label: 'Provide full connection string. (Use also for trusted connections)',
        value: '1',
        default: null
      },
      {
        label: 'Use connection string builder to create it.',
        value: '2',
        default: null
      }
    ],
    message: 'How do you want to create your connection string ?',
    defaultValue: '1',
    event: {
      groupName: 'DB',
      eventName: 'ConnStringChoice'
    },
    action: {
      type: 'SingleSelect',
      detail: null,
      state: null
    }
  },
  {
    uId: '23eaaa16-ac56-46bb-9c8f-f39c0e372ead',
    option: null,
    message: 'Connection string :',
    defaultValue: '',
    event: {
      groupName: 'DB',
      eventName: 'ConnString'
    },
    action: {
      type: 'Input',
      detail: null,
      state: {
        type: 'Text'
      }
    }
  }
];
const USE_EXISTING_DATABASE: IRawData[] = [
  {
    uId: '5eefec3c-64eb-41f0-a682-39c8c7a8666d',
    option: [
      {
        label: 'Yes',
        value: 'y/yes',
        default: null
      },
      {
        label: 'No, create new one',
        value: 'n/no',
        default: null
      }
    ],
    message: 'Use existing Genesis database ?',
    defaultValue: 'y/yes',
    event: {
      groupName: 'UseExistingGenesisDb',
      eventName: null
    },
    action: {
      type: 'SingleSelect',
      detail: null,
      state: null
    }
  }
];
const IDENTITY_PORT: IRawData[] = [
  {
    uId: 'bb9599ee-3bcf-42dd-8486-1a14eb448283',
    option: null,
    message: 'Identity Server Port :',
    defaultValue: '5000',
    event: {
      groupName: 'IdentityPort',
      eventName: null
    },
    action: {
      type: 'Input',
      detail: null,
      state: {
        type: 'Text'
      }
    }
  }
];
const ADMIN_PROJECT_PORT: IRawData[] = [
  {
    uId: '55086b61-4d16-49a2-95af-356c8c3196f5',
    option: null,
    message: 'Admin Project Port :',
    defaultValue: '5050',
    event: {
      groupName: 'AdminPort',
      eventName: null
    },
    action: {
      type: 'Input',
      detail: null,
      state: {
        type: 'Text'
      }
    }
  }
];
const CREATE_EMPTY_UI: IRawData[] = [
  {
    uId: '759126d2-ebaa-48cf-8d76-778d9f4ffde2',
    option: [
      {
        label: 'Create empty UI project.',
        value: '1',
        default: null
      },
      {
        label: 'Create UI project and generate pages/models from database.',
        value: '2',
        default: null
      },
      {
        label: 'Skip.',
        value: '3',
        default: null
      }
    ],
    message: 'Do you want to create UI project ?',
    defaultValue: '1',
    event: {
      groupName: 'UIChoice',
      eventName: 'DoYouWantToCreateUIProject'
    },
    action: {
      type: 'SingleSelect',
      detail: null,
      state: null
    }
  },
  {
    uId: 'e069a71f-c2bc-4c79-8437-d924721992fc',
    option: null,
    message: 'UI Port :',
    defaultValue: '3000',
    event: {
      groupName: 'UIChoice',
      eventName: 'UIPort'
    },
    action: {
      type: 'Input',
      detail: null,
      state: {
        type: 'Text'
      }
    }
  }
];
const SUMMARY: IRawData[] = [
  {
    uId: '812ee074-b051-4562-ac2a-c63c48b6ac70',
    option: null,
    message: '-Summary-',
    defaultValue: null,
    event: {
      groupName: 'Summary',
      eventName: ''
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: '288e9aad-ef5b-4e69-a328-3812b7be9bf8',
    option: null,
    message: 'Template Type: Single Microservice (Monolithic)',
    defaultValue: null,
    event: {
      groupName: 'Summary',
      eventName: 'TemplateType'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: '5a7a2b52-353c-4fe2-a518-eda0ed15feba',
    option: null,
    message: 'Application Name: My_Applicationv',
    defaultValue: null,
    event: {
      groupName: 'Summary',
      eventName: 'ApplicationName'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: 'd05bfa74-9dc3-42c7-8ef5-7a9570e64815',
    option: null,
    message: 'Database Type: PostgreSQL',
    defaultValue: null,
    event: {
      groupName: 'Summary',
      eventName: 'DatabaseType'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: '3b4d4b7a-9e27-440e-a089-d83b259f8a1e',
    option: null,
    message:
      'Connection string(Genesis): User ID=postgres;Password=******************;Host=testhub.hebys.io;Port=5432;Database=cli_gui_test;',
    defaultValue: null,
    event: {
      groupName: 'Summary',
      eventName: 'Connectionstring'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: 'd864f285-aa34-4a36-9819-3a58741a6ce3',
    option: null,
    message: 'Use existing Genesis database : True',
    defaultValue: null,
    event: {
      groupName: 'Summary',
      eventName: 'UseexistingGenesisdatabase'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: '3ce775f3-8263-42a5-b5db-345ec0b709cb',
    option: null,
    message: 'Identity Server Port: 5000',
    defaultValue: null,
    event: {
      groupName: 'Summary',
      eventName: 'IdentityServerPort'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: '7e1fe05f-e5f8-4fde-beb9-021d987e11d0',
    option: null,
    message: 'Admin Project Port: 5050',
    defaultValue: null,
    event: {
      groupName: 'Summary',
      eventName: 'AdminProjectPort'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: '0a5292bf-c531-4c49-ab65-71556e6ff65f',
    option: null,
    message: 'UI Choice: Create empty UI project.',
    defaultValue: null,
    event: {
      groupName: 'Summary',
      eventName: 'UIChoice'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: 'eaa28405-fd27-4d44-9f9e-a0780d189074',
    option: null,
    message: 'UI Port: 3000',
    defaultValue: null,
    event: {
      groupName: 'Summary',
      eventName: 'UIPort'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: '465a9d47-08bd-4d20-a438-7112066422b4',
    option: null,
    message: 'Path: /Users/beyzaozer/Desktop/My_Applicationv',
    defaultValue: null,
    event: {
      groupName: 'Summary',
      eventName: 'Path'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: '7080468a-ec98-4150-932f-52fc55116fe3',
    option: null,
    message: 'Microservice(s)/Users/beyzaozer/Desktop/My_Applicationv',
    defaultValue: null,
    event: {
      groupName: 'Summary',
      eventName: 'Microservice'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: '9c60e109-f281-4e52-a352-2848635ebc49',
    option: null,
    message: 'Microservice Name: Microservice',
    defaultValue: null,
    event: {
      groupName: 'Summary',
      eventName: 'MicroserviceName'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: '82777aad-dd10-4f27-a654-0750054edfc2',
    option: null,
    message: 'PostgreSQL',
    defaultValue: null,
    event: {
      groupName: 'Summary',
      eventName: 'DatabaseType'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: '4729f8d7-9c18-4647-9056-67fe2477e523',
    option: null,
    message:
      'Data Source: User ID=postgres;Password=******************;Host=testhub.hebys.io;Port=5432;Database=cli_gui_test;',
    defaultValue: null,
    event: {
      groupName: 'Summary',
      eventName: 'DataSource'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: 'e3aec71d-8c9f-4a72-a6ed-b75fa2e82384',
    option: null,
    message:
      'Port: User ID=postgres;Password=******************;Host=testhub.hebys.io;Port=5432;Database=cli_gui_test;',
    defaultValue: null,
    event: {
      groupName: 'Summary',
      eventName: 'Port'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: '9bb36a8c-0017-4063-8c6f-ae7e123a6c99',
    option: null,
    message: 'Total Table Count: 2',
    defaultValue: null,
    event: {
      groupName: 'Summary',
      eventName: 'TotalTableCount'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: 'a126b985-9980-49e0-9a00-42e4f923e055',
    option: null,
    message: '--Summary end--',
    defaultValue: null,
    event: {
      groupName: 'Summary',
      eventName: 'SummaryEnd'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: '94bd1832-c6e1-4f1e-bec0-cb40a96d693a',
    option: [
      {
        label: 'Yes',
        value: 'y/yes',
        default: null
      },
      {
        label: 'No',
        value: 'n/no',
        default: null
      }
    ],
    message: 'Do you want to proceed ?',
    defaultValue: 'y/yes',
    event: {
      groupName: 'Summary',
      eventName: 'DoYouWantToProceed'
    },
    action: {
      type: 'SingleSelect',
      detail: null,
      state: null
    }
  }
];
const GIT_REPO_INIT: IRawData[] = [
  {
    uId: 'a1cc7217-d5a3-48c2-9051-cc7b0d742379',
    option: null,
    message: 'Git repo init.',
    defaultValue: null,
    event: {
      groupName: 'Configuration',
      eventName: 'GitRepoInit'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: '0d5dd4c4-509f-4a0d-92d2-bf9cf97979e6',
    option: null,
    message: 'Template is downloading...',
    defaultValue: null,
    event: {
      groupName: 'Configuration',
      eventName: 'DownloadingTemplate'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: 'd1485b1b-2cb9-43ac-b6c8-423fae1c1e6c',
    option: null,
    message: 'Template file is extracting...',
    defaultValue: null,
    event: {
      groupName: 'Configuration',
      eventName: 'ExtractFile'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: 'ea9e858c-89bf-4060-a39c-46c18dde2210',
    option: null,
    message: 'Create solution and add projects...',
    defaultValue: null,
    event: {
      groupName: 'Configuration',
      eventName: 'CreateSolutionAndAddProjects'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  },
  {
    uId: 'aae980c4-4e33-4159-a6e6-1b6c3c3f5089',
    option: null,
    message: 'Projects is building...',
    defaultValue: null,
    event: {
      groupName: 'Configuration',
      eventName: 'BuildProjects'
    },
    action: {
      type: 'Info',
      detail: null,
      state: null
    }
  }
];

export {
  LOGIN,
  DEPENDENCY_CHECK,
  TEMPLATE_TYPE,
  APPLICATION_NAME,
  MICROSERVICE_NAME,
  DATABASE,
  USE_EXISTING_DATABASE,
  IDENTITY_PORT,
  ADMIN_PROJECT_PORT,
  CREATE_EMPTY_UI,
  SUMMARY,
  GIT_REPO_INIT
};
