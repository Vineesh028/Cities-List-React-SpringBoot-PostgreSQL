import './CityList.css';
import React, { useState, useEffect } from "react";
import CityGrid from './CityGrid';
import ReactPaginate from 'react-paginate';
import "./pagination-row.css";


const PER_PAGE = 20;
const CityList = props => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.images);
  }, [props.images]);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = data
    .slice(offset, offset + PER_PAGE);


  const pageCount = Math.ceil(data.length / PER_PAGE);  



  if(props.images.length > 0){

    console.log('CityList render: ',props.images);
    console.log('CityList render 2: ',currentPageData);
   
    const images = currentPageData.map(image => {
      //let cityId = image.id;  
      return <CityGrid key={image.id} cityId={image.id} image={image.photo} name={image.city_name}/>;
    });

   // return <div className="city-list">{images}</div>;

    return (
      <div className="city-list">
          
    
            {images}
  <div className='paginate-view'>
  <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={ "pagination-row"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
         
        />
  </div>
         
    
        
      </div>
    );



  }




};

export default CityList;