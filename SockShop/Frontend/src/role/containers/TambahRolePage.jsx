import { Button } from "@/commons/components";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import getAllowedPermissions from "../services/getAllowedPermissions";

import FormTambahkanRole from "../components/FormTambahkanRole";

const TambahRolePage = (props) => {
  const [allowedPermissions, setAllowedPermissions] = useState();

  useEffect(() => {
    const fetch = async () => {
      const { data: allowedPermissionsResponse } =
        await getAllowedPermissions();

      setAllowedPermissions(allowedPermissionsResponse.data);
    };
    fetch();
  }, []);

  return allowedPermissions ? (
    <div>
      <Link to={`/settings/role`}>
        <Button className="absolute z-10 top-24 left-8" variant="secondary">
          Kembali
        </Button>
      </Link>

      <FormTambahkanRole {...{ allowedPermissions }} {...props} />
    </div>
  ) : (
    <></>
  );
};

export default TambahRolePage;
