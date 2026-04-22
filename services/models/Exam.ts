export interface Exam {
  id: string;
  date: Date;
  hematocrito?: number;
  rni?: number;
  marevan: string;
}

export type AddExam = Omit<Exam, "id">;
