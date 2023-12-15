import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./App.css";
import { useState } from "react";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blackquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image", "video"]
  ]
};

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <h3 className="heading">Welcome to the Editor</h3>
      <div className="row">
        <div className="editor">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="editor-input"
            modules={modules}
          />
        </div>
       
          
      </div>
    </div>
  );
}

export default App;
