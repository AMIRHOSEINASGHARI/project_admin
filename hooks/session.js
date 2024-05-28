"use client";

// react query
import { useQuery } from "@tanstack/react-query";
// services
import { fetchSession } from "@/services/queries";

const useSession = () => {
  const { data, isLoading, isError, Error } = useQuery({
    queryKey: ["session"],
    queryFn: fetchSession,
    retry: 1,
    staleTime: 1 * 60 * 60,
    cacheTime: 1 * 60 * 60,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isLoading,
    isError,
    Error,
  };
};

export default useSession;
