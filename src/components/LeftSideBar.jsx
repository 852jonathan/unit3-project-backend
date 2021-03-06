import React from 'react'
import PropTypes from 'prop-types'
import { Navigation } from 'react-minimal-side-navigation'
import { withRouter } from 'react-router'

const CompsLeftSidebar = (props) => {
  const { history, location } = props

  return (
    <div id="left-sidebar" className="d-flex flex-column align-items-start col-3 mt-5 w-20">
      <div className="">
        <h4 id="side-bar-category-title">
          Categories
        </h4>
      </div>

      <Navigation
        activeItemId={`${location.pathname}${location.search}`}
        onSelect={({ itemId }) => {
          history.push(itemId)
        }}
        items={[
          {
            title: 'All Categories',
            itemId: '/products'
          },
          {
            title: 'Men\'s Tops',
            itemId: '/products?catName=1'

          },
          {
            title: 'Men\'s Shoes',
            itemId: '/products?catName=2'

          },
          {
            title: 'Men\'s Hats',
            itemId: '/products?catName=3'

          }
        ]}
      />
    </div>
  )
}

CompsLeftSidebar.propTypes = {
  history: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired
}

export default withRouter(CompsLeftSidebar)
