import React, { useEffect, useState } from 'react';

import { getBlogs } from '../services/getBlogs.js';

export function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getBlogs();
      setBlogs(res);
    };
    fetchData();
  }, []);
  return blogs;
}
