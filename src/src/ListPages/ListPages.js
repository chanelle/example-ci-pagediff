import React, { PureComponent, Fragment } from 'react';

import './ListPages.css'
import Thumbnail from '../Thumbnail'
import Page from '../Page'


class ListPages extends PureComponent {

  // handle the current page displayed on screen; or the list if null
  state = { currentPage: null }
  focusPage = (currentPage) => { this.setState({ currentPage }) }
  displayList = () => { this.setState({ currentPage: null }) }

  renderPages() {
    const {
      diff_images,
      new_images,
      old_images
    } = this.props

    const thumbnails = [
      <Thumbnail
        diffSrc={diff_images[0]}
        newSrc={new_images[0]}
        oldSrc={old_images[0]}
        focusPage={this.focusPage}
        key={0} />,
    ]
    // const thumbnails = diff_images.map((page) =>
    //   <Thumbnail diffSrc={page} newSrc={} key={page} />
    // )
    return (
      <Fragment>
        <h3>Page with changes</h3>
        <div className="thumbnails-container">
          {thumbnails}
          {thumbnails}
          {thumbnails}
          {thumbnails}
        </div>
      </Fragment>
    )
  }

  renderPage() {
    const { currentPage } = this.state

    return (
      <Page
        displayList={this.displayList}
        {...currentPage}
        />
    )
  }

  render() {
    return (
      <div className="thumbnail-container">
        {this.state.currentPage
          ? this.renderPage()
          : this.renderPages()}
      </div>
    )
  }
}

export default ListPages;
