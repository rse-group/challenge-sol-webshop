import { Button } from "@/commons/components";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import getRole from "../services/getRole";
import getAllowedPermissions from "../services/getAllowedPermissions";

import FormUbahRole from "../components/FormUbahRole";

const UbahRolePage = (props) => {
  const { id } = useParams()

  const [role, setRole] = useState();
  const [allowedPermissions, setAllowedPermissions] = useState();

  useEffect(() => {
    const fetch = async () => {
      const { data: roleResponse } = await getRole({ id });
      const { data: allowedPermissionsResponse } =
        await getAllowedPermissions();

      setRole(roleResponse.data);
      setAllowedPermissions(allowedPermissionsResponse.data);
    };
    fetch();
  }, []);

  return role && allowedPermissions ? (
    <div>
      <Link to={`/settings/role/${id}`}>
        <Button className="absolute z-10 top-24 left-8" variant="secondary">
          Kembali
        </Button>
      </Link>

      <FormUbahRole {...{ role, allowedPermissions }} {...props} />
    </div>
  ) : (
    <></>
  );
};

export default UbahRolePage;
