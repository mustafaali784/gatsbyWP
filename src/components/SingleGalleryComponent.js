import React from "react";
import renderHTML from 'react-render-html';
import {Link} from 'gatsby';

export default class SingleGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : ''
        }
    }
    componentDidMount() {
        const urlParam = new URLSearchParams(window.location.search);
        const id = urlParam.get('id')
        this.setState({
            id
        })
    }
    renderContent() {
        if(this.state.id === ''){
            return null;
        }
        let singleData;
        this.props.data.map(el => {
            if (el.node.id == this.state.id) {
                singleData = el.node;
            }
        })
        const gallery= singleData;
        return (
            <div>
                <div><Link to = "/gallery" >Back To Gallery</Link></div>
                <Link to="/" >Home</Link>
               <center>
                   <h3>
                    Title : {gallery.title}
                </h3>
                   </center> 
                <br/>
                <h3>
                    Content :-
                </h3>
                <br/>
                <div>
                    {renderHTML(gallery.content)}
                </div>
                <img className="img-responsive" style = {{height : '400px' , width : "400px"}} src = {gallery.image} />
            </div>

        )
    }
    
    render() {
        return (
            <div>{this.renderContent()}</div>
        )
    }
}
