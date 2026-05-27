export function categoryMapper(category: string | null) {
  switch (category) {
    case "pivo":
      return "PIVO";
    case "drinky":
      return "DRINKY";
    case "panaky":
      return "PANÁKY";
    case "jidlo":
      return "JÍDLO";
    default:
      return "N/A";
  }
}
