import React, { useEffect } from "react";

function Users({ user, onDelete, onToggle }) {
//   useEffect(() => {
//     console.log("컴포넌트가 화면에 나타나기 전");
//     console.log(user);
//     return () => {
//       console.log("컴포넌트가 화면에 나타난 후");
//       console.log(user);
//     };
//   }, [user]);

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onDelete(user.id)}>Del</button>
    </div>
  );
}

function UserList({ users, onDelete, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <Users
          user={user}
          key={user.id}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
