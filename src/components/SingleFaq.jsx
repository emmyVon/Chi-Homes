import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const SingleFaq = ({ quest, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion">
      <div className="quest" onClick={() => setOpen((prev) => !prev)}>
        <h3>{quest}</h3>
        <AiOutlinePlus />
      </div>
      <p className={open ? "answer" : "hide"}>{answer}</p>
    </div>
  );
};

export default SingleFaq;
