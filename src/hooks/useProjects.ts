import {  useLayoutEffect, useState } from "react";
import { IProjectType } from "../@types";
import { api } from "../services/api";

export const useProjects = () => {
  const [list, setList] = useState<IProjectType[]>([]);

  const getList = async () => {
    await api.get("/").then((data) => {
      setList(data.data.projects);
    });
  };
  useLayoutEffect(() => {
    getList();
  }, []);

  return {
    list,
  };
};
