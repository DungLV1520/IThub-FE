import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RegisterDomain } from "../model/ulink.model";

@Injectable({
  providedIn: "root",
})
export class ULinkService {
  baseBackendUrl = "https://ulink.asia/api/facebook";
  //baseBackendUrl = 'http://165.232.127.15:8080/api/facebook';
  //baseBackendUrl = 'http://localhost:8080/api/facebook';

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  httpOptionsUploadFile = {
    headers: new HttpHeaders({ "Content-Type": "multipart/form-data" }),
  };

  constructor(private http: HttpClient) {}

  registerDomain(register: RegisterDomain): Observable<HttpResponse<any>> {
    return this.http.post<any>(
      this.baseBackendUrl + "/register-page",
      JSON.stringify(register),
      this.httpOptions
    );
  }

  uploadImage(data?: any) {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "multipart/form-data");
    headers.append("Accept", "application/json");

    return this.http.post(this.baseBackendUrl + "/upload-file-image", data, {
      headers,
    });
  }
}
