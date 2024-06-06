import React, { useState, useEffect } from "react";
import InputForm from "../../Dynamic/Form/InputForm";
import { toast } from "react-toastify";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
const authToken = Cookies.get('token');


function Edit_Stocks() {
  const navigate = useNavigate();
  const { _id } = useParams();
  console.log(_id)
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    quantity: "",
    price: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleFieldChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
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
        `https://eshiksh-mitra-project.vercel.app/api/v1/adminRoute/updateItem/${_id}`,
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
      navigate("/admin/stocks");
      toast.success("Item Updated successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while updating the item.");
    }
  };
  const handleclose = () => {
    navigate("/admin/stocks");
  }

  useEffect(() => {
    axios
      .get(`https://eshiksh-mitra-project.vercel.app/api/v1/adminRoute/getAllItems?_id=${_id}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        // Update the form data with the fetched item data
        console.log(response.data.listOfAllItems[0])
        setFormData({
          itemName: response.data.listOfAllItems[0].itemName,
          category: response.data.listOfAllItems[0].category,
          quantity: response.data.listOfAllItems[0].quantity,
          price: response.data.listOfAllItems[0].price,
        });
      })
      .catch((error) => {
        console.error("Error fetching item data:", error);
      });
  }, [_id]);

  const formFields = [
    {
      label: "Item Name",
      name: "itemName",
      type: "text",
      value: formData.itemName,
      required: true,
    },
    {
      label: "Category",
      name: "category",
      type: "text",
      value: formData.category,
      required: true,
    },
    {
      label: "Quantity",
      name: "quantity",
      type: "number",
      value: formData.quantity,
      required: true,
    },
    {
      label: "Price",
      name: "price",
      type: "number",
      value: formData.price,
      required: true,
    },

  ];

  return (
    <div className="mt-12 w-[900px] mx-auto p-3">

      <InputForm
        fields={formFields}
        handleChange={handleFieldChange}
      />
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Update Item
        </button>
        <button
          onClick={handleclose}
          className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Edit_Stocks;