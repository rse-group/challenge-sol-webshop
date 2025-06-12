import React from "react";
import { VisualizationAttr } from "@/commons/components";
import PropTypes from "prop-types";

const DetailComponentLayout = ({
  item,
  itemsAttrs,
  itemsEvents,
  itemsModals,
}) => {
  return (
    <div className="card card-body mx-auto w-full bg-white shadow-xl not-prose p-4 sm:p-8">
      {itemsAttrs?.map(
        (va) =>
          va.label.match("Gambar") && (
            <VisualizationAttr
              label={va.label}
              content={item[va.featureName]}
              key={`${va.label}-${item[va.featureName]}`}
            />
          )
      )}
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-x-4">
        {itemsAttrs?.map(
          (va) =>
            !va.label.match("Gambar") &&
            !va.label.match("Deskripsi") && (
              <VisualizationAttr
                label={va.label}
                content={item[va.featureName]}
                key={`${va.label}-${item[va.featureName]}`}
              />
            )
        )}
      </div>
      {itemsAttrs?.map(
        (va) =>
          va.label.match("Deskripsi") && (
            <VisualizationAttr
              label={va.label}
              content={item[va.featureName]}
              key={`${va.label}-${item[va.featureName]}`}
            />
          )
      )}
      <div className="card-actions justify-end">
        {/* View Element Event [singularName /] Element*/}
        {itemsEvents?.map((event) => event)}
      </div>
      {itemsModals?.map((modal) => modal)}
    </div>
  );
};

DetailComponentLayout.propTypes = {
  item: PropTypes.object.isRequired,
  itemsAttrs: PropTypes.array.isRequired,
  itemsEvents: PropTypes.array.isRequired,
  itemsModals: PropTypes.array.isRequired,
};

export default DetailComponentLayout;
