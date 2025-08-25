import { useSearch as tanstackUseSearch } from '@tanstack/react-router';

export const useUrlSearchParams = () => {
  // @ts-expect-error useSearch
  const raw = tanstackUseSearch({ strict: true });
  return new URLSearchParams(
    Object.entries(raw).filter(
      (entry): entry is [string, string] => entry[1] !== undefined,
    ),
  );
};
