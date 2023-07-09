import { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlineMinusCircle,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsReplyFill } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible";
import { DefaultTimeSince } from "../../utils/TimeSince";

import { VoteButtons } from "../VoteButtons/vote-buttons";
import { ReplyProps } from "./reply.type";
import { IBM_Plex_Sans } from "next/font/google";
import { Button } from "../ui/button";

const plex_sans = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const Reply = ({
  replyText,
  children,
  avatarLink,
  username,
  dateTimePosted,
  voteCount,
}: ReplyProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const openThread = () => {
    setIsOpen(true);
  };

  const closeThread = () => {
    setIsOpen(false);
  };

  const dateTime = dateTimePosted; // Example date and time
  return (
    <Collapsible className="flex gap-3 p-2 max-w-prose" defaultOpen>
      {isOpen && (
        <div className="flex flex-col">
          <Avatar className="w-7 h-7 ">
            <AvatarImage src={avatarLink || "https://github.com/shadcn.png"} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div
            className="flex justify-center flex-1 w-full "
            onClick={closeThread}
          >
            <CollapsibleTrigger className="flex justify-center w-5 group">
              <div
                style={{ width: "1.5px" }}
                className="mt-3 bg-gray-300 group-hover:bg-gray-900"
              />
            </CollapsibleTrigger>
          </div>
        </div>
      )}
      <div>
        <div className={`flex items-center gap-3  ${plex_sans.className}`}>
          {!isOpen && (
            <>
              <CollapsibleTrigger>
                <AiOutlinePlus
                  className="text-gray-400 hover:text-gray-900"
                  size={18}
                  onClick={openThread}
                />
              </CollapsibleTrigger>
              <Avatar className="w-7 h-7 ">
                <AvatarImage
                  src={avatarLink || "https://github.com/shadcn.png"}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </>
          )}
          {/* {!isOpen ? (
            <CollapsibleTrigger>
              <AiOutlinePlus
                className="text-gray-400 hover:text-gray-900"
                size={18}
                onClick={openThread}
              />
            </CollapsibleTrigger>
          ) : (
            <CollapsibleTrigger>
              <BiMinus
                className="text-gray-400 hover:text-gray-900"
                size={18}
                onClick={closeThread}
              />
            </CollapsibleTrigger>
          )} */}
          {/* <Avatar className="w-7 h-7 ">
            <AvatarImage src={avatarLink || "https://github.com/shadcn.png"} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> */}
          <span className="pt-1 text-sm font-semibold text-gray-950">
            {username}
          </span>
          <span className="pt-1 text-sm font-light text-gray-500">
            <DefaultTimeSince dateTime={dateTime} />
          </span>
        </div>
        <CollapsibleContent className="mt-2 text-gray-800 ">
          <div className={plex_sans.className} style={{ fontSize: "15px" }}>
            {replyText}
            <div className="flex gap-2 ">
              <VoteButtons voteCount={voteCount} />
              <Button
                variant="ghost"
                size="sm"
                className="text-xs font-medium text-gray-700"
              >
                Reply
                <BsReplyFill size={14} className="my-auto ml-1" />
              </Button>
            </div>
          </div>
          <div className="pt-3"> {children}</div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};
