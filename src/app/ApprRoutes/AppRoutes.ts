import React from "react";
import { HomeOutlined, InfoOutlined, Money } from "@mui/icons-material";

export enum AppRoutes {
  Home ='/' ,
  Converter='/converter',
  Rates ='/rates'
}

export interface NavItem {
  id:number;
  label:string;
  path: AppRoutes;
  icon?: React.ReactNode;
}

export const navItems:NavItem[] = [
  { id: 1, label:"Home" , path: AppRoutes.Home, icon: HomeOutlined},
  { id: 2, label:"Converter" , path: AppRoutes.Converter, icon: InfoOutlined},
  { id: 3, label:"Rates" , path: AppRoutes.Rates , icon: Money},
]
