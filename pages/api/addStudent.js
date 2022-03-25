import { connectToDatabase } from "../../lib/mongodb"

export default async (req, res) => {

  try {
    const { db } = await connectToDatabase()

    let data = req.body
    if (!data) {
      res.status(404).send(false)
      return
    }

    db.collection('dd-214').insertOne({ ...data }, async function (error, response) {
      if (error) {
        res.status(404).send(false)
      } else {
        res.status(200).send(response.insertedId)
      }
    })
  } catch (error) {
    res.status(404).send(false)
  }
}
