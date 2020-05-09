/*
 * Filename: /Users/tonymedrano/Desktop/codigo-loco-project/codigo-loco-app/src/components/cl-modal/cl-modal.tsx
 * Path: /Users/tonymedrano/Desktop/codigo-loco-project/codigo-loco-app
 * Created Date: Saturday, May 9th 2020, 2:29:43 pm
 * Author: Tony Medrano
 * 
 * Copyright (c) 2020 Your Company
 */

import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'cl-modal',
  styleUrl: 'cl-modal.scss',
  shadow: true,
})
export class ClModal {

  @Prop() title: string = "Heading";
  
  render() {
    return (
      <Host>
        <div id="dialog" class="overlay" role="dialog">
          <div class="dialog-body">
           <h2>{this.title}</h2>
            <a class="close" href="#" aria-label="Close dialog">&times;</a>
            <div class="content">
              <slot></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
