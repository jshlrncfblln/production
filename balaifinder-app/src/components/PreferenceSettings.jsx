import React, { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import axios from "axios";
import { backendurl } from "../../backend-connector";

function PreferenceSettings({ onClose, onSubmit }) {
    const [locationData, setLocationData] = useState([]);
    const [typeData, setTypeData] = useState([]);
    const [priceData, setPriceData] = useState([]);
    const [nearMallData, setnearMallData] = useState([]);
    const [nearChurchData, setnearChurchData] = useState([]);
    const [nearSchoolData, setnearSchoolData] = useState([]);
    const [formData, setFormData] = useState({
        price: "",
        location: "",
        house_type: "",
        near_mall: "",
        near_school: "",
        near_church: "",
    });
    const [showResultsModal, setShowResultsModal] = useState(false);
    const [resultsData, setResultsData] = useState([]);

    const loadData = async () => {
        const [
            locationResponse,
            typeResponse,
            priceResponse,
            nearMallResponse,
            nearSchoolResponse,
            nearChurchResponse,
        ] = await Promise.all([
            axios.get(`${backendurl}/api/get/option/location`),
            axios.get(`${backendurl}/api/get/option/type`),
            axios.get(`${backendurl}/api/get/option/price`),
            axios.get(`${backendurl}/api/get/option/nearmall`),
            axios.get(`${backendurl}/api/get/option/nearchurch`),
            axios.get(`${backendurl}/api/get/option/nearschool`),
        ]);

        setLocationData(locationResponse.data);
        setTypeData(typeResponse.data);
        setPriceData(priceResponse.data);
        setnearMallData(nearMallResponse.data);
        setnearSchoolData(nearSchoolResponse.data);
        setnearChurchData(nearChurchResponse.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            const response = await axios.post(
                `${backendurl}/api/post/submitpreferences`,
                formData
            );
            setResultsData(response.data);
            setShowResultsModal(true);
            if (onSubmit) {
                onSubmit(response.data);
            }
        } catch (error) {
            console.log("Error submitting preferences:", error);
        }
    };

    const handleCloseResultsModal = () => {
        setShowResultsModal(false);
    };

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="bg-white p-6 rounded-md shadow-md relative">
                    <div>
                        <button
                            onClick={onClose}
                            className="px-2 py-2 shadow-md border absolute top-2 right-2"
                        >
                            <GrClose />
                        </button>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className=""
                        method="POST"
                        action="https://balaifinder-backend-deploy.onrender.com/api/post/submitpreferences"
                    >
                        <div className="text-center mb-4">
                            <h1 className="text-3xl font-semibold">
                                WAG GALAWIN WAG GLAWAIN MAY GINAGAWA AKO DITO WAG MAG SUBMIT
                            </h1>
                            <p className="text-gray-600 text-base">
                                Let us know what property you want.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-y-8 gap-x-24">
                            <div className="flex flex-col mb-4">
                                <label className="text-center uppercase">
                                    Price
                                </label>
                                <select
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="border-sky-500 border rounded-lg py-2"
                                >
                                    <option disabled hidden value="">
                                        Select Property Price
                                    </option>
                                    {priceData.map((item, index) => (
                                        <option key={index} value={item.price}>
                                            {item.price}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {/* Other select elements */}
                            <div className="flex flex-col mb-4">
                                <label className="text-center uppercase">
                                    Location
                                </label>
                                <select
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="border-sky-500 border-[3px] rounded-full"
                                >
                                    <option disabled hidden value="">
                                        Select
                                    </option>
                                    {locationData.map((item, index) => (
                                        <option
                                            key={index}
                                            value={item.location}
                                        >
                                            {item.location}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="text-center uppercase">
                                    Type of Property
                                </label>
                                <select
                                    name="house_type"
                                    value={formData.house_type}
                                    onChange={handleChange}
                                    className="border-sky-500 border-[3px] rounded-full"
                                >
                                    <option disabled hidden value="">
                                        Select House Type
                                    </option>
                                    {typeData.map((item, index) => (
                                        <option key={index} value={item.type}>
                                            {item.type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="text-center uppercase">
                                    Near a Mall?
                                </label>
                                <select
                                    name="near_mall"
                                    value={formData.near_mall}
                                    onChange={handleChange}
                                    className="border-sky-500 border-[3px] rounded-full"
                                >
                                    <option disabled hidden value="">
                                        Select
                                    </option>
                                    {nearMallData.map((item, index) => (
                                        <option
                                            key={index}
                                            value={item.isnearmall}
                                        >
                                            {item.isnearmall}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="text-center uppercase">
                                    Near a School?
                                </label>
                                <select
                                    name="near_school"
                                    value={formData.near_school}
                                    onChange={handleChange}
                                    className="border-sky-500 border-[3px] rounded-full"
                                >
                                    <option disabled hidden value="">
                                        Select
                                    </option>
                                    {nearSchoolData.map((item, index) => (
                                        <option
                                            key={index}
                                            value={item.isnearschool}
                                        >
                                            {item.isnearschool}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="text-center uppercase">
                                    Near a Church?
                                </label>
                                <select
                                    name="near_church"
                                    value={formData.near_church}
                                    onChange={handleChange}
                                    className="border-sky-500 border-[3px] rounded-full"
                                >
                                    <option disabled hidden value="">
                                        Select
                                    </option>
                                    {nearChurchData.map((item, index) => (
                                        <option
                                            key={index}
                                            value={item.isnearchurch}
                                        >
                                            {item.isnearchurch}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="mx-auto mt-8 block bg-blue-500 text-white font-bold py-2 px-4 rounded"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {showResultsModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-md shadow-md relative">
                        <button
                            onClick={handleCloseResultsModal}
                            className="px-2 py-2 shadow-md border absolute top-2 right-2"
                        >
                            <GrClose />
                        </button>
                        <h1 className="text-3xl font-semibold">Results</h1>
                        {/* Display results here */}
                        <ul>
                            {resultsData.map((result, index) => (
                                <li key={index}>{result}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}

export default PreferenceSettings;
