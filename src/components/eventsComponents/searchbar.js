import React from 'react'
import {connect} from 'react-redux'
import {SetInput} from '../../actions/SearchFilter'

 const Searchbar  = ({SetInput}) => {
   
        return (
            <div className="Searchbar-section">
            <div className="container">
            <div className="row">
                <div className="col-md-12 ">
                    <form action="" className="search-form">
                        <div className="form-group has-feedback">
                            <input type="text" className="form-control searchbar" name="search" id="search" placeholder="search"  onChange={(e)=> SetInput(e.target.value) } />
                        </div>
                    </form>
                </div>
            </div>
        </div>
            </div>
        )
    
}

export default connect(null,{SetInput})(Searchbar)
