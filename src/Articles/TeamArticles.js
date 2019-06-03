        import React, { Component } from 'react';
        import './Articles.css';
        import Wrapper from "../components/Wrapper/index";
        import {NavBar} from '../Navbar/navbar';

        class ArticleInfo extends Component {
          render() {
            return (
              <div >
            <Wrapper>
              <NavBar/>
              <div class="w-column">
              <div class="column-4 w-col w-col-4 w-col-stack">
              <div data-ix="last-article-item-loading" class="article-item" >
              <a href="#" class="link-block-4 w-inline-block">
              <div class="article-bg item1"></div>
              </a><div class="article-descr">
              <div class="last-articles-tag">
              <a href="#" class="tag-white">story</a>
              <div class="tag-line-white"></div>
              </div>
              <a href="#" class="link-block-3 w-inline-block">
              <h1 class="h3-white">TITLE </h1>
              </a>
              <div class="bottom-line"><a href="#" class="date">DATE</a>
              <div class="read-btn">
              <a href="#" data-ix="yellow-triangle" class="see-more">Read</a>
              <img src="" class="yellow-triangle"/>
              </div>
              </div>
              </div>
              </div>
              </div>
              <div class="column-5 w-col w-col-4 w-col-stack">
              <div data-ix="last-article-item-loading-2" class="article-item" >
              <a href="#" class="link-block-4 w-inline-block">
              <div data-ix="play-btn" class="video-bg">
              <img src="" class="play-btn"/>
              </div>
              </a>
              <div class="article-descr"><div class="last-articles-tag">
              <a href="#" class="tag-white">Video</a>
              <div class="tag-line-white"></div>
              </div><a href="#" class="link-block-3 w-inline-block">
              <h1 class="h3-white">TITLE</h1>
              </a><div class="bottom-line">
              <a href="#" class="date">DATE</a>
              <div class="read-btn"><a href="#" data-ix="yellow-triangle" class="see-more">watch</a>
              <img src="" class="yellow-triangle"/></div>
              </div>
              </div>
              </div>
              </div>
              <div class="column-6 w-col w-col-4 w-col-stack"><div data-ix="last-article-item-loading-3" class="article-item" >
              <a href="#" class="link-block-4 w-inline-block"><div class="article-bg item3">
              </div>
              </a><div class="article-descr"><div class="last-articles-tag"><a href="#" class="tag-white">Article</a><div class="tag-line-white"></div>
              </div>
              <a href="#" class="link-block-3 w-inline-block"><h1 class="h3-white">TITLE</h1></a><div class="bottom-line"><a href="#" class="date">DATE</a>
              <div class="read-btn">
              <a href="#" data-ix="yellow-triangle" class="see-more">Read</a>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
            </Wrapper>
              </div>
            );
          }
        }

        export default ArticleInfo;
