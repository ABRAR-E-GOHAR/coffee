import React from "react";
import { connect } from "react-redux";
import ScrollAnimation from 'react-animate-on-scroll';

class UserPosts extends React.Component {
    render() {
        return <>
            <div class="userDashCards">
                {
                    this.props.reducer.postsArray.map((item) => {
                        return <>
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="userCard"><img alt="" className="productsImg" src={item.profile} />
                                    <div className="dataDiv animated fadeInDown" >
                                        <h2>{item.category}</h2>
                                        <h3>{item.price}</h3>
                                        <div id="descriptionDiv">
                                            <h4>{item.description}</h4>
                                        </div>
                                        <button className="cartBtn" profile={item.profile} onClick={this.props.addToCart}>Add To Cart</button>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </>
                    })
                }
            </div>
        </>
    }
}

function mapStateToProps(state) {
    return {
        reducer: state.paginationReducer
    }
}

export default connect(mapStateToProps)(UserPosts);