import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.css'],
})
export class PingComponent implements OnInit {
  inputValue: string;
  pingResponse: string;
  constructor(private http: HttpClient) {
    this.inputValue = '';
    this.pingResponse = '';
  }

  sendPing() {
    const URL = this.inputValue;
    const startTime = Date.now();
    this.http.get(URL).subscribe(
      (response) => {
        console.log('Status 200: CSuccessful connection');
        this.pingResponse = `Successful connection in : ${
          Date.now() - startTime
        } ms`;
        this.inputValue = '';
      },
      (error) => {
        console.log('Unable to reach server');
        this.pingResponse = 'Unable to reach server';
        this.inputValue = '';
      }
    );
  }

  ngOnInit(): void {}
}
