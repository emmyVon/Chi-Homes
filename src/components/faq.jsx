import SingleFaq from "./SingleFaq";

const Faq = () => {
  return (
    <div>
      <SingleFaq
        quest={"How do i get started"}
        answer={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,"
        }
      />
      <SingleFaq
        quest={"How is the Security on the property Purchase"}
        answer={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Animmolestiae nemo asperiores ad distinctio quos"
        }
      />
      <SingleFaq
        quest={"How do i become an Ambassodar for this organisation"}
        answer={
          "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,dignissimos aliquid optio perferendis beatae fuga!"
        }
      />
      <SingleFaq
        quest={"Do i set the Lease Price"}
        answer={
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam commodi ipsa neque vitae dignissimos facere quaerat quam, vel consequuntur!"
        }
      />
    </div>
  );
};

export default Faq;
