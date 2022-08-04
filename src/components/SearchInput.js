import React ,{useState} from 'react';
import axios from 'axios';


function SearchInput() {

  const [photo , setPhoto]= useState('')
  const [result , setResult]= useState([])

const ChangePhoto=()=>{
axios.get(`https://pixabay.com/api/?key=27631793-96216b409d679f55a83a13003&q=${photo}&image_type=photo&pretty=true`)
.then((response)=>{
     console.log(response.data.hits);
    setResult (response.data.hits)

})
}

     return (
       <>
      <div className="container text-center my-4">
      <div className="input-group mb-3">
       <input type="text" className="form-control" placeholder="Search image here..." aria-label="Recipient's username" aria-describedby="button-addon2"
        onChange={(e)=>{
        setPhoto(e.target.value)  }}value={photo} />
        <div>
        <div className="input-group-append">
        <button type='button'id="button-addon2" onClick={ChangePhoto} className="btn btn-outline-secondary" > Search </button>
        </div>
        </div>
        </div>
      </div>
      <div className="container">
      <div className="row text-center text-lg-start">
        {
          result.map((value)=>{
            return (
              <div className="col-lg-3 col-md-4 col-6">
              <a  className="d-block md-4 h-100" >
              <img className="img-fluid img-thumbnail" keys={value.id} src={value.webformatURL}/>
              </a>
              </div>
            )
          })
        }
      </div>
      </div>
     </>

    )
}
export default SearchInput;
