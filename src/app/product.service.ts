import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class ProductService {

  _albumUr = `../assets/album.json`;

  constructor(private _http: Http) { }

}
