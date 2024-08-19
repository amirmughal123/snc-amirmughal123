import { User } from "@/utils/common/person";
import "animate.css";
import classNames from "classnames";
import Image from "next/image";
import { FunctionComponent, PropsWithChildren } from "react";

type CardProps = { selectedUser: User | null };

export const Card: FunctionComponent<PropsWithChildren<CardProps>> = ({
  selectedUser,
}) => {
  if (!selectedUser) return;

  return (
    <div
      className={classNames(
        "w-80 pt-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 animate__animated animate__pulse",
      )}
    >
      <div className={classNames("flex flex-col items-center pb-10")}>
        <Image
          src={selectedUser.profilePictureUrl}
          alt="user profile image"
          width={150}
          height={150}
          className={classNames("mb-3")}
          style={{ borderRadius: "50%", height: "150px" }}
        />
        <h5
          className={classNames(
            "mb-1 text-xl font-medium text-gray-900 dark:text-white",
          )}
        >
          {selectedUser.name}
        </h5>
        <span
          className={classNames("text-sm text-gray-500 dark:text-gray-400")}
        >
          {selectedUser.title}
        </span>
        <div className={classNames("flex mt-4 md:mt-6")}>
          <button
            className={classNames(
              "inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            )}
          >
            Add friend
          </button>
          <button
            className={classNames(
              "py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
            )}
          >
            Message
          </button>
        </div>
      </div>
    </div>
  );
};
