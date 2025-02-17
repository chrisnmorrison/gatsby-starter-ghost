import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Navigation } from '.'
import config from '../../utils/siteConfig'

// Styles
import '../../styles/app.css'

const Categories = () => {

  return (
    <div className="container categories-list">
      <div className="category-1-3">
        <div className="list_item">
          <a href="https://blog.mesmerdesign.ca/tag/advice/" className="categories_list_link">
            <span className="category-background cat1"><img className="category-icon" src="/images/icons/categories/wine.svg" alt="Wine icon" />Advice</span>
          </a>
        </div>
      </div>
      <div className="category-1-3">
        <div className="list_item">
          <a href="https://blog.mesmerdesign.ca/tag/cyberpsychology/" className="categories_list_link">
            <span className="category-background cat2"><img className="category-icon" src="/images/icons/categories/puzzle.svg" alt="Puzzle icon"/>Cyberpsychology</span> </a>
        </div>
      </div>
      <div className="category-1-3">
        <div className="list_item">
          <a href="https://blog.mesmerdesign.ca/tag/innovation/" className="categories_list_link">
            <span className="category-background cat3"><img className="category-icon" src="/images/icons/categories/speedometer.svg" alt="Speedometer icon"/>Innovation</span> </a>
        </div>
      </div>
      <div className="category-1-3">
        <div className="list_item">
          <a href="https://blog.mesmerdesign.ca/tag/inspiration/" className="categories_list_link">
            <span className="category-background cat4"><img className="category-icon" src="/images/icons/categories/lightbulb.svg" alt="Lightbulb icon"/>Inspiration</span> </a>
        </div>
      </div>
      <div className="category-1-3">
        <div className="list_item">
          <a href="https://blog.mesmerdesign.ca/tag/tools/" className="categories_list_link">
            <span className="category-background cat5"><img className="category-icon" src="/images/icons/categories/tools.svg" alt="Tools icon"/>Tools</span>
          </a>
        </div>
      </div>
      <div className="category-1-3">
        <div className="list_item">
          <a href="https://blog.mesmerdesign.ca/tag/tutorials/" className="categories_list_link">
            <span className="category-background cat6"><img className="category-icon" src="/images/icons/categories/layers.svg" alt="Tutorials icon"/>Tutorials</span> </a>
        </div>
      </div>
    </div>
  )
}


export default Categories
