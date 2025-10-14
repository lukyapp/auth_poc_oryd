export const ObjectKeys = <T extends object>(object: T) => {
  return Object.keys(object) as (keyof typeof object)[];
};
