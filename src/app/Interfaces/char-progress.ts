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
  export interface Achievements {
    count: number;
    total: number;
    points: number;
    points_total: number;
    public: boolean;
  }
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
    Minions?: (MinionsSubIntOrMountsSubInt)[] | null;
    Mounts?: (MinionsSubIntOrMountsSubInt)[] | null;
    PvPTeam?: null;
  }
  export interface Achievements {
    List?: (null)[] | null;
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
  export interface Attributes {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    19: number;
    20: number;
    21: number;
    22: number;
    24: number;
    27: number;
    33: number;
    34: number;
    44: number;
    45: number;
    46: number;
  }
  export interface Gear {
    Body: BodyOrHandsOrHead;
    Bracelets: GearAccessories;
    Earrings: GearAccessories;
    Feet: FeetOrLegsOrMainHand;
    Hands: BodyOrHandsOrHead;
    Head: BodyOrHandsOrHead;
    Legs: FeetOrLegsOrMainHand;
    MainHand: FeetOrLegsOrMainHand;
    Necklace: GearAccessories;
    Ring1: GearAccessories;
    Ring2: GearAccessories; 
    SoulCrystal: SoulCrystal;
    Waist: GearAccessories;
  }
  export interface BodyOrHandsOrHead {
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
  export interface FeetOrLegsOrMainHand {
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
  

  
  