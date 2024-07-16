"use client"

import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, useMemo } from "react";
import { usePathname } from "next/navigation";

export interface QueryInput {
  onPathChanged: (path: string, params: ReadonlyURLSearchParams, modal: string | null) => void;
}

export interface QueryOutput {
  pathName: string;
  params: ReadonlyURLSearchParams;
  modal: string | null;
}

const useQuery = ({ onPathChanged }: QueryInput): QueryOutput => {

  const pathName = usePathname();
  const searchParams = useSearchParams();
  const modalRoute = searchParams.get("modal");

  useEffect(() => {

    onPathChanged(pathName, searchParams, modalRoute);

  }, [pathName, searchParams, modalRoute, onPathChanged]);

  return {
    pathName: pathName,
    params: searchParams,
    modal: modalRoute,
  }
};

export default useQuery;
