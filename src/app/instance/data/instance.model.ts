type Status = 'pending' | 'active' | 'closed';

export interface Instance {
  id: string;
  name: string;
  status: Status;
  region: string;
}
