import React from "react";

const SinglePlans = ({ Title, level, ActivePlan }) => {
  const desiredLevel = level.find((i) => i.id === ActivePlan.Planlevel);
  return (
    <div className="singlePlans">
      <article className="early-birds">
        <h1>{Title}</h1>
        <h3>{desiredLevel.plan}</h3>
        <p>{desiredLevel.descri}</p>
        <button className="btn btn-black">Make Enquiry</button>
      </article>
      <img
        src={desiredLevel.image}
        style={{ maxHeight: "100%", width: "100%", borderRadius: "20px" }}
        alt={desiredLevel.plan}
      />
    </div>
  );
};

export default SinglePlans;
