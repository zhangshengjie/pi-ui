/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-10-12 04:15:03
 * @LastEditors: cejay
 * @LastEditTime: 2022-10-18 18:58:06
 */
import { Component } from '@angular/core';

import { invoke } from "@tauri-apps/api/tauri";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  greetingMessage = "";

  constructor() {}


  greet(name: string): void {
    invoke<string>("greet", { name }).then((text) => {
      this.greetingMessage = text;
    });
  }
}
