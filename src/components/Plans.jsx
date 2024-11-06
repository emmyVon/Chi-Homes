import { useState } from "react";
import SinglePlans from "./SinglePlans";
import plans from "../Data";

const Plans = () => {
  const [ActivePlan, setActivePlan] = useState({
    plan: [plans[0]],
    Planlevel: 1,
  });
  const switcher = (e) => {
    let selectedbtn = e.target;
    if (e.target.tagName === "BUTTON") {
      const prevSelected = document.querySelector(".active");
      if (prevSelected) {
        prevSelected.classList.remove("active");
      }
      selectedbtn.classList.add("active");
    }
    const selectedplan = plans.find((i) => i.Title === selectedbtn.textContent);
    console.log(selectedplan);
    setActivePlan({ Planlevel: 1, plan: [selectedplan] });
    document.querySelector(".range").value = 1;
  };
  const levelSwitch = (e) => {
    const level = +e.currentTarget.value;
    console.log(level);
    setActivePlan({ ...ActivePlan, Planlevel: level });
  };
  return (
    <section>
      <div className="container plans">
        <h1>Plans</h1>
        <div>
          <h3>
            Wide Variety of Investment plans Available for your financial
            breakthrough
          </h3>
          <p>
            Select an investment Strategy and guide your investment according to
            your risk tolerance
          </p>
        </div>
        <div className="plans-btn">
          <div className="invest-btn" onClick={switcher}>
            <button className="active">Investment</button>
            <button>Purchase</button>
            <button>Lease</button>
          </div>
          <div className="slider">
            <div className="slide-mark">{ActivePlan.Planlevel}</div>
            <div>
              <label>Select risk Tolerance:</label>
              <input
                type="range"
                min={1}
                max={3}
                className="range"
                onChange={levelSwitch}
              />
            </div>
          </div>
        </div>

        <div className="plans-container">
          {ActivePlan.plan.map((i) => (
            <SinglePlans {...i} ActivePlan={ActivePlan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
