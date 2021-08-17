import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  fileName: string| undefined;

  public editFileByName() {
    this.router.navigateByUrl(`/pdf-editor/${this.fileName}`);
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
