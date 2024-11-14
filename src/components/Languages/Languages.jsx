import { useEffect, useState } from "react";
import Common from "./Language/Common";

export default function Languages() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/6735a91dacd3cb34a8a86000", {
      method: "GET",
      headers: {
        "X-Master-Key":
          "$2a$10$0met61hOAMjbpX4PxbvYj.rq2E9hXgfr7ZgPPruZy4M3co08gwmyG",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSkills(data.record);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      Languages I know Languages I know Languages I know Languages I know
      Languages I know Languages I know Languages I know Languages I know
      Languages I know Languages I know Languages I know Languages I know
      Languages I know Languages I know Languages I know Languages I know
      Languages I know Languages I know Languages I know Languages I know
      Languages I know Languages I know Languages I know Languages I know
      <div className="grid gap-y-2 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill, index) => {
          return (
            <Common
              key={index}
              language={skill.language}
              level={skill.level}
              greeting={skill.greetings}
            ></Common>
          );
        })}
      </div>
    </>
  );
}
