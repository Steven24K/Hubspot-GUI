export interface HubspotOption {
  label: string;
  value: string;
  displayOrder: number;
  doubleData: number;
  hidden: boolean;
  description: string;
  readOnly: boolean;
}

export interface Validation {
  name: string;
  message: string;
  data: string;
  useDefaultBlockList: boolean;
  blockedEmailAddresses: any[];
}

export interface MetaData {
  name: string;
  value: string;
}

export interface Field {
  name: string;
  label: string;
  type: string;
  fieldType: string;
  description: string;
  groupName: string;
  displayOrder: number;
  required: boolean;
  selectedOptions: string[];
  options: HubspotOption[];
  validation: Validation;
  enabled: boolean;
  hidden: boolean;
  defaultValue: string;
  isSmartField: boolean;
  unselectedLabel: string;
  placeholder: string;
  dependentFieldFilters: any[];
  labelHidden: boolean;
  propertyObjectType: string;
  metaData: MetaData[];
  objectTypeId: string;
}

export interface RichText {
  content: string;
  type: string;
}

export interface FormFieldGroup {
  fields: Field[];
  default: boolean;
  isSmartGroup: boolean;
  richText: RichText;
  isPageBreak: boolean;
}

export interface MetaData2 {
  name: string;
  value: string;
}

export interface MultivariateTest {
  variants: any[];
  startAtTimestamp: number;
  endAtTimestamp: number;
  winningVariantId: string;
  finished: boolean;
  controlId: string;
}

export interface HubspotForm {
  portalId: number;
  guid: string;
  name: string;
  action: string;
  method: string;
  cssClass: string;
  redirect: string;
  submitText: string;
  followUpId: string;
  notifyRecipients: string;
  leadNurturingCampaignId: string;
  formFieldGroups: FormFieldGroup[];
  createdAt: any;
  updatedAt: any;
  performableHtml: string;
  migratedFrom: string;
  ignoreCurrentValues: boolean;
  metaData: MetaData2[];
  deletable: boolean;
  inlineMessage: string;
  tmsId: string;
  captchaEnabled: boolean;
  campaignGuid: string;
  cloneable: boolean;
  editable: boolean;
  formType: string;
  deletedAt: number;
  themeName: string;
  parentId: number;
  style: string;
  isPublished: boolean;
  publishAt: number;
  unpublishAt: number;
  publishedAt: number;
  multivariateTest: MultivariateTest;
  kickbackEmailWorkflowId: number;
  kickbackEmailsJson: string;
  customUid: string;
  createMarketableContact: boolean;
  editVersion: number;
  thankYouMessageJson: string;
  themeColor: string;
  alwaysCreateNewCompany: boolean;
  internalUpdatedAt: any;
  businessUnitId: number;
}