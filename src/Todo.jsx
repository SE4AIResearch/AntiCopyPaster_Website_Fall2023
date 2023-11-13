import { useLoaderData } from "react-router-dom";

export default function Todo() {
  const data = useLoaderData();

  return (<>
    <h1>Future TODOs</h1>
    <p>
      These tasks haven't been scheduled for implementation yet,
      but are important nonetheless. 
    </p>
    {Object.keys(data).map(category =>
      <div className="bubble" key={category}>
        <h1>{category}</h1>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {data[category].map(({ task, details }) =>
              <tr>
                <td>{task}</td>
                <td>{details}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )}
  </>);
};
