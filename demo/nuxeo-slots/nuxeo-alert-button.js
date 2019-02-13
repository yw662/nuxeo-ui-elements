/**
@license
(C) Copyright Nuxeo Corp. (http://nuxeo.com/)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

{
  class AlertButtonDemo extends PolymerElement {
    static get template() {
      return html`
    <paper-button raised="" on-tap="_act">
      <slot></slot>
    </paper-button>
`;
    }

    static get is() {
      return 'nuxeo-alert-button';
    }

    static get properties() {
      return {
        message: {
          value: '',
          type: String,
        },
      };
    }

    _act() {
      alert(this.message);
    }
  }
  customElements.define(AlertButtonDemo.is, AlertButtonDemo);
}
