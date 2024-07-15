"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useSetSearchParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const setSearchParams = (queryName, value) => {
    if (value) {
      params.set(queryName, value);
    } else {
      params.delete(queryName);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return { searchParams, setSearchParams, searchParams };
};

export { useSetSearchParams };
