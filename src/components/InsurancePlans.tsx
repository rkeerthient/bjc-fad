import { useState } from "react";

type PlansData = Record<string, string>;

const plans: PlansData = {
  Athena:
    "Advantra Option 1 HMO/POS (Aetna Medicare), Advantra Option 2 HMO (Aetna Medicare), Advantra PPO (Aetna Medicare), Advantra Silver HMO (Aetna Medicare), Aetna Affordable Health Choice PPO, Aetna Choice POS, Aetna Choice POS II, Aetna Coventry Medicare Gold Advantage, Aetna Elect Choice, Aetna for Better Health of Illinois- Illinois Medicaid-IDPA, Aetna Health Network, Aetna Health Network Option, Aetna HMO, Aetna Managed Choice (POS), Aetna Medicare HMO, Aetna Medicare Open Access HMO, Aetna Medicare Open Access POS, Aetna Medicare PPO, Aetna National Advantage Program (NAP), Aetna Open Access Elect Choice, Aetna Open Access HMO, Aetna Open Access Managed Choice, Aetna Open Choice (PPO), Aetna Quality Point of Service, Aetna Select, Aetna USAccess, Coventry Advantra Value PPO (Aetna Medicare), Freedom Plus PPO-Missouri (Aetna Medicare), Freedom PPO-Missouri (Aetna Medicare), Gold Advantage (Aetna Medicare), Gold Dual Core HMO Missouri (Aetna Medicare), Kansas Advantra Freedom PPO (Aetna Medicare), Mail Handlers-Aetna",
  "Blue Cross Blue Shield":
    "Anthem Blue Access Choice-Missouri BC/BS, Anthem MediBlue Dual Advantage (Medicare Advantage), Anthem MediBlue HMO (Medicare Advantage), Anthem MediBlue PPO (Medicare Advantage), Blue Cross Blue Shield Illinois, Blue Choice Preferred (IL Marketplace Exchange), Blue Cross Blue Shield of Illinois HMO (Blue Card Program), Blue Cross Blue Shield of Illinois PPO (Blue Card Program)",
  Cigna:
    "Cigna FlexCare, Cigna Healthcare EPO, Cigna Healthcare HMO, Cigna Healthcare HMO Open Access, Cigna Healthcare Network, Cigna Healthcare Network Open Access, Cigna Healthcare Network Open Access Plus, Cigna Healthcare POS, Cigna Healthcare POS Open Access, Cigna Healthcare PPO, Cigna Healthcare PPO Plus, Cigna LocalPlus (formerly SureFit), Cigna Network POS, Cigna Open Access Plus HMO, Cigna Open Access Plus POS, Cigna Preferred Medicare (HMO), Cigna Preferred Plus Medicare (HMO), Cigna Preferred Provider Access, Cigna Preferred Provider Access Plus, Cigna Signature, Cigna True Choice Medicare (PPO)",
  Humana:
    "Humana Choice PPO Medicare Advantage, Humana Gold Choice Medicare Advantage Plan, Humana Gold Plus HMO Medicare Advantage Plan, Humana POS Medicare Advantage, TriCare East-Humana Military",
  "Other insurance carriers":
    "BJC Center of Excellence - Consociate Health, BJC HealthSolutions, Care Management Resources (CMR), Coventry ASO, Coventry Healthcare of IL, Coventry Healthcare of Kansas, Coventry HMO, Coventry National Network PPO, Coventry One HMO, Coventry One PPO, Coventry One PPO Plus, Coventry POS, Coventry PPO, Essence Advantage HMO, Essence Advantage Plus HMO, First Health Network, Great West Healthcare HMO, Great West Healthcare POS, Great West Healthcare PPO, Great West Open Access, Health Alliance (IL Marketplace Exchange), Health Alliance HMO, Health Alliance Medicare HMO, Health Alliance Medicare POS, Health Alliance POS, Health Alliance PPO, HealthLink HMO, HealthLink Open Access, HealthLink POS, HealthLink PPO, HFN Inc, Illinois Department of Public Aid Illinois Medicaid-IDPA-HFS, Kansas Advantra Freedom PPO, Medicare, Meridian Health Plan of Illinois Medicaid-IDPA, Molina HealthChoice of Illinois Medicaid-IDPA, MultiPlan, Private Health Care Systems PPO (PHCS), TriCare West-Healthnet Federal Services-HFNS), Union Pacific Railroad Employee Health System",
};

const InsurancePlans = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>("Athena");

  return (
    <div className="flex  ">
      <div className="w-1/3 bg-white  overflow-y-auto">
        <ul>
          {Object.keys(plans).map((key, index) => (
            <li
              key={index}
              className={`text-2xl cursor-pointer px-4 py-2 ${
                selectedPlan === key ? "bg-gray-200" : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedPlan(key)}
            >
              {key}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-2/3 p-16 rounded-lg bg-gray-200 h-fit">
        <ul className="grid grid-cols-2 gap-4">
          {selectedPlan &&
            plans[selectedPlan].split(", ").map((item, index) => (
              <li key={index} className="text-xl">
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default InsurancePlans;
