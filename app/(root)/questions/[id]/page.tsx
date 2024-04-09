import Metric from "@/components/shared/Metric";
import { getQuestionById } from "@/lib/actions/question.action";
import { formatBigNumber, getTimestamp } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params, searchParams }) => {
  const result = await getQuestionById({ questionId: params.id });
  return (
    <>
      <div className="flex-start w-full flex-col">
        <div>
          <Link
            href={`/profile/${result.author.clerkId}`}
            className="flex items-center justify-start gap-1"
          >
            <Image
              src={result.author.picture}
              className="rounded-full"
              alt="profile"
              width={22}
              height={22}
            />
          </Link>
          <div className="flex justify-end">voting</div>
        </div>
        <h2 className="h2-semibold text-dark200_light900 mt-3.5 w-full text-left">
          {result.title}
        </h2>
      </div>
      <div>
        <Metric
          imgUrl="/assets/icons/clock.svg"
          alt="clocl icon"
          value={` asked ${getTimestamp(result.createdAt)}`}
          title="Asked"
          textStyles="small-medium text-dark400_light700"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={formatBigNumber(result.answers.length)}
          title="Answers"
          textStyles="small-medium text-dark400_light700"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={formatBigNumber(result.views)}
          title="Views"
          textStyles="small-medium text-dark400_light700"
        />
      </div>
    </>
  );
};

export default Page;
