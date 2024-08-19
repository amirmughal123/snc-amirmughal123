import classNames from "classnames";

export const Skeleton: React.FC = () => {
  return (
    <div className={classNames("flex flex-col animate-pulse")}>
      <div
        className={classNames(
          "mb-2 flex flex-shrink-0 justify-center items-center",
        )}
      >
        <span className={classNames("bg-gray-300 rounded-full w-20 h-20")} />
      </div>
      <div
        className={classNames(
          "flex justify-center items-center flex-col mt-2 w-full",
        )}
      >
        <h3 className={classNames("h-3 bg-gray-300 rounded-full w-40 mb-4")} />
        <p
          className={classNames(
            "h-2 bg-gray-300 rounded-full w-[260px] mb-2.5",
          )}
        />
        <p
          className={classNames(
            "h-2 bg-gray-300 rounded-full w-[260px] mb-2.5",
          )}
        />
        <p
          className={classNames(
            "h-2 bg-gray-300 rounded-full w-[260px] mb-2.5",
          )}
        />
      </div>
    </div>
  );
};
