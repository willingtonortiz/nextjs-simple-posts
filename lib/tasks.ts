import faunadb, { query as q } from "faunadb";

const API_KEY = "fnAEhRv4pUACT_blnuTzwX_JdFdmEELaU721kmDe";

const adminClient = new faunadb.Client({ secret: API_KEY });

export const getAllCustomers = async () => {
  try {
    const result: any = await adminClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index("all_tasks"))),
        q.Lambda("X", q.Get(q.Var("X")))
      )
    );

    const tasks = result.data.map((task: any) => {
      return {
        id: task.ref.id,
        ...task.data,
      };
    });

    return tasks;
  } catch (error) {
    return [];
  }
};

export const createTask = async () => {
  try {
  } catch (error) {}
};

// Map(Paginate(Match(Index("all_customers"))), Lambda("X", Get(Var("X"))))
