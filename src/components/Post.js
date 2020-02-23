import React, {Component} from 'react';
import User from './User';
export default class Post extends Component{
    render() {
        return(
            <div className="post">
                <User
                    src="https://lh3.googleusercontent.com/mH598wWAzVDAkJH4csek9kZrYBRUZEtlD7MLjhvhi3i7WJMmfiyBkEJb_KkfZpx6PeXtag=s85"
                    alt="man"
                    name="Oleg"
                    min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    gddddddddddddddddddddddddfgergrvfdbtgregbdfg gdgfdg dgfg gdf fdgf dgf gfdg ffg dgfg fdge rg gdfg ergre gfger
                </div>
            </div>
        );
    }

}