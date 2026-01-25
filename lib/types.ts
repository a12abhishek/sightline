export interface ParsedQuery {
  type: string | null;
  operator: string | null;
  region: string | null;
  country: string | null;
  near: string | null;
  radius: number;
  raw: string;
}

export interface GeoResult {
  displayName: string;
  lat: number;
  lon: number;
  boundingBox: [number, number, number, number];
  type: string;
  importance: number;
  addressComponents: {
    country?: string;
    state?: string;
    city?: string;
  };
}

export interface Asset {
  id: string;
  name: string;
  type: string;
  operator: string | null;
  lat: number;
  lon: number;
  tags: Record<string, string>;
}

export interface SearchResult {
  results: Asset[];
  stats: {
    total: number;
    operators: Record<string, number>;
    types: Record<string, number>;
  };
  bounds: [number, number, number, number] | null;
  query: ParsedQuery;
}

export interface SearchError {
  error: string;
  code: string;
}

export const ASSET_TYPE_MAP: Record<string, { osmTags: Record<string, string | string[]>; label: string }> = {
  telecom: {
    osmTags: { 'man_made': 'tower', 'tower:type': ['communication', 'telecommunications'] },
    label: 'Telecom Tower'
  },
  tower: {
    osmTags: { 'man_made': 'tower', 'tower:type': ['communication', 'telecommunications'] },
    label: 'Telecom Tower'
  },
  data_center: {
    osmTags: { 'building': 'data_centre' },
    label: 'Data Center'
  },
  datacenter: {
    osmTags: { 'building': 'data_centre' },
    label: 'Data Center'
  },
  power_plant: {
    osmTags: { 'power': 'plant' },
    label: 'Power Plant'
  },
  powerplant: {
    osmTags: { 'power': 'plant' },
    label: 'Power Plant'
  },
  substation: {
    osmTags: { 'power': 'substation' },
    label: 'Substation'
  },
  port: {
    osmTags: { 'landuse': 'port' },
    label: 'Port'
  },
  harbour: {
    osmTags: { 'harbour': 'yes' },
    label: 'Harbour'
  },
  warehouse: {
    osmTags: { 'building': 'warehouse' },
    label: 'Warehouse'
  },
  airport: {
    osmTags: { 'aeroway': 'aerodrome' },
    label: 'Airport'
  },
  helipad: {
    osmTags: { 'aeroway': 'helipad' },
    label: 'Helipad'
  },
  railyard: {
    osmTags: { 'landuse': 'railway' },
    label: 'Rail Yard'
  },
  rail_yard: {
    osmTags: { 'landuse': 'railway' },
    label: 'Rail Yard'
  },
  refinery: {
    osmTags: { 'man_made': 'petroleum_well' },
    label: 'Refinery'
  },
  pipeline: {
    osmTags: { 'man_made': 'pipeline' },
    label: 'Pipeline'
  },
  solar: {
    osmTags: { 'power': 'generator', 'generator:source': 'solar' },
    label: 'Solar Farm'
  },
  wind: {
    osmTags: { 'power': 'generator', 'generator:source': 'wind' },
    label: 'Wind Farm'
  },
  nuclear: {
    osmTags: { 'power': 'generator', 'generator:source': 'nuclear' },
    label: 'Nuclear Plant'
  },
  dam: {
    osmTags: { 'waterway': 'dam' },
    label: 'Dam'
  },
  military: {
    osmTags: { 'landuse': 'military' },
    label: 'Military Installation'
  },
  prison: {
    osmTags: { 'amenity': 'prison' },
    label: 'Prison'
  },
  hospital: {
    osmTags: { 'amenity': 'hospital' },
    label: 'Hospital'
  },
  embassy: {
    osmTags: { 'amenity': 'embassy' },
    label: 'Embassy'
  },
  factory: {
    osmTags: { 'building': 'industrial' },
    label: 'Factory'
  },
  industrial: {
    osmTags: { 'landuse': 'industrial' },
    label: 'Industrial Zone'
  }
};

export const OPERATOR_ALIASES: Record<string, string[]> = {
  'airtel': ['bharti airtel', 'airtel india', 'airtel telecom'],
  'jio': ['reliance jio', 'jio infocomm'],
  'vodafone': ['vodafone idea', 'vi', 'vodafone india'],
  'bsnl': ['bharat sanchar nigam'],
  'google': ['google llc', 'google inc'],
  'amazon': ['amazon web services', 'aws'],
  'microsoft': ['microsoft azure', 'azure'],
  'meta': ['facebook', 'meta platforms'],
  'apple': ['apple inc'],
  'at&t': ['att', 'at and t'],
  'verizon': ['verizon wireless'],
  't-mobile': ['tmobile', 't mobile'],
  'vodacom': ['vodacom group'],
  'mtn': ['mtn group'],
  'orange': ['orange telecom'],
  'telefonica': ['movistar'],
  'china mobile': ['cmcc'],
  'china unicom': [],
  'china telecom': [],
  'ntpc': ['national thermal power corporation'],
  'adani': ['adani power', 'adani green'],
  'tata': ['tata power', 'tata steel'],
  'reliance': ['reliance industries', 'ril']
};
