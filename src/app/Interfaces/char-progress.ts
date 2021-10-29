export interface CharProgress{

    id: number;
    name: string;
    server: string;
    portrait: string;
    avatar: string;
    last_parsed: string;
    verified: boolean;
    achievements: Achievements;
    mounts: MountsMinsOther;
    minions: MountsMinsOther;
    orchestrions: MountsMinsOther;
    spells: MountsMinsOther;
    emotes: MountsMinsOther;
    bardings: MountsMinsOther;
    hairstyles: MountsMinsOther;
    armoires: MountsMinsOther;
    fashions: MountsMinsOther;
    records: MountsMinsOther;
  }
  // export interface Achievements {
  //   count: number;
  //   total: number;
  //   points: number;
  //   points_total: number;
  //   public: boolean;
  // }
  export interface MountsMinsOther {
    count: number;
    total: number;
  }

  //Big Char Data
  export interface AllCharacterData {
    Achievements: Achievements;
    AchievementsPublic: boolean;
    Character: Character;
    FreeCompany?: null;
    FreeCompanyMembers?: null;
    Friends?: null;
    FriendsPublic?: null;
    Minions: ({Icon:string, Name:string})[];
    Mounts: ({Icon:string, Name:string})[];
    PvPTeam?: null;
    achieveCount: number;
    achievementCompletion: number;
    achievementDet: {query: {} | null, count: number, results:[]};
    minionCompletion: number;
    minionCount: number;
    minionDet: {query: {} | null, count: number, results:(mountdet)[];};
    mountCompletion: number;
    mountCount: number;
    mountDet: {  query: {} | null, count: number, results:(mountdet)[];}

    userMinions: ({Icon:string, Name:string})[] | null;
    userMounts:({Icon:string, Name:string})[] | null;
  }
  export interface Achievements {
    List?: (any)[] | null;
    Points: number;
  }
  export interface Character {
    ActiveClassJob: ActiveClassJob;
    Avatar: string;
    Bio: string;
    ClassJobs?: (ClassJobsSubInt)[] | null;
    ClassJobsBozjan: ClassJobsBozjan;
    ClassJobsElemental: ClassJobsElemental;
    DC: string;
    FreeCompanyId: string;
    FreeCompanyName: string;
    GearSet: GearSet;
    Gender: number;
    GrandCompany: GrandCompany;
    GuardianDeity: number;
    ID: number;
    Lang?: null;
    Name: string;
    Nameday: string;
    ParseDate: number;
    Portrait: string;
    PvPTeamId?: null;
    Race: number;
    Server: string;
    Title: number;
    TitleTop: boolean;
    Town: number;
    Tribe: number;
  }
  export interface ActiveClassJob {
    ClassID: number;
    ExpLevel: number;
    ExpLevelMax: number;
    ExpLevelTogo: number;
    IsSpecialised: boolean;
    JobID: number;
    Level: number;
    Name: string;
    UnlockedState: UnlockedState;
  }
  export interface UnlockedState {
    ID: number;
    Name: string;
  }
  export interface ClassJobsSubInt {
    ClassID: number;
    ExpLevel: number;
    ExpLevelMax: number;
    ExpLevelTogo: number;
    IsSpecialised: boolean;
    JobID: number;
    Level: number;
    Name: string;
    UnlockedState: UnlockedState1;
  }
  export interface UnlockedState1 {
    ID?: number | null;
    Name: string;
  }
  export interface ClassJobsBozjan {
    Level: number;
    Mettle: number;
    Name: string;
  }
  export interface ClassJobsElemental {
    ExpLevel: number;
    ExpLevelMax: number;
    ExpLevelTogo: number;
    Level: number;
    Name: string;
  }
  export interface GearSet {
    Attributes: Attributes;
    ClassID: number;
    Gear: Gear;
    GearKey: string;
    JobID: number;
    Level: number;
  }
  export type Attributes = Record<number, number>
  export interface Gear {
    Body: BodHandHead;
    Bracelets: GearAccessories;
    Earrings: GearAccessories;
    Feet: FeetLegWepMain;
    Hands: BodHandHead;
    Head: BodHandHead;
    Legs: FeetLegWepMain;
    MainHand: FeetLegWepMain;
    Necklace: GearAccessories;
    Ring1: GearAccessories;
    Ring2: GearAccessories; 
    SoulCrystal: SoulCrystal;
    Waist: GearAccessories;
  }
  export interface BodHandHead {
    Creator?: null;
    Dye: number;
    ID: number;
    Materia?: (number)[] | null;
    Mirage: number;
  }
  export interface GearAccessories {
    Creator?: null;
    Dye?: null;
    ID: number;
    Materia?: (number)[] | null;
    Mirage?: null;
  }
  export interface FeetLegWepMain {
    Creator?: null;
    Dye?: null;
    ID: number;
    Materia?: (number)[] | null;
    Mirage: number;
  }
  export interface SoulCrystal {
    Creator?: null;
    Dye?: null;
    ID: number;
    Materia?: (null)[] | null;
    Mirage?: null;
  }
  export interface GrandCompany {
    NameID: number;
    RankID: number;
  }
  export interface MinionsSubIntOrMountsSubInt {
    Icon: string;
    Name: string;
  }
  

  export interface mountdet {
      description: string; 
      enhanced_description: string; 
      icon: string; 
      id: number; 
      image: string; 
      item_id: null; 
      movement: string; 
      name: string; 
      order: number; 
      order_group: number; 
      owned: string; 
      patch: string; 
      seats: number; 
      sources: [{ type: string; text: string; related_type: string; related_id: number; }]; 
      tooltip: string; 
      isOwned: boolean;
  }
  