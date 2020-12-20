export interface Review {
    id: number;
    author: string;
    companyName: string;
    review: string;
    likes: number;
    isLiked: boolean;
    comments?: string[];
}
