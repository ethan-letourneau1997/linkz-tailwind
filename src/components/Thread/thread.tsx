import type { ThreadProps } from "./thread.type";

export const Thread = ({ child }: ThreadProps) => {
  return (
    <div className="px-2 py-3 bg-white border rounded-md drop-shadow-sm max-w-fit">
      {child}
    </div>
  );
};
