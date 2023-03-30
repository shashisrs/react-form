import React from "react";
import { useState ,useEffect} from "react";
function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    comments:false,
    candidates:false,
    offers:false,
    pushNotifications:"",

  });
  useEffect(()=>{
    alert("Fill the form  and click the save the button to see your details on your console window as an object.")

  },[])
  function changeHandler(event) {
    const { name, type, checked, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="flex justify-center mx-auto shadow-xl w-[500px] ">
      <form onSubmit={submitHandler} className="border-black ">
        <div className="flex flex-col">
          <label htmlFor="firstName" className="font-medium">First Name</label>
          <input
            type="text"
            placeholder="Aakash"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={changeHandler}
            className="border rounded-md border-blue-400 px-[2px] py-1 pl-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className="font-medium">Last Name</label>
          <input
            type="text"
            placeholder="Kumar"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={changeHandler}
            className="border rounded-md border-blue-400 px-[2px] py-1 pl-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium">Email Address</label>
          <input
            type="email"
            placeholder="aakash@gmail.com"
            name="email"
            id="email"
            value={formData.email}
            onChange={changeHandler}
            className="border rounded-md border-blue-400 px-[2px] py-1 pl-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="country" className="font-medium">Country</label>
          <select
            onChange={changeHandler}
            id="country"
            name="country"
            value={formData.country}
            className="border rounded-md border-blue-400 px-[2px] py-1 pl-2"
          >
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Japan">Japan</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="font-medium">Street Address</label>
          <input
            type="text"
            placeholder="Station Road"
            name="address"
            id="address"
            value={formData.address}
            onChange={changeHandler}
            className="border rounded-md border-blue-400 px-[2px] py-1 pl-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="city" className="font-medium">City</label>
          <input
            type="text"
            placeholder="Banaras"
            name="city"
            id="city"
            value={formData.city}
            onChange={changeHandler}
            className="border rounded-md border-blue-400 px-[2px] py-1 pl-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="state" className="font-medium">State/Province</label>
          <input
            type="text"
            placeholder="Uttar Pradesh"
            name="state"
            id="state"
            value={formData.state}
            onChange={changeHandler}
            className="border rounded-md border-blue-400 px-[2px] py-1 pl-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="postalCode" className="font-medium">Postal Code</label>
          <input
            type="text"
            placeholder="001122"
            name="postalCode"
            id="postalCode"
            value={formData.postalCode}
            onChange={changeHandler}
            className="border rounded-md border-blue-400 px-[2px] py-1 pl-2"
          />
        </div>
        <div>
          <fieldset>
            <legend className="font-medium">By Email</legend>
            <div className="flex gap-3"> 
              <input
                type="checkbox"
                name="comments"
                id="comments"
                checked={formData.comments}
                onChange={changeHandler}
              />
              <div className="mt-6">
            <label htmlFor="comments" className="font-medium">Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
          </div>
            </div>
            <div className="flex gap-3"> 
              <input
                type="checkbox"
                name="candidates"
                id="candidates"
                checked={formData.candidates}
                onChange={changeHandler}
              />
              <div className="mt-6">
            <label htmlFor="candidates" className="font-medium">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
            </div>
            <div className="flex gap-3">
              <input
                type="checkbox"
                name="offers"
                id="offers"
                checked={formData.offers}
                onChange={changeHandler}
              />
              <div className="mt-6">
            <label htmlFor="offers" className="font-medium">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
            </div>
          </fieldset>
          <fieldset>
            <div className="mt-1 mb-2">
            <legend className="font-medium">Push Notification</legend>
            <p>These are delivered via SMS to your mobile phone.</p>
            </div>
            <div className="flex">
            <input 
              type="radio"
              onChange={changeHandler}
              name="pushNotifications"
              value="everything"
              id="everything"
            />
            <label htmlFor="everything">Everything</label>
            </div>
            <div className="flex">
            <input 
              type="radio"
              onChange={changeHandler}
              name="pushNotifications"
              value="Same as email"
              id="sameAsEmail"
            />
            <label htmlFor="sameAsEmail">Same as email</label>
            </div>
            <div className="flex">
            <input 
              type="radio"
              onChange={changeHandler}
              name="pushNotifications"
              value="No Push Notifications"
              id="pushNothing"
            />
            <label htmlFor="pushNothing">No Push Notifications</label>
            </div>
          </fieldset>
          <button className="bg-blue-500 py-2 rounded-md px-4 mt-1 text-white">Save</button>
        </div>
      </form>
    </div>
  );
}

export default App;
