export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Language {
    label: string;
    value: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    },
    languages: { data: Language[] };
    language: string;
    translations: string[]
};
