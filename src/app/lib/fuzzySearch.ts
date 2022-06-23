const fuzzysearch = (
  needleIn: string,
  haystackIn: string,
  caseSentive = false,
): boolean => {
  const needle = caseSentive ? needleIn : needleIn.toLowerCase();
  const haystack = caseSentive ? haystackIn : haystackIn.toLowerCase();
  if (needle.length > haystack.length) {
    return false;
  }
  if (needle.length === haystack.length) {
    return needle === haystack;
  }
  let charactersMatched = 0;
  for (let i = 0, j = 0; i < needle.length; i += 1) {
    const currentNeedleCharaterCode = needle.charCodeAt(i);
    while (j < haystack.length) {
      if (haystack.charCodeAt(j) === currentNeedleCharaterCode) {
        charactersMatched += 1;
        j += 1;
        break;
      }
      j += 1;
    }
  }
  if (charactersMatched < needle.length) {
    return false;
  }
  return true;
};

export default fuzzysearch;
