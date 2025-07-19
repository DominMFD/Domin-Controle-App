export interface Exam {
  id: number;
  date: Date;
  hematocrito?: number;
  rni?: number;
  marevan: string;
}

export type AddExam = Omit<Exam, "id">;
