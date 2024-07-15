"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useSetSearchParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const params = new URLSearchParams(searchParams);

  const setSearchParams = (queryName, value) => {
    if (value) {
      if (searchParams.get("page")) {
        params.delete("page");
      }
      params.set(queryName, value);
    } else {
      params.delete(queryName);
    }

    push(`${pathname}?${params.toString()}`);
  };

  return { searchParams, setSearchParams, params };
};

export { useSetSearchParams };
