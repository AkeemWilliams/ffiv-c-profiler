export interface Mounts {
    query: Query;
    count: number;
    results?: (ResultsSubInt)[] | null;
  }
  export interface Query {
  }
  export interface ResultsSubInt {
    id: number;
    name: string;
    description: string;
    enhanced_description: string;
    tooltip: string;
    movement: string;
    seats: number;
    order: number;
    order_group: number;
    patch: string;
    item_id?: number | null;
    owned: string;
    image: string;
    icon: string;
    sources?: (SourcesSubInt)[] | null;
  }
  export interface SourcesSubInt {
    type: string;
    text: string;
    related_type?: string | null;
    related_id?: number | null;
  }
  