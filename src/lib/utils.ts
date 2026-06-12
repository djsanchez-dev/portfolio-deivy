export function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
}

export function splitName(name: string) {
  const parts = name.split(' ')
  return {
    first: parts.slice(0, 2).join(' '),
    last: parts.slice(2).join(' '),
  }
}
