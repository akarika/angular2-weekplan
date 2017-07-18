export interface Task {
    id: number;
    title: string;
    description: string;
    creationDate?: Date;
    completionDate?: Date;
    isDeleted?: boolean;
}