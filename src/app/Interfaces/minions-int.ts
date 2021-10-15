export interface Minions {
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
    patch: string;
    item_id?: number | null;
    behavior: SkillsAndOther;
    race: SkillsAndOther;
    image: string;
    icon: string;
    owned: string;
    sources?: (SourcesSubInt)[] | null;
    verminion?: Verminion | null;
    variants?: (VariantsSubInt)[] | null;
  }
  export interface SkillsAndOther {
    id: number;
    name: string;
  }
  export interface SourcesSubInt {
    type: string;
    text: string;
    related_type?: string | null;
    related_id?: number | null;
  }
  export interface Verminion {
    cost: number;
    attack: number;
    defense: number;
    hp: number;
    speed: number;
    area_attack: boolean;
    skill: string;
    skill_description: string;
    skill_angle: number;
    skill_cost: number;
    eye: boolean;
    gate: boolean;
    shield: boolean;
    skill_type: SkillsAndOther;
  }
  export interface VariantsSubInt {
    id: number;
    name: string;
    description?: null;
    enhanced_description: string;
    tooltip: string;
    patch: string;
    item_id?: null;
    behavior: SkillsAndOther;
    race: SkillsAndOther;
    image: string;
    icon: string;
    verminion: Verminion1;
  }
  export interface Verminion1 {
    cost: number;
    attack: number;
    defense: number;
    hp: number;
    speed: number;
    area_attack: boolean;
    skill: string;
    skill_description: string;
    skill_angle: number;
    skill_cost: number;
    eye: boolean;
    gate: boolean;
    shield: boolean;
    skill_type: SkillsAndOther;
  }
  