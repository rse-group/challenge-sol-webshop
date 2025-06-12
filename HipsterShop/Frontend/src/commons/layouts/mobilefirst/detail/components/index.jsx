import React, { useState } from "react";
import { Button } from "@/commons/components";
import * as VisAttrMobileFirst from "@/commons/components/VisualizationAttrMobileFirst";
import { checkIsImage } from "@/commons/utils/checkIsImage";

const DetailComponentLayoutMobileFirst = ({
  item,
  itemsAttrs,
  itemsEvents,
  itemsModals,
}) => {
  const maxCharactersToShow = 500;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="prose max-w-md mx-auto">
      {itemsAttrs?.map(
        (va) =>
          checkIsImage(item[va.featureName]) && (
            <VisAttrMobileFirst.DetailMobileFirst
              label={va.label}
              content={item[va.featureName]}
            />
          ),
      )}
      {itemsAttrs?.map(
        (va) =>
          !va.label && (
            <div className="mt-4">
              <VisAttrMobileFirst.DetailMobileFirst
                label={va.label}
                content={item[va.featureName]}
                condition="title"
              />
            </div>
          ),
      )}
      <div className="flex flex-col grid grid-cols-2 mt-4">
        {itemsAttrs?.map(
          (va) =>
            va.label &&
            !checkIsImage(item[va.featureName]) &&
            !va.featureName.match("description") && (
              <VisAttrMobileFirst.DetailMobileFirst
                label={va.label}
                content={item[va.featureName]}
                condition={va.condition}
              />
            ),
        )}
      </div>
      {itemsAttrs?.map(
        (va) =>
          va.featureName.match("description") && (
            <>
              <VisAttrMobileFirst.DetailMobileFirst
                label={va.label}
                content={
                  showFullDescription
                    ? item[va.featureName]
                    : item[va.featureName]?.slice(0, maxCharactersToShow) +
                      (item[va.featureName]?.length > maxCharactersToShow
                        ? "..."
                        : "")
                }
              />
              {item[va.featureName]?.length > maxCharactersToShow && (
                <div className="flex justify-center">
                  <Button variant="secondary" onClick={toggleDescription}>
                    {showFullDescription ? "Sembunyikan" : "Selengkapnya"}
                  </Button>
                </div>
              )}
            </>
          ),
      )}
      <div className="card-actions justify-end mt-8 mr-4">
        {/* View Element Event [singularName /] Element*/}
        {itemsEvents?.map((event) => event)}
      </div>
      {itemsModals?.map((modal) => modal)}
    </div>
  );
};

export default DetailComponentLayoutMobileFirst;
