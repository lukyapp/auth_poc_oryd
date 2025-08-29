import { useNavigate } from '@tanstack/react-router';

type ReplaceOptions = {
  to?: string;
  query?: Record<string, string>;
};

export const useReplace = () => {
  const navigate = useNavigate();

  const replace = ({ to, query }: ReplaceOptions = {}) => {
    console.log(`Replace to ${to ?? 'current page'}`);
    // window.location.replace(to)
    return navigate({
      to,
      // @ts-expect-error search
      search: (old) => ({
        ...old,
        ...query,
      }),
      replace: true,
    });
  };

  return {
    replace,
  };
};
