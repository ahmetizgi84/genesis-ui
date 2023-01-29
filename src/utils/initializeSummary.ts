import { EVENT_GROUP_NAME, IRawData, ISummary } from '../types';

export const initializeSummary = (rd: IRawData[]) => {
  const groupName = rd[0].event.groupName;
  let individualSummary: ISummary = {
    event: null,
    title: '',
    selectedContent: ''
  };

  switch (groupName) {
    case EVENT_GROUP_NAME.Login: {
      individualSummary.event = EVENT_GROUP_NAME.Login;
      individualSummary.title = '1. Login';
      individualSummary.selectedContent = '-';
      return individualSummary;
    }
    case EVENT_GROUP_NAME.CheckDependency: {
      individualSummary.event = EVENT_GROUP_NAME.CheckDependency;
      individualSummary.title = '2. Check Dependency';
      individualSummary.selectedContent = '-';
      return individualSummary;
    }
    case EVENT_GROUP_NAME.TemplateType: {
      individualSummary.event = EVENT_GROUP_NAME.TemplateType;
      individualSummary.title = '3. Template Type';
      individualSummary.selectedContent = '-';
      return individualSummary;
    }
    case EVENT_GROUP_NAME.ApplicationName: {
      individualSummary.event = EVENT_GROUP_NAME.ApplicationName;
      individualSummary.title = '4. Application Name';
      individualSummary.selectedContent = '-';
      return individualSummary;
    }
    case EVENT_GROUP_NAME.Microservice1: {
      individualSummary.event = EVENT_GROUP_NAME.Microservice1;
      individualSummary.title = '5. Microservice Name';
      individualSummary.selectedContent = '-';
      return individualSummary;
    }
    case EVENT_GROUP_NAME.DB: {
      individualSummary.event = EVENT_GROUP_NAME.DB;
      individualSummary.title = '6. Database';
      individualSummary.selectedContent = '-';
      return individualSummary;
    }
    case EVENT_GROUP_NAME.UseExistingGenesisDb: {
      individualSummary.event = EVENT_GROUP_NAME.UseExistingGenesisDb;
      individualSummary.title = '7. Existing Database';
      individualSummary.selectedContent = '-';
      return individualSummary;
    }
    case EVENT_GROUP_NAME.IdentityPort: {
      individualSummary.event = EVENT_GROUP_NAME.IdentityPort;
      individualSummary.title = '8. Identity Port';
      individualSummary.selectedContent = '-';
      return individualSummary;
    }
    case EVENT_GROUP_NAME.AdminPort: {
      individualSummary.event = EVENT_GROUP_NAME.AdminPort;
      individualSummary.title = '9. Admin Port';
      individualSummary.selectedContent = '-';
      return individualSummary;
    }
    case EVENT_GROUP_NAME.UIChoice: {
      individualSummary.event = EVENT_GROUP_NAME.UIChoice;
      individualSummary.title = '10. UI Choice';
      individualSummary.selectedContent = '-';
      return individualSummary;
    }
    case EVENT_GROUP_NAME.Summary: {
      individualSummary.event = EVENT_GROUP_NAME.Summary;
      individualSummary.title = '11. Summary';
      individualSummary.selectedContent = '-';
      return individualSummary;
    }
    case EVENT_GROUP_NAME.Configuration: {
      individualSummary.event = EVENT_GROUP_NAME.Configuration;
      individualSummary.title = '12. Configuration';
      individualSummary.selectedContent = '-';
      return individualSummary;
    }
    default:
      return individualSummary;
  }
};
