import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const RightSideBar = () => {
  const hotQuestions = [
    {
      _id: "1",
      title:
        "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    },
    {
      _id: "2",
      title: "Is it only me or the font is bolder than necessary?",
    },
    {
      _id: "3",
      title: "Can I get the course for free?",
    },
    {
      _id: "4",
      title: "Redux Toolkit Not Updating State as Expected",
    },
    {
      _id: "5",
      title: "Async/Await Function Not Handling Errors Properly",
    },
  ];

  const popularTags = [
    { _id: "1", name: "javascript", totalQuestions: 5 },
    { _id: "2", name: "react", totalQuestions: 5 },
    { _id: "3", name: "next", totalQuestions: 5 },
    { _id: "4", name: "vue", totalQuestions: 2 },
    { _id: "5", name: "redux", totalQuestions: 5 },
  ];

  return (
    <section
      className="background-light900_dark200 light-border sticky
  right-0 top-0 flex h-screen flex-col  overflow-auto
  border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden
  w-[350px] custom-scrollbar max-xl:hidden"
    >
      <div className="">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((questions) => (
            <Link
              href={`/questions/${questions._id}`}
              key={questions._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {questions.title}
              </p>
              <Image
                src={"/assets/icons/chevron-right.svg"}
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
