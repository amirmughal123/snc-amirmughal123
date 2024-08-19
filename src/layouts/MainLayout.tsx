import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Skeleton } from "@/components/Skeleton";
import { Timer } from "@/components/Timer";
import useCurrentTime from "@/hooks/CurrentTime";
import { Person, User } from "@/utils/common/person";
import { useAppContext } from "@/utils/contexts/context";
import classNames from "classnames";
import { Inter } from "next/font/google";
import {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {
  const [selectedPerson, setSelectedPerson] = useState<string | null>();
  const [selectedUser, setSelectedUser] = useState<User | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showLogs, setShowLogs] = useState<boolean>(false);
  const { enableLogs } = useAppContext();
  const currentTime = useCurrentTime();

  useEffect(() => {
    if (enableLogs && showLogs) {
      console.log("Current Time: ", currentTime);
      if (selectedUser) console.log("Selected User: ", selectedUser);

      setShowLogs(false);
    }
  }, [selectedUser, currentTime, enableLogs, showLogs]);

  const handleClick = useCallback(async (person: Person) => {
    setSelectedPerson(person);

    try {
      setLoading(true);
      setError(null);

      // send API call for user profile
      const response = await fetch(`api/person?person=${person}`);
      const data = await response.json();

      if (response.status === 200) {
        setSelectedUser(data);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      setSelectedUser(null);
    } finally {
      setShowLogs(true);
      setLoading(false);
    }
  }, []);

  const errorUI = (
    <div
      className={classNames(
        "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",
      )}
      role="alert"
    >
      {error}
    </div>
  );

  const buttonsUI = (
    <div className={classNames("flex gap-2 mb-10")}>
      {Object.values(Person).map((person) => (
        <Button
          isDisabled={loading}
          isActive={selectedPerson === person}
          onClick={() => handleClick(person)}
          key={person}
        >
          {person}
        </Button>
      ))}
      <button />
    </div>
  );

  return (
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen",
        "flex flex-col justify-center items-center",
      )}
    >
      {/* timer component */}
      <Timer currentTime={currentTime} />

      {/* button list  */}
      {buttonsUI}

      {/* show loading skeleton */}
      {loading && <Skeleton />}

      {/* show selected user profile */}
      {!loading && selectedUser && !error && (
        <Card selectedUser={selectedUser} />
      )}

      {/* show user profile not found alert */}
      {!loading && !selectedUser && error && errorUI}
    </main>
  );
};
