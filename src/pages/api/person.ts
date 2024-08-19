import { Person } from "@/utils/common/person";
import { getPersonFromDB } from "@/utils/server/db";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getPerson: NextApiHandler = async (req, res) => {
  const person = req.query.person as Person;

  switch (person) {
    case Person.PersonA:
      await sleep(1000);
      break;
    case Person.PersonB:
      await sleep(3000);
      break;
    case Person.PersonC:
      return res
        .status(500)
        .json({ error: "Error: Request failed for Person C" });
    default:
      return res.status(404).json({ error: "Error: Person not found" });
  }

  const user = await getPersonFromDB(person);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(500).json({ error: "Error: Request failed" });
  }

  res.end();
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return getPerson(req, res);

    default:
      res.status(404).send({
        user: null,
      });
  }
};
export default handler;
