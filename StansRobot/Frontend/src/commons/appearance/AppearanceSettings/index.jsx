import { COLOR_THEMES, INTERFACE_KITS } from "@/commons/constants/interface";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/commons/components";
import useAppearanceStore from "@/commons/appearance/store";
import Accordion from "./Accordion";
import Preview from "./Preview";
import environment from "@/commons/utils/environment";
import axios from "axios";

const AppearanceSettings = () => {
  const { interfaceKit, colorTheme, setAppearance } = useAppearanceStore();
  const { register, control, reset, handleSubmit } = useForm({
    defaultValues: { interfaceKit, colorTheme },
  });
  const [active, setActive] = useState("kit");
  const [isLoading, setIsLoading] = useState(false);

  const saveConfig = (data) => {
    setIsLoading(true);
    setAppearance(data);
    axios
      .post(`${environment.staticServerApi}/appearance`, data)
      .finally(() => setIsLoading(false));
  };

  const resetConfig = () => {
    setIsLoading(true);
    axios
      .get(`${environment.staticServerApi}/appearance`)
      .then((res) => reset({ ...res.data }))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <h1>Pengaturan Tampilan</h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        <form
          onSubmit={handleSubmit(saveConfig)}
          className="card w-full bg-base-100 shadow-lg p-4 gap-4"
        >
          <Accordion
            label="Tema Warna"
            name="colors"
            active={active}
            setActive={setActive}
          >
            {COLOR_THEMES.map((theme) => (
              <div key={theme} className="form-control">
                <label className="label cursor-pointer gap-6">
                  <div className="label-text flex-1 not-prose">
                    <span className="uppercase font-bold">{theme}</span>
                    <div className="w-full rounded-btn overflow-hidden border border-base-300">
                      <div
                        data-theme={theme}
                        className="w-full h-full grid grid-cols-4 grid-rows-2"
                      >
                        <div className="bg-base-200"></div>
                        <div className="bg-base-100 col-span-3 row-span-2 p-3 flex gap-1">
                          <div className="bg-neutral text-neutral-content rounded h-5 w-10"></div>
                          <div className="bg-primary text-primary-content rounded h-5 w-16"></div>
                          <div className="bg-secondary text-secondary-content rounded h-5 w-6"></div>
                          <div className="bg-accent text-accent-content rounded h-5 w-4"></div>
                        </div>
                        <div className="bg-base-300"></div>
                      </div>
                    </div>
                  </div>
                  <input
                    {...register("colorTheme")}
                    type="radio"
                    value={theme}
                    className="radio checked:bg-neutral"
                  />
                </label>
              </div>
            ))}
          </Accordion>
          <Accordion
            label="Gaya Tampilan"
            name="kit"
            active={active}
            setActive={setActive}
          >
            {Object.keys(INTERFACE_KITS).map((kit, index) => (
              <div key={kit} className="form-control">
                <label className="label cursor-pointer">
                  <div className="label-text uppercase font-bold">
                    <span className="badge mr-1">Gaya #{index + 1}</span> {kit}
                  </div>
                  <input
                    {...register("interfaceKit")}
                    type="radio"
                    value={kit}
                    className="radio checked:bg-neutral"
                  />
                </label>
              </div>
            ))}
          </Accordion>
          <div className="card-actions justify-end">
            <Button variant="tertiary" onClick={resetConfig}>
              Reset
            </Button>
            <Button
              variant="primary"
              className={`px-8 ${isLoading ? "loading" : null}`}
              type="submit"
            >
              {isLoading ? "Loading.." : "Simpan"}
            </Button>
          </div>
        </form>
        <div className="flex flex-col col-span-2">
          <h3 className="mt-0">Preview</h3>
          <Preview control={control} />
        </div>
      </div>
    </>
  );
};

export default AppearanceSettings;
