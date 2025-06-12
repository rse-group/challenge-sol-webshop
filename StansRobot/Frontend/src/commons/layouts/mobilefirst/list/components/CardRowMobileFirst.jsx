import React from "react";

import { ListItem } from "@/commons/components";
import { Link } from "react-router";
import { checkIsImage } from "@/commons/utils/checkIsImage";
import * as VisAttrMobileFirst from "@/commons/components/VisualizationAttrMobileFirst";

const CardRowMobileFirst = ({ item, itemsAttrs }) => {
  return (
    <ListItem>
      {/* Data Binding [singularName /] Card Element */}
      <div className="card-body flex-row">
        {itemsAttrs?.map((itemsAttr) =>
          checkIsImage(item[itemsAttr.featureName]) ? (
            <div className="flex-1">
              <VisAttrMobileFirst.ListMobileFirst
                label={itemsAttr.label}
                condition={itemsAttr.condition}
                content={item[itemsAttr.featureName]}
              />
            </div>
          ) : (
            <></>
          ),
        )}

        <div className="flex-1">
          {itemsAttrs?.map((itemsAttr) =>
            !checkIsImage(item[itemsAttr.featureName]) &&
            itemsAttr.featureName !== "status" ? (
              <VisAttrMobileFirst.ListMobileFirst
                label={itemsAttr.label}
                condition={itemsAttr.condition}
                content={item[itemsAttr.featureName]}
              />
            ) : (
              <></>
            ),
          )}
        </div>
        {itemsAttrs?.map((itemsAttr) =>
          itemsAttr.featureName === "status" ? (
            <div className="flex-1">
              <VisAttrMobileFirst.ListMobileFirst
                label={itemsAttr.label}
                condition="isStatus"
                content={item[itemsAttr.featureName]}
              />
            </div>
          ) : (
            <></>
          ),
        )}
      </div>
    </ListItem>
  );
};

export default CardRowMobileFirst;
