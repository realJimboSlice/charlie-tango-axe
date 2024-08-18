import { useState, useEffect, useRef } from "react";
import rules from "../../public/data/rules-filtered";

export default function LoadingSpin() {
  const [currentRuleIndex, setCurrentRuleIndex] = useState(0);
  const [completedRules, setCompletedRules] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (currentRuleIndex < rules.length) {
      const timer = setTimeout(() => {
        setCompletedRules((prev) => [
          ...prev,
          `${rules[currentRuleIndex].id}...Done!`,
        ]);
        setCurrentRuleIndex((prev) => prev + 1);

        // Scroll to the bottom
        if (bottomRef.current) {
          bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [currentRuleIndex]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-brand-beige-10">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Spinner */}
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-brand-turquoise-50"></div>

        {/* Animated List of Rule IDs */}
        <h2 className="text-grey-80 text-xl font-bold mb-4">
          Fetching Rule IDs...
        </h2>
        <div className="text-grey-80 max-h-64 overflow-y-auto">
          {/* <h2 className="text-xl font-bold mb-4">Fetching Rule IDs...</h2> */}
          <ul className="space-y-2">
            {completedRules.map((rule, index) => (
              <li key={index} className="font-medium">
                {rule}
              </li>
            ))}
            {/* Auto-scroll anchor */}
            <li ref={bottomRef}></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
