import { useTina } from "tinacms/dist/react";
import Card from "./Card";
import type { PostQuery } from "../../.tina/__generated__/types";
import type { ReactNode } from "react";

export type VisualEditingContainerProps<T = PostQuery> = {
  data: PostQuery;
  variables: object;
  query: string;
  children: (content: T) => ReactNode;
};

export const MyComponent = (props: VisualEditingContainerProps) => {
  const { data } = useTina(props);

  return (
    <div className="py-20">
      <ul role="list" className="flex justify-between px-20 gap-4">
        {data?.post?.cards?.map((card, index) => {
          return (
            <Card
              link={card?.link}
              title={card?.title}
              body={card?.body}
              key={index}
              image={card.image}
            />
          );
        })}
      </ul>
    </div>
  );
};
