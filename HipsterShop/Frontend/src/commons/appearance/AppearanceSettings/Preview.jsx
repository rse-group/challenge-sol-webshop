import { INTERFACE_KITS } from "@/commons/constants/interface";
import React from "react";
import PropTypes from "prop-types";
import { useWatch } from "react-hook-form";
import {
  Button,
  InputField,
  SelectionField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  VisualizationAttr,
} from "@/commons/components";
import { FONT_CLASSNAMES } from "@/commons/components/Typography/variants";

const Preview = ({ control }) => {
  const { colorTheme: themeName, interfaceKit: kitName } = useWatch({
    control,
  });

  const kit = INTERFACE_KITS[kitName];
  const typographyStyle = kit?.typography ?? "sans";
  const typography = FONT_CLASSNAMES[typographyStyle];
  const isRounded = kit.rounded;

  const tableHeads = ["No", "Nama", "Jumlah"];
  const tableRows = ["Andromeda", "Cassiopeia", "Pegasus", "Centaurus"];

  return (
    <div
      data-theme={themeName}
      className={`card p-4 border border-gray-500 w-full bg-base-200 grid grid-cols-1 md:grid-cols-2 grid-rows-auto md:grid-rows-2 gap-4 ${typography} ${
        isRounded ? "rounded-true" : "rounded-false"
      }`}
    >
      <div className="card prose">
        <div className="card-body">
          <h1 className="m-0">Selamat Datang!</h1>
          <p>
            <b>Lorem ipsum dolor sit amet</b> consectetur adipisicing elit.
            Quasi delectus deleniti sequi ea ratione vero?
          </p>
          <div className="card-actions">
            <Button kit={kit} variant="secondary">
              Secondary
            </Button>
            <Button kit={kit} variant="primary">
              Primary
            </Button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 row-span-2">
        <div className="card-body not-prose">
          <InputField kit={kit} label="Text Field" placeholder="Placeholder" />
          <SelectionField
            label="Selection Field"
            options={[
              { id: "Option 1", name: "Option 1" },
              { id: "Option 2", name: "Option 2" },
            ]}
            placeholder="Selection Field"
            isRequired={false}
          />
          <Button kit={kit} variant="primary" className="form-control mt-1">
            Button
          </Button>
          <div className="divider"></div>
          <Table kit={kit} compact>
            <TableHead>
              <TableRow>
                {tableHeads.map((th) => (
                  <TableCell isHeading key={th}>
                    {th}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((tr, idx) => (
                <TableRow key={tr}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{tr}</TableCell>
                  <TableCell isCurrency>
                    {Math.floor(Math.random() * 100000)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="card-actions justify-end">
            <Button kit={kit} variant="tertiary">
              Tertiary
            </Button>
            <Button kit={kit}>Neutral</Button>
          </div>
        </div>
      </div>
      <div className="card card-side compact bg-base-100">
        <div className="card-body">
          <VisualizationAttr label="Nama" content="RSE Laboratory" />
          <VisualizationAttr
            label="Lokasi"
            content="Fakultas Ilmu Komputer Universitas Indonesia"
          />
          <VisualizationAttr
            label="Keterangan"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. At atque quis deserunt rem magnam."
          />
          <div className="card-actions justify-end">
            <Button kit={kit} variant="tertiary">
              Detail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

Preview.propTypes = {
  control: PropTypes.object.isRequired,
};

export default Preview;
