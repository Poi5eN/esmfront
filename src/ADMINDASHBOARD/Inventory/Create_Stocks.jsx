import React, { useState, useEffect } from "react";
import InputForm from "../../Dynamic/Form/InputForm";
import { toast } from "react-toastify";
import Modal from "react-modal";
import axios from "axios";
import StockTable from "./StockDataTable";
import { useStateContext } from "../../contexts/ContextProvider";
import Cookies from 'js-cookie';
const authToken = Cookies.get('token');

const modalStyle = {
  content: {
    width: "80%",
    margin: "0 auto",
    zIndex: 1000,
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    border: "none",
  },
};

function Create_Sales() {
  const { currentColor } = useStateContext();
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    quantity: "",
    price: "",
  });
  const [submittedData, setSubmittedData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldFetchData, setShouldFetchData] = useState(false);

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
    console.log(formDataToSend);

    try {
      // setLoading(true)
      const response = await axios.post(
        "https://eshiksh-mitra-project.vercel.app/api/v1/adminRoute/createItem",
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
      setSubmittedData([...submittedData, formData]);
      console.log(submittedData);
      setFormData({
        itemName: "",
        category: "",
        quantity: "",
        price: "",
      });
      // setLoading(false)
      toast.success("Form submitted successfully!");
      setShouldFetchData(!shouldFetchData);
      closeModal();
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  const handleDelete = (itemId) => {
    axios
      .delete(`https://eshiksh-mitra-project.vercel.app/api/v1/adminRoute/deleteItem/${itemId}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        console.log("Item deleted successfully");

        // Update the state to remove the deleted data from the data table
        const updatedData = submittedData.filter((item) => item._id !== itemId);
        setSubmittedData(updatedData);

        toast.success("Item deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting Item:", error);
        toast.error("An error occurred while deleting the Item.");
      });
  };

  const openModal = () => {
    console.log("clicked the ");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formFields = [
    {
      label: "Item Name",
      name: "itemName",
      type: "text",
      value: formData.itemName,
      required: true,
    },
    // {
    //   label: "Category",
    //   name: "category",
    //   type: "text",
    //   value: formData.category,
    //   required: true,
    // },
    {
      label: "Category",
      name: "category",
      type: "select",
      value: formData.category,
      required: true,
      selectOptions: [" Select Category", "Stationary", "Uniform", "Other"],
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

  useEffect(() => {
    // Fetch data from the server when the component mounts
    axios
      .get("https://eshiksh-mitra-project.vercel.app/api/v1/adminRoute/getAllItems", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${authToken}`,
        }, // Set withCredentials to true
      })
      .then((response) => {
        // console.log("Stocks", response.data.listOfAllItems);
        // if (Array.isArray(response.data.allEmployee)) {
        //   // Update the state with the array
        setSubmittedData(response.data.listOfAllItems);
        //   console.log(response.data.allEmployee);
        // } else {
        //   console.error("Data format is not as expected:", response.data);
        // }
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [shouldFetchData]);

  return (
    <div className=" mt-12 md:mt-1  mx-auto p-3 ">
    <h1 
     className="text-4xl font-bold mb-4 uppercase text-center  hover-text "
     style={{color:currentColor}}
    >All Stock </h1>
      <button
       className="dark:text-white dark:bg-secondary-dark-bg text-gray-800  neu-btn border-2 "
       style={{border:`2px solid ${currentColor} `,color:currentColor}}
      onClick={openModal}
     >
        Add Stock
      </button>

      {/* Modal */}
      {isModalOpen && <div className="modal-blur"></div>}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Create Form"
        style={modalStyle}
        overlayClassName="overlay"
      >
        <h1 
         className="text-xl font-bold mb-4 uppercase text-center  hover-text "
         style={{color:currentColor}}
        >
          Create Stock
        </h1>
        <InputForm
          fields={formFields}
          handleChange={handleFieldChange}
        // handleImageChange={handleImageChange}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "10px",
          }}
        >
          <button
            onClick={handleSubmit}
            className="dark:text-white dark:bg-secondary-dark-bg text-gray-800  neu-btn border-2 "
        style={{border:`2px solid ${currentColor} `,color:currentColor}}
          >
            Submit
          </button>
          <button
            onClick={closeModal}
            className="dark:text-white dark:bg-secondary-dark-bg text-red-800  ml-2 neu-btn border-2 "
        style={{border:`2px solid red `}}
          >
            Cancel
          </button>
        </div>
      </Modal>

      <StockTable data={submittedData} handleDelete={handleDelete} />
    </div>
  );
}

export default Create_Sales;
