        import React, { Component } from 'react';
        import './Articles.css';
        import Wrapper from "../components/Wrapper/index";
        import {NavBar} from '../Navbar/navbar';
        import Input from '../components/Input/BlogInput';

        class ArticleInfo extends Component {
          render() {
            return (
              <div >
            <Wrapper>
              <NavBar/>
<Input>
</Input>
            </Wrapper>
              </div>
            );
          }
        }

        export default ArticleInfo;
