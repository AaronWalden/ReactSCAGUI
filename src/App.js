import './App.css';
//import {Markup} from 'interweave';
import React, {Component} from 'react';
import {render} from 'react-dom';
import {saveAs} from "file-saver";
import {moveFile} from "move-file";


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      fileName: '',
      fileContent: ''
    };
  }
  handleFileChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      this.setState({fileName: file.name, fileContent: reader.result});
      const element= document.createElement(file.name)
      element.href=URL.createObjectURL(file);
      element.download = file.name + ".html";
      document.body.appendChild(element);
      element.onClick();

    }
    reader.onerror = () => {
      console.log('file error', reader.error)
    }
  }
  /*moveTo = (async (e) => {
    const fileData = this.state.file;
    const path = "C:\Users\walde\OneDrive\Desktop\testpath";
     await moveFile(fileData, path);
    alert('fileMoved');
  }) ();*/
 /*  downloadFile = e =>{
    const fileData = document.getElementByid("fileCont"); 
    const filen = ;
  }*/

  saveFile = () =>{
    const blob = new Blob([this.state.fileContent] , {type: "text/plain;charset=utf-8"});
    const Fname = (this.state.fileName);
    const path = "C:\Users\walde\OneDrive\Desktop\testpath";
    saveAs(
     blob,
     Fname,
      path
     
    );
  }

render(){
  return(
    <div className='App'>
    <form>
    <input type='file' onChange={this.handleFileChange}></input>
    <button id="downloadBtn" onClick={this.saveAs} value="download" >Download</button>
    </form>
    <p>{this.state.fileName}</p>
    <p>{this.state.fileContent}</p>
    </div>
  );
}

}
/*import {convert} from 'text_to_html';
//import {FS_Tooltip} from 'react-fs-components';

const { convert } = require('text_to_html');
// There is also an alias to `convert` called `htmlToText`.
const text = 'Hello World';
const html = convert(text, {
  wordwrap: 130
});
console.log(html);*/
//template = '<p>' + template.replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br>') + '</p>';


/*function App() {
  return (
    <div className="App">
    <header className='App-header'>
	  <form id='fa'>
	  <input type="file" id="myfile" name="myfile" />
		<br/>	
        <button type="submit" id='sub'>Submit</button>
		</form>
    </header>
    <Markup content={document.getElementById('App-header')}/>
    </div>
    

  );
}

function encoded (){ 

}*/
/*function encoded (filename, content){
		const element = document.createElement('a');

		const blob = new Blob([content], { type: 'plain/text' });

		//createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter.
		const fileUrl = URL.createObjectURL(blob);

		//setAttribute() Sets the value of an attribute on the specified element.
		element.setAttribute('href', fileUrl); //file location
		element.setAttribute('download', filename); // file name
		element.style.display = 'none';

		//use appendChild() method to move an element from one element to another
		document.body.appendChild(element);
		element.click();

		//The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node
		document.body.removeChild(element);
		};

		window.onload = () => {
		document.getElementById('download').
		addEventListener('click', e => {

			//The value of the file name input box
			const filename = document.getElementById('filename').value;

			//The value of what has been input in the textarea
			const content = document.getElementById('content').value;


			// The && (logical AND) operator indicates whether both operands are true. If both operands have nonzero values, the result has the value 1 . Otherwise, the result has the value 0.

			if (filename && content) {
				encoded(filename, content);
			}
			else if ((filename && content) && filename !== null) {
        		fs = require('fs');

                fs.appendFile('filename','content', function(err) {
                    if(err) throw err;
                    console.log('Updated!');
                });

            }
		});
	};
*/
export default App;
