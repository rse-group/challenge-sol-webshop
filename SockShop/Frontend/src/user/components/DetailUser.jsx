import React, { useContext } from "react";
import { useNavigate, Link } from "react-router";

import { useAuth } from "@/commons/auth";
import { Button, Detail, VisualizationAttr, Modal } from "@/commons/components";

import deleteUser from "../services/deleteUser.js";

const DetailUser = ({ user }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const [showModalKonfirmasiHapusUser, setShowModalKonfirmasiHapusUser] =
    React.useState(false);

  const ubah = async () => {
    navigate("/settings/user/ubah?" + `id=${user.id}`);
  };

  const pilihRole = async () => {
    navigate("/settings/user/change-role?" + `id=${user.id}`);
  };

  const hapus = async () => {
    await deleteUser({
      id: user.id,
    });
    navigate("/settings/user");
  };

  return (
    <div className="card-body mx-auto w-full bg-white shadow-xl card not-prose">
      {/* Data Binding User Data */}
      <div className="grid grid-cols-2">
        <VisualizationAttr label="Name" content={user?.name} />
        <VisualizationAttr label="Email" content={user?.email} />
        <VisualizationAttr label="Role" content={user?.userRolesName} />
      </div>
      <div className="card-actions justify-end">
        {/* View Element Event User Element*/}
        {checkPermission("administrator") && (
          <Button variant="secondary" onClick={ubah}>
            Ubah
          </Button>
        )}
        {checkPermission("administrator") && (
          <Button variant="secondary" onClick={pilihRole}>
            Pilih Role
          </Button>
        )}
        {checkPermission("administrator") && (
          <Button
            variant="tertiary"
            onClick={() => setShowModalKonfirmasiHapusUser(true)}
          >
            Hapus
          </Button>
        )}
      </div>
      <Modal isShow={showModalKonfirmasiHapusUser}>
        <Link to="">
          <Button
            variant="tertiary"
            onClick={() => setShowModalKonfirmasiHapusUser(false)}
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

export default DetailUser;
