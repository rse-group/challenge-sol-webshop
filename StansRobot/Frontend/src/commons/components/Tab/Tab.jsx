import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router";
import { sizes } from "./variant";

const Tab = ({ tabs, id, size = "md" }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || tabs[0].id;
  const setActiveTab = (id) => setSearchParams({ tab: id });

  return (
    <div role="tablist" className={`tabs tabs-lifted ${sizes[size]}`}>
      {tabs.map((tab) => (
        <>
          <input
            key={tab.id}
            role="tab"
            type="radio"
            name={`tab-${id}`}
            aria-label={tab.name}
            checked={tab.id === activeTab}
            onChange={() => setActiveTab(tab.id)}
            className={`tab ${tab.id === activeTab ? "tab-active" : ""} no-underline`}
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            {tab.children}
          </div>
        </>
      ))}
    </div>
  );
};

Tab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      children: PropTypes.node,
    }),
  ),
  id: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)),
};

export default Tab;
