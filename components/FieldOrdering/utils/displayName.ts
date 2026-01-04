export function DisplayName(name: string) {
  switch (name) {
    case "date":
      return "Data";
    case "time":
      return "Hora";
    case "oxy":
      return "Oxi";
    default:
      return name;
  }
}
