import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-nmap',
  templateUrl: './nmap.component.html',
  styleUrls: ['./nmap.component.css'],
})
export class NmapComponent implements AfterViewInit {
  //Interpollation input form template
  submitted = false;
  userData: any = {};
  selectedScan: string | undefined;
  getData(data: NgForm) {
    console.warn(data);
    this.userData = data;
    this.submitted = true;
  }

  //Enregistrer le template généré
  @ViewChild('textarea')
  textarea!: ElementRef<any>;
  ngAfterViewInit() {
    this.saveTextareaContent();
  }
  saveTextareaContent() {
    const textareaContent = this.textarea.nativeElement.value;
    const file = new Blob([textareaContent], { type: 'text/plain' });
    FileSaver.saveAs(file, 'template.txt');
  }
}
