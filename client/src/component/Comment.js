import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from "./Navbar";
import { getComment } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
function Comment() {
  const dispatch = useDispatch();
  const commentState = useSelector((state) => state.commentReducers);
  console.log(commentState);

  const columns = [
    { field: "postId", headerName: "PostId", width: 150 },
    { field: "id", headerName: "Id", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "body", headerName: "Body", width: 650 },
  ];
  useEffect(() => {
    dispatch(getComment());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "7%",
        }}
      >
        <div style={{ height: "calc(100vh - 25vh)", width: "85%" }}>
          <DataGrid
            rows={commentState.comment}
            columns={columns}
            pageSize={10}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </>
  );
}

export default Comment;
