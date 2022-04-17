import { useState, useEffect } from "react";

export default function RandomUser() {
  const [userInfo, setUserInfo] = useState("");
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`https://randomuser.me/api/`, {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data.results[0]);
        setIsLoading(false);
      });
    return () => abortController.abort();
  }, []);

  return (
    <div>
      {console.log({ userInfo })}
      {IsLoading ? (
        <span> Loading ...</span>
      ) : (
        <div style={{ textAlign: "center" }}>
          <img className="user-image" src={userInfo.picture.medium} />
          <div>
            {userInfo.name.first}
            {userInfo.phone}
          </div>
          <button onClick={()=>setUserInfo('')}> Delete </button>
        </div>
      )}
    </div>
  );
}
