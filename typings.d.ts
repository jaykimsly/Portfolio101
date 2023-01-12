interface SanityBody{
    _createdAt:string;
    _id:string;
    _rev:string;
    _updatedAt:string;
}
interface Image{
    _type:"image";
    asset: {
        _ref:string;
        _type:"reference";
    };
}

export interface PageInfo extends SanityBody{
_type:"pageInfo";
address:string;
backgroundInformation:string;
email:string;
heroimage:Image;
name:string;
phonenumber:string;
profilePic:Image;
}

export interface Social extends SanityBody{
    _type:"social";
    title:string;
    url:string;
}

export interface Skill extends SanityBody{
    _type:"skill";
    title:string;
    Progress:number;
    image:Image;
}
export interface Technology extends SanityBody{
    _type:"skill";
    title:string;
    image:Image
    progress:string;
}

export interface Project extends SanityBody{
    _type:"project";
    title:string;
    image:Image;
    linkToBuild:string;
    summary:string;
    technologies:Technology[];
}

export interface Experience extends SanityBody{
    _type:"experience";
    jobTitle:string;
    image:Image;
    dateStarted:Date;
    dateEnded:Date;
    points:string[];
    linkToBuild:string;
    summary:string;
    technologies:Technology[];
}