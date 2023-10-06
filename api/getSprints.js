/**
 * Gets the sprints data from GitHub
 * @param req Incoming request
 * @param res Outgoing response
 */
export default async function handler(req, res) {
  const { SPRINTS_KEY, SPRINTS_URL } = process.env;
  try {
    const sprintsRes = await fetch(SPRINTS_URL, {
      headers: {
        'Accept': 'application/vnd.github+json',
        'Authorization': `Bearer ${SPRINTS_KEY}`,
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    if (!sprintsRes.ok) throw 'Error';
  
    const data = await sprintsRes.json();
    if (!data) throw 'Error';
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).send('Internal Server Error');
  }
};
