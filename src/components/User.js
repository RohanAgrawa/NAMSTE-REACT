const User = (props) => {
  return (
    <div className="user-card">
      <h4>Name : {props.name}</h4>
      <h4>Location : {props.location}</h4>
      <h4>Mode : {props.mode}</h4>
    </div>
  );
};

export default User;
