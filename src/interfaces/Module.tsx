export interface Module {
  id: string;
  name: string;
  description: string;
  lessons: [
    {
      id: string;
      name: string;
      date: string;
      description: string;
    }
  ]
}
