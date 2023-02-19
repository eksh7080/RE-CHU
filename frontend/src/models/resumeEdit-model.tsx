export interface ResumeDetailModel {
    careerData: [];
    msg: string;
    projectData: [];
    resumeData: ResumeData[];
    userData: UserData;
}

export interface ResumeData {
    userId: number;
    intro?: string;
    resumeName: string;
    position?: string;
    updatedAt: string;
    resumeId: number;
    title: string;
}

export interface UserData {
    avaterUrl?: string;
    created: string;
    email: string;
    id: number;
    phoneNumber: string;
    username: string;
}

export interface WorkFormData {
    company: string;
    position: string;
    notDevlop: boolean;
    workNow: boolean;
    startDate: string;
    endDate: string;
    reward: string;
}

export interface ProjectFormData {
    projectName: string;
    year: string;
    information: string;
    link1: string;
    link2: string;
    stacks: string[];
}

export interface FormStore {
    list: number;
    state: boolean;
}

export interface CareerData {
    careerId: number;
    company: string;
    position: string;
    notDevlop: boolean;
    workNow: boolean | number;
    startDate: string;
    endDate: string;
    reward: string;
}

export interface ProjectData {
    projectId: number;
    projectName: string;
    year: string;
    information: string;
    link1: string;
    link2: string;
    skills: string[];
}

export interface CarrerUpdate {
    startDate: string;
    endDate: string;
    company: string;
    position: string;
    reward: string;
}
