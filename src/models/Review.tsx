export interface Review {
    id: number;
    author: string | null;
    companyName: string;
    review: string;
    likes: number;
    isLiked: boolean;
    comments?: string[];
}
