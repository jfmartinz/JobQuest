export interface Job {
  id: number;
  title: string;
  organization: string;
  degree: string;
  jobType: string;
  location: string[];
  minimumQualificatons: string[];
  preferredQualifications: string[];
  description: string[];
  dateAdded: string;
}
