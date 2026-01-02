export interface Oxygenation {
  id: number;
  date: Date;
  value?: number;
}

export type AddOxygenation = Omit<Oxygenation, "id">;
