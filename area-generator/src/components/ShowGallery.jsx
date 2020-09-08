import React from "react";

export default function ShowGallery(props) {
  const { Type, AssignedAttributes, Size } = props.preview.fields;
  const timestamp = props.preview.createdTime;

  console.log(props);

  return (
    <div>
      <h5>
        Area Style: <h6>{Type}</h6>
      </h5>
      <h5>
        Size of Area: <h6>{Size}</h6>
      </h5>
      <h5>
        Descriptive Keywords : <h6>{AssignedAttributes}</h6>
      </h5>
      <h5>Made :</h5>
      <h6>{timestamp}</h6>
      <br />
    </div>
  );
}
