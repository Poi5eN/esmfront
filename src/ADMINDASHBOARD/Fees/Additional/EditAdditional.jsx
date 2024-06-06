import React, { useState, useEffect } from "react";
import InputForm from "../../../Dynamic/Form/InputForm";
import { toast } from "react-toastify";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const authToken = Cookies.get("token");

function EditAdditional() {
  const navigate = useNavigate();
  const { _id } = useParams();
  console.log(_id);
  const [formData, setFormData] = useState({
    name: "",
    feeType: "",
    amount: "",
  });

  const handleFieldChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleClose = () => {
    navigate("/admin/additional");
  };

  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "image") {
        formDataToSend.append(key, String(value));
      }
    });

    try {
      const response = await axios.put(
        `https://eshiksh-mitra-project.vercel.app/api/v1/adminRoute/updateFees/${_id}`,
        formDataToSend,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setFormData(response.data);
      navigate("/admin/additional");
      toast.success("Fees Updated successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while updating the Fees.");
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://eshiksh-mitra-project.vercel.app/api/v1/adminRoute/getAdditionalFees?_id=${_id}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((response) => {
        setFormData({ ...response.data[0] });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [_id]);

  const formFields = [
    {
      label: "Name",
      name: "name",
      type: "text",
      value: formData.name,
      required: true,
    },
    {
      label: "Fee Type",
      name: "feeType",
      type: "select",
      value: formData.feeType,
      required: true,
      selectOptions: [
        "Fee Type",
        "Monthly",
        "Quarterly",
        "Half Yearly",
        "Annually",
      ],
    },
    {
      label: "Amount",
      name: "amount",
      type: "number",
      value: formData.amount,
      required: true,
    },
  ];

  return (
    <div className="mt-12 w-[900px] mx-auto p-3">
      <InputForm fields={formFields} handleChange={handleFieldChange} />

      <div
        style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}
      >
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Update Fees
        </button>
        <button
          onClick={handleClose}
          className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditAdditional;
