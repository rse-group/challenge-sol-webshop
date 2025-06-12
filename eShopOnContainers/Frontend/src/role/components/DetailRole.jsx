import React, { useContext } from "react";
import { useNavigate, Link } from "react-router";

import { useAuth } from "@/commons/auth";
import { Button, Detail, VisualizationAttr, Modal } from "@/commons/components";

import deleteRole from "../services/deleteRole.js";

const DetailRole = ({ role }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const [showModalKonfirmasiHapusRole, setShowModalKonfirmasiHapusRole] =
    React.useState(false);

  const ubah = async () => {
    navigate("/settings/role/ubah?" + `id=${role.id}`);
  };

  const hapus = async () => {
    await deleteRole({
      id: role.id,
    });
    navigate("/settings/role");
  };

  return (
    <div className="card-body mx-auto w-full bg-white shadow-xl card not-prose">
      {/* Data Binding Role Data */}
      <div className="grid grid-cols-2">
        <VisualizationAttr label="Name" content={role?.name} />
        <VisualizationAttr
          label="Allowed Permissions"
          content={role?.allowedPermissions}
        />
      </div>
      <div className="card-actions justify-end">
        {/* View Element Event Role Element*/}
        {checkPermission("administrator") && (
          <Button variant="secondary" onClick={ubah}>
            Ubah
          </Button>
        )}
        {checkPermission("administrator") && (
          <Button
            variant="tertiary"
            onClick={() => setShowModalKonfirmasiHapusRole(true)}
          >
            Hapus
          </Button>
        )}
      </div>
      <Modal isShow={showModalKonfirmasiHapusRole}>
        <Link to="">
          <Button
            variant="tertiary"
            onClick={() => setShowModalKonfirmasiHapusRole(false)}
          >
            Batal
          </Button>
        </Link>
        <Button variant="danger" onClick={hapus}>
          Hapus
        </Button>
      </Modal>
    </div>
  );
};

export default DetailRole;
