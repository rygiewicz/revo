import { Instance } from './instance.model';

export function adaptInstanceList(data: any): Instance[] {
  data = data || {};

  const instanceList = data.instances;

  if (!Array.isArray(instanceList)) {
    return [];
  }

  return instanceList.map(adaptInstance);
}

function adaptInstance(data: any): Instance {
  data = data || {};

  return {
    id: String(data.id),
    status: adaptStatus(data.statusName),
    name: String(data.instanceName),
    region: adaptRegion(data.regionName),
  };
}

function adaptStatus(statusName: any): Instance['status'] {
  switch (statusName) {
    case 'active':
      return 'active';
    case 'pending':
      return 'pending';
    case 'closed':
      return 'closed';
  }

  return 'unknown';
}

function adaptRegion(regionName: any): Instance['region'] {
  switch (regionName) {
    case 'EU':
      return 'eu';
    case 'AU':
      return 'au';
    case 'US':
      return 'us';
  }

  return 'unknown';
}
