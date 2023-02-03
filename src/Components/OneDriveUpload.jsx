import { Client } from "@microsoft/microsoft-graph-client";
import { useState } from "react";
const key= "9800ef16-9e1e-43b5-ad44-b5ac1ec49ad9"
function OneDriveUpload() {
  const [data, setdata] = useState({});
  const graphClient = Client.init({
    authProvider: (done) => {
      done(null, "~2x8Q~gGJQgof3jIKedd2fcWi1DouGLntGwdob14");
    },
  });

  async function uploadFile (file) {

    const accessToken = "9800ef16-9e1e-43b5-ad44-b5ac1ec49ad9";
    const endpoint = `https://graph.microsoft.com/v1.0/me/drive/root/children/${file.name}/content`;
    const options = {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': file.type,
      },
      body: file,
      onUploadProgress: (progress) => {
        setUploadProgress(Math.round((progress.loaded / progress.total) * 100));
      },
    };

    try {
      const response = await fetch(endpoint, options);
      if (!response.ok) throw new Error(response.statusText);
      console.log('File uploaded successfully');
    } catch (error) {
      console.error(error);
    }
  }

 

  const handlesubmit = () => {
    // console.log(data);
    uploadFile(data).then((response) => {
      console.log(response);
    });
  };
  const handlefile = (e) => {
    setdata(e.target.files[0]);
    // console.log(e.target.files[0])
  }; const handleCancel = () => console.log("CANCELLED");

  const handleSuccess = (files) => {
    console.log("SUCCESS: ", files);

  }

  const handleError = (err) => console.log("ERROR: ", err);
  return(
  <div className="uploaddiv">
        <h1 className="text">Upload file</h1>
        <input type="file" onChange={(e) => handlefile(e)} />
        <div>
          <button className="button" onClick={handlesubmit}>
            Submit
          </button>
        </div>
      </div>
  )
}
export default OneDriveUpload