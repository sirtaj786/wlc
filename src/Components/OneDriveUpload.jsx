
import useDrivePicker from "react-google-drive-picker";


function App() {
  const [openPicker] = useDrivePicker();

  
  var handleUploader = () => {
    openPicker({
      clientId:
        "543724309132-npdcoht8v75qi3dva9qvto0oe8tcu7gq.apps.googleusercontent.com",
      developerKey: "AIzaSyAHeEoN0scrFHvCkZaqayq4JVBeoxgM4Ak",
      viewId: "DOCS",
      token:
        "ya29.a0AVvZVsqiiAbux4gl4UhGjXKsDuE7SSyhZXMnKZcHNn3ZtkAUiajA71vDGIkpOs1BzkT9ZvtlY4fzQ8pFk64Nv31yrAEbr-fcTf6dLsg1HNUmo3Hwh2VXFIBWqO7CT00WJJIEd1LYMII6Y5VE3fyeevBAAY6maCgYKAUsSARISFQGbdwaINxuncJQCNBUc0TacM4GaqQ0163",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
    });
  };


  return (
    <div>
      <button style={{display:'flex',margin:'auto'}} onClick={() => handleUploader()}>UploadToDrive</button>
      <br/>
      <br/>
      <br/>
      
    </div>
  );
}

export default App;
