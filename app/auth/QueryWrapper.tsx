"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

interface Props {
  children?: ReactNode;
}

const QueryWrapper = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    {children}
  </QueryClientProvider>
);

export default QueryWrapper;
