import { useLoaderData, useParams } from "react-router-dom";

function UserDetails() {
  let { id } = useParams();
  const data2 = useLoaderData();
  return (
    <div>
      {" "}
      User Details {id} {data2}
    </div>
  );
}
export default UserDetails;
