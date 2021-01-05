import {Publishable} from './Publishable';

export class Project extends Publishable {

  tags: string[];
  srcURL: string;
  fullPageImageUrl: string;
  description: string;

  constructor() {
    super();
    this.tags = [];
    this.srcURL = '';
    this.fullPageImageUrl = '';
    this.description = "";
  }
}
