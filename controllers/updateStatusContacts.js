import { updateStatusContact } from '#services/index.js'

export async function updateStatusContacts(req, res) {
  const { id } = req.params;
  const body = req.body;

  try {
    if (Object.keys(body).length === 0) {
      return res.status(400).json({ message: "missing field favorite" });
    }

    const data = await updateStatusContact(id, body);
    res.status(200).json({ ...data["_doc"], ...body });
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
}
