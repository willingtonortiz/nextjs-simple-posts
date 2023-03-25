import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { FC } from "react";
import { getAllCustomers } from "../../lib/tasks";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tasks = await getAllCustomers();

  return {
    props: { tasks },
  };
};

type Props = { tasks: { id: string; title: string; content: string }[] };

const TasksPage: FC<Props> = ({ tasks }) => {
  const createTask = () => {};

  return (
    <>
      <Head>
        <title>Tasks</title>
      </Head>

      <h1>Tasks</h1>

      {tasks.map(({ id, title, content }) => (
        <div key={id}>
          <p>Id: {id}</p>
          <p>Title: {title}</p>
          <p>Content: {content}</p>
        </div>
      ))}

      <form onSubmit={createTask}>
        <label htmlFor="title">Title</label>
        <input name="title" type="text" placeholder="title" />

        <label htmlFor="content">Content</label>
        <input name="content" type="text" placeholder="content" />

        <button type="submit">Create Task</button>
      </form>
    </>
  );
};

export default TasksPage;
