import * as api from '@lp-labs/unicode-normalizer';
import { normalizeUnicode } from '@lp-labs/unicode-normalizer';
console.log(normalizeUnicode('e\u0301'));
// @ts-expect-error invalid argument must be rejected by declarations
api.normalizeUnicode('text', 'NFC-ish');
