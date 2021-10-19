export interface CheezyMints{

    query: Query;
    count:number;
    results:(ResultSubInt)[] | null;

}

export interface Query{

}

export interface ResultSubInt{
    id:number;
    name:string;
    description:string;
    points:number;
    order:number;
    patch:string;
    owned:string;
    icon:string;
    category:CategorySubInt;
    type:CategorySubInt;
    reward?:Reward | null;
}

export interface CategorySubInt{
    id:number;
    name:string;
}

export interface Reward{
    type:string;
    title?: Title | null;
    name?:string | null;
}

export interface Title{
    id:number;
    name:string;
    female_name:string;
    order:number;
    patch:string;
    owned:string;
    icon:string;
}