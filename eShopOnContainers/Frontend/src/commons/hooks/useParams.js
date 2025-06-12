import { useParams as usePathParams, useSearchParams } from "react-router";

export const useParams = () => {
  const routeParams = usePathParams();
  const [searchParams] = useSearchParams();

  const params = { ...routeParams };
  delete params["*"];

  searchParams.forEach((v, k) => {
    params[k] = v;
  });

  return params;
};
