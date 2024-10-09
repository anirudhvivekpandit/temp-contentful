import { createClient } from "contentful";
import { useEffect, useState } from "react";

 const client = createClient({
  space: import.meta.env.VITE_SPACE_KEY,
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY
});

export const  useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      {
        const response = await client.getEntries({ content_type: `title` });
        const projects2 = response.items.map((item) => {
          const { title, url, img2 } = item.fields;
          const id = item.sys.id;
          const img = img2?.fields?.file?.url;
          return { title, url, img, id };
        });
        setProjects(projects2);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => getData, []);
  return { loading, projects };
};


