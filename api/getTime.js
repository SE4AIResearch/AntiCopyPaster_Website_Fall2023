/**
 * Gets the time data from Google Sheets
 * @param req Incoming request
 * @param res Outgoing response
 */
export default async function handler(req, res) {
  const { SHEETS_KEY, TIME_SHEET } = process.env;
  try {
    const sheetRes = await fetch(`${TIME_SHEET}?key=${SHEETS_KEY}`);
    if (!sheetRes.ok) throw 'Error';
  
    const { values } = await sheetRes.json();
    if (!values) throw 'Error';
    return res.status(200).json(values);
  } catch (e) {
    return res.status(500).send('Internal Server Error');
  }
};
