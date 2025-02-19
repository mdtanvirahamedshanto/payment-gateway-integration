import { useState } from "react";
import { countries, regions, cities } from "../data/Data.js";
import { globalStyles } from "../GlobalStyles.js";
import { Select } from "../components/shared/Select.jsx";

const CheckoutPage = () => {
  const [selectedPayment, setSelectedPayment] = useState("sslcommerz");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    region: "",
    city: "",
    zip: "",
    phoneNumber: "",
    email: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="grid p-2 lg:px-20 bg-gray-50 gap-8 grid-cols-1 md:grid-cols-3 w-full">
      {/* Billing and Payment Form */}
      <div className="md:col-span-2 space-y-8 w-full">
        {/* Billing Information */}
        <div className="w-full">
          <h2 className="text-[1.5rem] font-medium text-gray-700 mb-6">
            Billing Information
          </h2>

          <div className="grid grid-cols-1 gap-[16px]">
            <div className="flex  flex-col md:flex-row items-center gap-4">
              <div className="w-full md:w-[50%]">
                <label
                  htmlFor="firstName"
                  className={`${globalStyles.labelStyles}`}
                >
                  First name
                </label>
                <input
                  placeholder="First name"
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleFormChange}
                  className={`${globalStyles.inputStyles}`}
                />
              </div>
              <div className="w-full md:w-[50%]">
                <label
                  htmlFor="lastName"
                  className={`${globalStyles.labelStyles}`}
                >
                  Last name
                </label>
                <input
                  placeholder="Last name"
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleFormChange}
                  className={`${globalStyles.inputStyles}`}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="address"
                className={`${globalStyles.labelStyles}`}
              >
                Address
              </label>
              <input
                placeholder="Address"
                type="text"
                id="address"
                value={formData.address}
                onChange={handleFormChange}
                className={`${globalStyles.inputStyles}`}
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <div className="w-full md:w-[50%]">
                <label
                  htmlFor="country"
                  className={`${globalStyles.labelStyles}`}
                >
                  Country
                </label>
                <Select
                  name="country"
                  value={formData.country}
                  onChange={handleFormChange}
                  items={countries}
                />
              </div>
              <div className="w-full md:w-[50%]">
                <label
                  htmlFor="state"
                  className={`${globalStyles.labelStyles}`}
                >
                  Region/State
                </label>
                <Select
                  name="region"
                  value={formData.region}
                  onChange={handleFormChange}
                  items={regions}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <div className="w-full md:w-[50%]">
                <label htmlFor="city" className={`${globalStyles.labelStyles}`}>
                  City
                </label>
                <Select
                  name="city"
                  value={formData.city}
                  onChange={handleFormChange}
                  items={cities}
                />
              </div>
              <div className="w-full md:w-[50%]">
                <label
                  htmlFor="zipCode"
                  className={`${globalStyles.labelStyles}`}
                >
                  Zip Code
                </label>
                <input
                  placeholder="Zip code"
                  type="text"
                  id="zipCode"
                  value={formData.zip}
                  onChange={handleFormChange}
                  className={`${globalStyles.inputStyles}`}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <div className="w-full md:w-[50%]">
                <label
                  htmlFor="email"
                  className={`${globalStyles.labelStyles}`}
                >
                  Email
                </label>
                <input
                  placeholder="Email address"
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className={`${globalStyles.inputStyles}`}
                />
              </div>
              <div className="w-full md:w-[50%]">
                <label
                  htmlFor="phone"
                  className={`${globalStyles.labelStyles}`}
                >
                  Phone Number
                </label>
                <input
                  placeholder="Phone number"
                  type="tel"
                  id="phone"
                  value={formData.phoneNumber}
                  onChange={handleFormChange}
                  className={`${globalStyles.inputStyles}`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="border border-gray-200 rounded-md">
          <h2 className="text-[1.2rem] font-medium text-gray-700 border-b border-gray-200 px-5 py-3">
            Payment Option
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full p-5">
            <button
              onClick={() => setSelectedPayment("cash")}
              className={`flex flex-col items-center justify-center p-4 border rounded-lg ${
                selectedPayment === "cash"
                  ? "border-[#0FABCA]"
                  : "border-gray-200"
              }`}
            >
              <span className="text-2xl">💵</span>
              <span className="text-[0.9rem] text-gray-700 font-[500] mt-2">
                Cash on Delivery
              </span>
            </button>
            <button
              onClick={() => setSelectedPayment("sslcommerz")}
              className={`flex flex-col items-center justify-center p-4 border rounded-lg ${
                selectedPayment === "sslcommerz"
                  ? "border-[#0FABCA]"
                  : "border-gray-200"
              }`}
            >
              <span className="text-2xl">💰</span>
              <span className="text-[0.9rem] text-gray-700 font-[500] mt-2">
                SSl Commerz
              </span>
            </button>

            <button
              onClick={() => setSelectedPayment("aamarpay")}
              className={`flex flex-col items-center justify-center p-4 border rounded-lg ${
                selectedPayment === "aamarpay"
                  ? "border-[#0FABCA]"
                  : "border-gray-200"
              }`}
            >
              <span className="text-2xl">💰</span>
              <span className="text-[0.9rem] text-gray-700 font-[500] mt-2">
                Aamarpay
              </span>
            </button>

            <button
              onClick={() => setSelectedPayment("uddoktapay")}
              className={`flex flex-col items-center justify-center p-4 border rounded-lg ${
                selectedPayment === "uddoktapay"
                  ? "border-[#0FABCA]"
                  : "border-gray-200"
              }`}
            >
              <span className="text-2xl">💰</span>
              <span className="text-[0.9rem] text-gray-700 font-[500] mt-2">
                Uddoktapay
              </span>
            </button>

            <button
              onClick={() => setSelectedPayment("shurjopay")}
              className={`flex flex-col items-center justify-center p-4 border rounded-lg ${
                selectedPayment === "shurjopay"
                  ? "border-[#0FABCA]"
                  : "border-gray-200"
              }`}
            >
              <span className="text-2xl">💰</span>
              <span className="text-[0.9rem] text-gray-700 font-[500] mt-2">
                Shurjopay
              </span>
            </button>
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <h2 className="text-[1.2rem] font-medium text-gray-700 mb-4">
            Additional Information
          </h2>
          <div>
            <label htmlFor="notes" className={`${globalStyles.labelStyles}`}>
              Order Notes (Optional)
            </label>
            <textarea
              id="notes"
              rows={4}
              placeholder="Notes about your order e.g. special notes for delivery"
              className={`${globalStyles.inputStyles} py-3`}
            />
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="w-full">
        <div className="bg-white rounded-md border border-gray-200 p-6">
          <h2 className="text-[1.2rem] font-medium text-gray-700 mb-6">
            Order Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  src="https://i.ibb.co.com/F0bn52F/Image-25.png"
                  alt="product/image"
                  className="w-[50px] h-[50px] object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 line-clamp-1">
                  Wired Over-Ear Gaming Headphones with U
                </p>
                <div className="flex items-center gap-[5px] mt-0.5">
                  <p className="text-sm text-gray-500">1 x </p>
                  <p className="text-sm text-[#0FABCA] font-[600]">$100</p>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Sub-total</span>
                <span className="font-medium text-gray-800">$670</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium text-green-500">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Discount</span>
                <span className="font-medium text-gray-800">$20</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium text-gray-800">$650</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <span className="text-base font-medium text-gray-800">
                  Total
                </span>
                <span className="text-base font-medium text-gray-800">
                  $357.99 USD
                </span>
              </div>
            </div>

            <button className="w-full bg-[#0FABCA] text-white py-3 px-4 rounded-lg hover:bg-[#0FABCA]/90 transition-colors">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
