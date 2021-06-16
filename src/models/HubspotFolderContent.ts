export interface Meta {
  allows_anonymous_access: boolean;
  indexable: boolean;
  url_scheme: string;
}

export interface HubspotFolderMetaData {
  alt_key: string;
  alt_key_hash: string;
  archived: boolean;
  cdn_purge_embargo_time?: any;
  cloud_key: string;
  cloud_key_hash: string;
  created: any;
  created_by?: any;
  default_hosting_url: string;
  deleted_at: number;
  deleted_by?: any;
  encoding?: any;
  extension: string;
  file_hash: string;
  folder_id: any;
  friendly_url: string;
  height?: any;
  hidden: boolean;
  id: any;
  is_indexable: boolean;
  meta: Meta;
  name: string;
  portal_id: number;
  replaceable: boolean;
  s3_url: string;
  size: number;
  title: string;
  type: string;
  updated: any;
  url: string;
  width?: any;
}

export interface HubspotFolderContent {
  limit: number;
  message?: any;
  objects: HubspotFolderMetaData[];
  offset: number;
  total: number;
  totalCount: number;
}