import { useMemo } from "react";
import { useLoaderData } from "react-router-dom";

const oneWeek = 60*60*24*1000*7;

export default function Time() {
  const data = useLoaderData();

  const lastRow = useMemo(() => {
    if (!data || !Array.isArray(data)) return 2;
    const dateDiff = Date.now() - (new Date('09/24/2023')).getTime();
    const lastRow = Math.ceil(dateDiff/oneWeek);
    return Math.min(lastRow + 1, data.length);
  }, [data]);

  return (
    <table>
      <thead>
        <tr>
          {data[0].map((e, i) =>
            <th key={i}>{e}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {data && data.slice(1, lastRow).map((row, week) =>
          <tr key={week}>
            {row.map((cell, i) =>
              <td key={i}>{cell}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  );
};
