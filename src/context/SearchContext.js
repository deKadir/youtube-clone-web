import { createContext, useState } from 'react';

const Context = createContext();

export default function SearchContext() {
  const [videos, setVideos] = useState();
  const values = {};
}
