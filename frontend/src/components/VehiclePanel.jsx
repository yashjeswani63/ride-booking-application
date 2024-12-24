import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="p-3 text-center absolute top-0 w-[93%]"
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <i className="text-2xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-2">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle("car");
        }}
        className="flex border-2 active:border-black bg-gray-100 rounded-xl w-full p-3 items-center justify-between mt-2"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png"
          alt="car"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberGo
            <span>
              <i className="ri-user-3-fill ml-2"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable, Compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹{props.fare.car}</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle("moto");
        }}
        className="flex border-2 active:border-black bg-gray-100 rounded-xl w-full p-3 items-center justify-between  mt-2"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt="bike"
        />
        <div className=" ml-2 w-1/2">
          <h4 className="font-medium text-base">
            Moto
            <span>
              <i className="ri-user-3-fill ml-2"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable, Motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹{props.fare.moto}</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle("auto");
        }}
        className="flex border-2 active:border-black bg-gray-100 rounded-xl w-full p-3 items-center justify-between  mt-2"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt="auto"
        />
        <div className=" ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberAuto
            <span>
              <i className="ri-user-3-fill ml-2"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable, auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹{props.fare.auto}</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
