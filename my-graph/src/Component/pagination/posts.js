import React from "react";
import { connect } from "react-redux";

class Posts extends React.Component {
    render() {
        return <>
            {
                this.props.reducer.loading ? <h1>loading...</h1> : <>
                    <div className="adminDashCards">
                        {
                            this.props.reducer.postsArray.map((item) => {
                                return <>
                                    <div key={item} className="adminCard"><img alt="" className="adminproductsImg" src={item.profile} />
                                        <div className="admindataDiv animated fadeInDown" >
                                            <h2>{item.category}</h2>
                                            <h3>Rs:{item.price}</h3>
                                            <div id="admindescriptionDiv">
                                                <h4>{item.description}</h4>
                                            </div>
                                            <div id="adminBtnDiv">
                                                <button id={item._id} className="adminCardBtn" onClick={this.props.updateFormBtn}>Update</button>
                                                <button id={item._id} className="adminCardBtn" onClick={this.props.delBtn}>Delate</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            })
                        }
                    </div>
                </>
            }
        </>
    }
}

function mapStateToProps(state) {
    return {
        reducer: state.paginationReducer
    }
}

export default connect(mapStateToProps)(Posts);