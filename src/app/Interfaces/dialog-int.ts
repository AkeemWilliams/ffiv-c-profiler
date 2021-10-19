export interface dialogDT {
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
    item_id?: null;
    owned: string;
    image: string;
    icon: string;
    sources?: (SourcesSubInt)[] | null;
    isOwned: boolean;
    sauce?:SourcesSubInt;
  }
  export interface SourcesSubInt {
    type: string;
    text: string;
    related_type?: null;
    related_id?: null;
  }