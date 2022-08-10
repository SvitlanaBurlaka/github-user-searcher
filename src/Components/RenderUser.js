import { useContext } from "react";
import { UserContext } from "./DataContext";

export function RenderUser() {
  const value = useContext(UserContext);
  console.log(value.users);
  return (
    <>
      <ul className="users-container">
        {value.users.length ? (
          value.users.map((user) => {
            return (
              <li className="user-card" key={user.id}>
                <img
                  className="user-avatar"
                  src={user.avatar_url}
                  alt="user-avatar"
                ></img>
                <p className="user-login"> {user.login}</p>
              </li>
            );
          })
        ) : (
          <p className="title">No users</p>
        )}
      </ul>
    </>
  );
}
