import React from "react";
import type { PostCards } from "../../.tina/__generated__/types";

export default function Card({ link, title, body, image }: PostCards) {
  return (
    <li className="flex p-[1px] bg-[#23262d] rounded-[7px]">
      <a href={link} className="text-white opacity-[0.8] p-[23px]">
        {image && <img src={image} alt={title || ""} />}
        <h2 className="text-h2 pt-2">{title}</h2>
        <p>{body}</p>
      </a>
    </li>
  );
}
