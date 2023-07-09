import { useState } from "react";
import { PiTriangleFill, PiTriangleLight } from "react-icons/pi";
import { IoTriangleOutline, IoTriangle } from "react-icons/io5";
import { PiArrowFatUpBold, PiArrowFatUpFill } from "react-icons/pi";

import type { VoteButtonsProps } from "./vote-buttons.type";
import { IBM_Plex_Sans } from "next/font/google";

const plex_sans = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const VoteButtons = ({ voteCount, userVote }: VoteButtonsProps) => {
  const [vote] = useState(userVote || 0);
  return (
    <div className="flex items-center gap-1.5" style={{ marginTop: "1.5px" }}>
      {vote === 1 ? (
        <IoTriangle size={13} className="text-gray-800 cursor-pointer" />
      ) : (
        <IoTriangleOutline
          size={13}
          className="text-gray-600 cursor-pointer hover:text-gray-950"
        />
      )}
      <span className="text-xs font-semibold text-gray-900">
        {voteCount || 0}
      </span>
      {vote === -1 ? (
        <IoTriangle
          size={13}
          className="text-gray-900 cursor-pointer"
          style={{ transform: "rotate(180deg)" }}
        />
      ) : (
        <IoTriangleOutline
          size={13}
          className="text-gray-600 cursor-pointer hover:text-gray-950"
          style={{ transform: "rotate(180deg)" }}
        />
      )}
    </div>
  );
};
