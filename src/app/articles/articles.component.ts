import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles:any = [];
  loadingArticles = false;
  articlesError;
  tags: any = [];
  comments: any = [];
  constructor(private service: ArticlesService) { }

  ngOnInit(): void {

  }
  loadArticles() {
    this.loadingArticles = true;
    this.articles = [];
    this.service.getArticles().subscribe(
      response => {
        this.loadingArticles = false;
        this.articles = response.articles},

        error => {  
          this.loadingArticles = false;
          this.articlesError = error}
        );
  }
  loadTags() {
    this.service.getTags().subscribe(response => { this.tags = response.tags.filter(each => {return each.length > 3} )} );
  }

  loadTagArticles(unTag) {
    this.loadingArticles = true;
    this.service.getArticlesForTag(unTag).subscribe(
      response => {
        this.loadingArticles = false;
        this.articles = response.articles},

        error => {  
          this.loadingArticles = false;
          this.articlesError = error}
        );
      console.log('Llamada para obtenerb tag', unTag);
  }

  loadComments(article) {
    this.service.getCommentsForArticle(article).subscribe( (response) => article.comments = response.comments);
  }
  saveComment(article, input) {

    this.service.saveComment(article, input.value);
  }

  login() {
    this.service.login();
  }
}
