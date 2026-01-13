import React from "react";
import { Button } from "./button";
import { FolderOpen } from "lucide-react";

type ShimmerButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    title: string,
    icon?: React.ReactNode,
}

const ShimmerButton = ({ onClick, title, icon }:ShimmerButtonProps) => {
  return (
    <Button 
      onClick={onClick}
      className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        {title}
        {icon ?? <FolderOpen className="mx-4" size={20}/>}
    </Button>
  );
};

export default ShimmerButton;
