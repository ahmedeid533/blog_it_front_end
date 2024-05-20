import React from 'react';
import Categories from './Categories';
import TagsSidebarItem from './Tags';

function Sidebar() {
	return (
		<div className="col-lg-4">
		<div className="sidebar">
		  <div className="row">
			<div className="col-lg-12">
			  <div className="sidebar-item search">
				<form id="search_form" name="gs" method="GET" action="#">
				  <input type="text" name="q" className="searchText" placeholder="type to search..." />
				</form>
			  </div>
			</div>
			<div className="col-lg-12">
			  <div className="sidebar-item recent-posts">
				<div className="sidebar-heading">
				  <h2>Recent Posts</h2>
				</div>
				<div className="content">
				  <ul>
					<li><a href="post-details.html">
					  <h5>Vestibulum id turpis porttitor sapien facilisis scelerisque</h5>
					  <span>May 31, 2020</span>
					</a></li>
					<li><a href="post-details.html">
					  <h5>Vestibulum id turpis porttitor sapien facilisis scelerisque</h5>
					  <span>May 31, 2020</span>
					</a></li>
					<li><a href="post-details.html">
					  <h5>Vestibulum id turpis porttitor sapien facilisis scelerisque</h5>
					  <span>May 31, 2020</span>
					</a></li>
				  </ul>
				</div>
			  </div>
			</div>
			<Categories/>
			<TagsSidebarItem/>
		  </div>
		</div>
	  </div>
	)
}

export default Sidebar;
