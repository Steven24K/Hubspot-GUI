export interface HubspotFolder {
  category: number;
  cdn_purge_embargo_time?: any;
  created: any;
  deleted: boolean;
  deleted_at: number;
  full_path: string;
  hidden: boolean;
  id: any;
  name: string;
  parent_folder_id?: any;
  portal_id: number;
  updated: any;
}

export interface HubspotFolderResponse {
  limit: number;
  objects: HubspotFolder[];
  offset: number;
  total_count: number;
}