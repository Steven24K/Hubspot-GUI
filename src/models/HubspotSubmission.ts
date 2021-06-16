export interface Next {
  after: string;
  link: string;
}

export interface Paging {
  next: Next;
}

export interface SubmissionValue {
  name: string;
  objectTypeId: string;
  value: string;
}

export interface SubmissionResult {
  pageUrl?: any;
  submittedAt: any;
  values: SubmissionValue[];
}

export interface HubspotSubmission {
  paging: Paging;
  results: SubmissionResult[];
}