export const removeDuplicates = (S) => {
  const result = S.replace(/(\w)\1/g, '');

  return result.length === S.length ? result : removeDuplicates(result);
};