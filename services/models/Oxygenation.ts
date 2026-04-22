export interface Oxygenation {
  id: string;
  date: Date;
  value?: number;
}

export type AddOxygenation = Omit<Oxygenation, "id">;
