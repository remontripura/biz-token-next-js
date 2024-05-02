import React from 'react';
import { useEffect, useState } from "react";
import {
  EditorState,
  convertFromHTML,
  ContentState,
  convertToRaw,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const Editors = ({ initialData }) => {


  const blocksFromHTML = convertFromHTML(initialData);

  const contentState = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );


  const [firstValue, setFirstValue] = useState(() =>
    EditorState.createWithContent(contentState)
  );

  return (
    < >
      <Editor
        editorState={firstValue}
        onEditorStateChange={setFirstValue}
        required={true}
        wrapperClassName="wrapper-class"
        toolbarClassName="toolbar-class"
        editorClassName="editor-class"
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "fontFamily",
            "list",
            "textAlign",
            "colorPicker",
            "link",
            "embedded",
            "emoji",
            "remove",
            "history",
          ],
          image: {
            urlEnabled: true,
            uploadEnabled: true,
            alignmentEnabled: true,
            uploadCallback: undefined,
            previewImage: true,
            defaultSize: {
              height: "auto",
              width: "auto",
            },
            fontSize: { className: "demo-option-custom-medium" },
            fontFamily: {
              options: [
                "Arial",
                "sans-serif",
                "Georgia",
                "Impact",
                "Tahoma",
                "Times New Roman",
                "Verdana",
              ],
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
            },
          },
        }}
      />
    </>
  );
};

export default Editors;