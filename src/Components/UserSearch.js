import { useContext } from "react";
import { UserContext } from "./DataContext";
import nameIcon from "./icon-name.jpg";

export function UserSearch() {
  const value = useContext(UserContext);

  return (
    <div>
      <h1 className="title">Find Git Hub User Fast</h1>
      <h3 className="title">Search people by name</h3>
      <section className="search-bar">
        <div className="name-container">
          <img className="name-icon" src={nameIcon} alt="name"></img>
          <p className="name-title">Name</p>
        </div>
        <input type="text" onChange={value.handleInput} />
      </section>
      {value.error && <p className="title">Something went wrong</p>}
      {value.isLoading ? <p className="title">Loading...</p> : ""}
    </div>
  );
}
