import React, { useEffect ,useState} from "react";
import axios from "axios";
function JoinTeam() {
  const [add, setAdd] = useState([]);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position_id, setPositionId] = useState("");
  const [attach_cv, setAttachCv] = useState(null);
  const [getPosition, setGetPosition] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState(""); // Initialize with an empty string

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1010/positions/getpositions");
        setGetPosition(response.data);
      } catch (error) {
        console.error(`Error getting positions from frontend: ${error}`);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedPosition(event.target.value);
    console.log("setSelectedPosition",selectedPosition)
  };

  const handleFileChange = (event) => {
    // Get the selected file from the file input
    const file = event.target.files[0];
    setAttachCv(file);
    console.log("cv",attach_cv)

  };



const handlePost = async () => {
  try {
    // Create a FormData object
    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position_id", selectedPosition);
    formData.append("attach_cv", attach_cv); // Append the file

    const response = await axios.post("http://localhost:1010/jointeam/add", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Set content type to multipart form data
      },
    });

    console.log(response.data);
  } catch (error) {
    console.log(`Error fetching post data  ${error}`);
  }
};

  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center"
      style={{ marginTop: "75pt", minHeight: "50vh" }}
    >
      <h2 className="mb-5">Come Work With Us</h2>
      <form >
        <div className="row mb-3">
          <div className="col-lg-6">
            <label for="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={{ width: "100%" }}
              value={first_name} // Add this line

              onChange={(e)=>{setFirstName(e.target.value)}}
            />
          </div>
          <div className="col-lg-6 mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              style={{ width: "100%" }}
              value={last_name} // Add this line

              onChange={(e)=>{setLastName(e.target.value)}}

            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label for="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={{ width: "100%" }}
              value={email} // Add this line

              onChange={(e)=>{setEmail(e.target.value)}}

            />
          </div>
          <div className="col-lg-6 mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Phone
            </label>
            <input
              type="Number"
              className="form-control"
              id="exampleInputPassword1"
              style={{ width: "100%" }}
              value={phone} // Add this line

              onChange={(e)=>{setPhone(e.target.value)}}

            />
          </div>
        </div>
        <div className="row ">
        <div className="col-lg-6" style={{ marginTop: "25pt" }}>
        <select
  className="form-select"
  aria-label="Default select example"
  style={{ width: "100%" }}
  value={selectedPosition}
  onChange={handleSelectChange}
>
  <option value="">Select Position</option>
  {getPosition.map((position) => (
    <option key={position.id} value={position.id}>
      {position.positions}
    </option>
  ))}
</select>

    </div>

    <div className="col-lg-6 mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Attach Cv
            </label>
            <input
  type="file"
  accept=".pdf, image/*"
  className="form-control"
  id="attach_cv"
  style={{ width: "100%" }}
  onChange={handleFileChange}
/>

          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-5 "
          style={{ backgroundColor: "#27579A", width: "38%" }}
          onClick={handlePost}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default JoinTeam;
