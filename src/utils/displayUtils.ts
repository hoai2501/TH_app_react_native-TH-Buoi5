const DISPLAY_NAME_ALIASES = new Set([
  'nguyễn anh tuấn',
  'tuấn',
  'anh tuấn',
]);

export function formatDisplayName(name: string): string {
  return DISPLAY_NAME_ALIASES.has(name.trim().toLocaleLowerCase('vi'))
    ? 'Hoai Tran'
    : name;
}
