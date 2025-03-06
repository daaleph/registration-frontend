export type ExplainedItem = {
    item: string;
    description: string;
    isReversed?: boolean;
}

export type BFIAnswer = {
    [key: string]: number[];
}

type SocialLink = {
    url: string; icon: string;
}
  
export interface Collaborator {
    title: string;
    name: string;
    role: string;
    studies: string;
    photo: string;
    socialLinks: SocialLink[];
}

export type Study = {
    title: string,
    thumbnail: string,
    link: string;
    reason: string;
    authors: string[];
}
