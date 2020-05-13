import React from "react";
import { initEditor, exportEditorData, loadEditorData } from "./rete/editor";

// import "./styles.css";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.editorContainer = React.createRef();
  }

  componentDidMount() {
    console.log("didMount");
    initEditor(this.editorContainer.current);
  }

  componentWillUnmount() {
    console.log("unmounting");
  }

  render() {
    return (
      <div>
      <h1>Editor</h1>
      <button onClick={() => exportEditorData()}>EXPORT</button>
      <input type="file" onChange={loadEditorData} accept=".json" />
      <div className="editor">
        <div ref={this.editorContainer} />
      </div>
      </div>
    );
  }
}

export default Editor;