import { useLoaderData } from "react-router-dom";

export default function Sprints() {
  const data = useLoaderData();

  return (<>
    <p>Sprints will be here.</p>
    <pre>{JSON.stringify(data)}</pre>
  </>);
};
