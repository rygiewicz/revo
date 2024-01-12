type Status = 'pending' | 'active' | 'closed' | 'unknown';

type Region = 'eu' | 'au' | 'us' | 'unknown';

export interface Instance {
  id: string;
  name: string;
  status: Status;
  region: Region;
}
