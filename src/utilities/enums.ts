export function getEnumValues(enumeration: any) {
  return Object.values(enumeration).filter((item) => isNaN(Number(item)));
}