import { Button } from "@/commons/components";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import getRoles from "../services/getRoles";
import getAllowedPermissions from "../services/getAllowedPermissions";

import FormTambahkanUser from "../components/FormTambahkanUser";

const TambahUserPage = (props) => {
  const [roles, setRoles] = useState();
  const [allowedPermissions, setAllowedPermissions] = useState();

  useEffect(() => {
    const fetch = async () => {
      const { data: rolesResponse } = await getRoles();
      const { data: allowedPermissionsResponse } =
        await getAllowedPermissions();

      setRoles(rolesResponse.data);
      setAllowedPermissions(allowedPermissionsResponse.data);
    };
    fetch();
  }, []);

  return roles && allowedPermissions ? (
    <div>
      <Link to={`/settings/user`}>
        <Button className="absolute z-10 top-24 left-8" variant="secondary">
          Kembali
        </Button>
      </Link>

      <FormTambahkanUser {...{ roles, allowedPermissions }} {...props} />
    </div>
  ) : (
    <></>
  );
};

export default TambahUserPage;
