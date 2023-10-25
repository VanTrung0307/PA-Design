"use client"
import React, { createContext, useState } from 'react';

interface BlogContextProps {
  _id: number | null;
  setBlogId: (id: number) => void;
}

export const BlogContext = createContext<BlogContextProps>({
  _id: null,
  setBlogId: () => {},
});

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [blogId, setBlogId] = useState<number | null>(null);

  const setBlogIdHandler = (id: number) => {
    setBlogId(id);
  };

  return (
    <BlogContext.Provider value={{ _id: blogId, setBlogId: setBlogIdHandler }}>
      {children}
    </BlogContext.Provider>
  );
};