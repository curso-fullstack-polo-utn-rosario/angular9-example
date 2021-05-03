import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {


  readonly baseUrl = 'https://conduit.productionready.io/api/';
  user: any;

  constructor(private http: HttpClient) { }
  getArticles() {
    const url = this.baseUrl + 'articles?limit=20';
    return this.http.get<any>(url);
  }

  getArticlesForTag(tag, limit = 5) {
    const url = `${this.baseUrl}articles?tag=${tag}&limit=${limit}`;
    return this.http.get<any>(url);
  }

  getTags() {
    const url = this.baseUrl + 'tags';
    return this.http.get<any>(url);
  }
  getCommentsForArticle(article: any) {
    const url = `${this.baseUrl}articles/${article.slug}/comments`;
    return this.http.get<any>(url);  }

    login() {
      const urlLogin = `${this.baseUrl}users/login`;
      this.http.post<any>(urlLogin, {
        user:{
          email: "pruebacursofullstack@mail.com",
          password: "pruebacursofullstack@mail.com"
        }
      }).subscribe(response => this.user = response.user);
      
    }

    saveComment(article: any, value: string) {

        let headers = new HttpHeaders();
        headers = headers.append('Authorization',  'Token ' + this.user.token);

        const httpOptions = {
          headers
        };
        const url = `${this.baseUrl}articles/${article.slug}/comments`;
        return this.http.post<any>(url, {body: value}, httpOptions).subscribe();  

    }

}
