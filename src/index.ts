export type NormalizationForm = 'NFC' | 'NFD' | 'NFKC' | 'NFKD';
export function normalizeUnicode(value: string, form: NormalizationForm = 'NFC'): string {
  if (typeof value !== 'string') throw new TypeError('Expected text');
  if (!['NFC', 'NFD', 'NFKC', 'NFKD'].includes(form))
    throw new RangeError('Unsupported normalization form');
  return value.normalize(form);
}
