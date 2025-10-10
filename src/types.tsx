export interface Vacancy {
  id: string;
  name: string;
  salary: {
    from: number | null;
    to: number | null;
    currency: string;
  } | null;
  experience: {
    id: string;
    name: string;
  } | null;
  employer: {
    id: string;
    name: string;
    logo_urls?: {
      [key: string]: string;
    };
  } | null;
  address: {
    city?: string;
  } | null;
  alternate_url: string;
  work_format?: { id: "REMOTE" | "ON_SITE" | "HYBRID" | string }[];
}

export interface VacanciesResponse {
  items: Vacancy[];
  found: number;
  pages: number;
  per_page: number;
  page: number;
}
