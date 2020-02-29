import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArticleDetails } from '../actions/articleActions'

class AllArticles extends Component {

    componentDidMount() {
      this.props.fetchArticleDetails()
    }

    render(){
      if (this.props.articles === null){
        return <h1>loading...</h1>
      }
      const { articles } = this.props;
        // console.log(Object.keys(this.props.articles.data))
        // if (error) {
        //     return <div>Error! {error.message}</div>;
        // }
        // if (loading) {
        //     return<div>Loading...</div>;
        // }
        const processWeek = (week) => {
          if(week<0){
            return week = `${40+week} of pregnancy`
          } else {
            return `${week} postpartum`
          }
        }

        const articleItems = articles.articles.map(article => (
            <div className="article" key={article.id}>
                <img src={article.image}></img>
                <div className="textContainer">
                  <h3>week {processWeek(article.week)}: <br/>{article.title}</h3>
                  <p>{article.content}</p>
                </div>
            </div>
        ));

        return(
            <main>
                <h1>topics</h1>
                <div className="articleContainer">
                  {articleItems}
                </div>  
            </main>
        )
    }
}
// AllArticles.propTypes = {
//     fetchArticles: PropTypes.func.isRequired,
//     articles: PropTypes.array.isRequired
// }

// const mapStateToProps = (state) => ({
//     articles: state.articles.items,
//     loading: state.articles.loading,
//     error: state.articles.error
// })


// export default connect(mapStateToProps)(AllArticles);

// export default App;
// const mapStateToProps = ({ data = {} }) => ({
//   data
// });

const mapStateToProps = state => {
  return{
    articles: state.articles
  } 
}

const mapDispatchToProps = dispatch => {
  return{
    fetchArticleDetails: () => dispatch(fetchArticleDetails())
  }
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(AllArticles);