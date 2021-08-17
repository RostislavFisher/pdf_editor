import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-pdf-editor',
  templateUrl: './pdf-editor.component.html',
  styleUrls: ['./pdf-editor.component.css']
})
export class PdfEditorComponent implements OnInit {
  fileNameFromRoute: string | null | undefined;
  htmlCode = '';
  constructor(
    private route: ActivatedRoute,
  ) { }

  public sendHTMLCode() {
    axios.post(`http://localhost:3000/files/saveFile/${this.fileNameFromRoute}`, {
      params: {htmlCode: this.htmlCode}
    });
  }

  public getHTMLCode() {
    axios.get(`http://localhost:3000/files/getFileHTML/${this.fileNameFromRoute}`).then(result => {
      this.htmlCode = result.data;
    });
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.fileNameFromRoute = routeParams.get('fileName');
    this.htmlCode = '';
    this.getHTMLCode();
  }

  downloadFile() {
    const link = document.createElement('a');
    this.sendHTMLCode();
    link.setAttribute('target', '_blank');
    link.setAttribute('href', `http://localhost:3000/files/downloadFilePDF/${this.fileNameFromRoute}`);
    link.setAttribute('download', `${this.fileNameFromRoute}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();

  }
}
